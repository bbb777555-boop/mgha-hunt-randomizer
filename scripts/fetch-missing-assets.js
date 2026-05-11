'use strict'
const https = require('https')
const http  = require('http')
const fs    = require('fs')
const path  = require('path')

const WEAPONS_DIR = path.join(__dirname, '..', 'assets', 'weapons')
const ITEMS_DIR   = path.join(__dirname, '..', 'assets', 'items')
fs.mkdirSync(ITEMS_DIR, { recursive: true })

function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

function get(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if ([301, 302].includes(res.statusCode) && res.headers.location) {
        return get(res.headers.location).then(resolve).catch(reject)
      }
      const chunks = []
      res.on('data', c => chunks.push(c))
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks) }))
    })
    req.on('error', reject)
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')) })
  })
}

function extractWikiImage(html) {
  // Look for wiki weapon/item images
  const patterns = [
    /<img[^>]+src="(\/images\/(?:Weapon_|Item_|Consumable_|Tool_)[^"?]+)(?:\?[^"]*)?"/i,
    /<img[^>]+src="(\/images\/[A-Z][^"?]+\.png)(?:\?[^"]*)?"/i,
  ]
  for (const p of patterns) {
    const m = html.match(p)
    if (m) return `https://huntshowdown.wiki.gg${m[1]}`
  }
  return null
}

async function fetchWikiImage(wikiName, destPath) {
  const urls = [
    `https://huntshowdown.wiki.gg/wiki/Weapons/${wikiName}`,
    `https://huntshowdown.wiki.gg/wiki/${wikiName}`,
  ]
  for (const url of urls) {
    try {
      const { status, body } = await get(url)
      if (status !== 200) continue
      const imgUrl = extractWikiImage(body.toString())
      if (!imgUrl) continue
      const imgRes = await get(imgUrl)
      if (imgRes.status !== 200) continue
      fs.writeFileSync(destPath, imgRes.body)
      console.log(`  ✔ ${path.basename(destPath)} ← ${imgUrl}`)
      return true
    } catch { /* try next */ }
  }
  console.log(`  ✗ ${path.basename(destPath)} — not found`)
  return false
}

async function fetchDirectImage(imageUrl, destPath) {
  try {
    const { status, body } = await get(imageUrl)
    if (status !== 200) return false
    fs.writeFileSync(destPath, body)
    console.log(`  ✔ ${path.basename(destPath)} ← direct`)
    return true
  } catch {
    return false
  }
}

// ── Missing weapon images ───────────────────────────────────────────────────
const MISSING_WEAPONS = [
  { id: 'centennial_shorty_pm',  wiki: 'Centennial_Shorty_Pointman' },
  { id: 'vetterli_71_cyclone',   wiki: 'Vetterli_71_Cyclone'        },
]

// ── Consumables & Tools ─────────────────────────────────────────────────────
const ITEMS = [
  { id: 'first_aid_kit',     wiki: 'First_Aid_Kit'       },
  { id: 'blank_decoys',      wiki: 'Decoys'               },
  { id: 'decoys',            wiki: 'Decoys'               },
  { id: 'decoy_fuses',       wiki: 'Decoy_Fuses'          },
  { id: 'flare_pistol',      wiki: 'Flare_Pistol'         },
  { id: 'fusees',            wiki: 'Fusees'               },
  { id: 'dusters',           wiki: 'Dusters'              },
  { id: 'heavy_knife',       wiki: 'Heavy_Knife'          },
  { id: 'knife',             wiki: 'Knife'                },
  { id: 'knuckle_knife',     wiki: 'Knuckle_Knife'        },
  { id: 'throwing_axes',     wiki: 'Throwing_Axes'        },
  { id: 'throwing_knives',   wiki: 'Throwing_Knives'      },
  { id: 'spear',             wiki: 'Spear'                },
  { id: 'derringer',         wiki: 'Derringer'            },
  { id: 'quad_derringer',    wiki: 'Quad_Derringer'       },
  { id: 'alert_trip_mines',  wiki: 'Alert_Trip_Mines'     },
  { id: 'conc_trip_mines',   wiki: 'Concertina_Trip_Mines'},
  { id: 'poison_trip_mines', wiki: 'Poison_Trip_Mines'    },
  { id: 'bear_traps',        wiki: 'Bear_Traps'           },
  { id: 'choke_bombs',       wiki: 'Choke_Bombs'          },
  { id: 'spyglass',          wiki: 'Spyglass'             },
  { id: 'ammo_box',          wiki: 'Ammo_Box'             },
  { id: 'tool_box',          wiki: 'Tool_Box'             },
  { id: 'medkit',            wiki: 'Medical_Pack'         },
  { id: 'fire_bomb',         wiki: 'Fire_Bomb'            },
  { id: 'hellfire_bomb',     wiki: 'Hellfire_Bomb'        },
  { id: 'liquid_fire_bomb',  wiki: 'Liquid_Fire_Bomb'     },
  { id: 'dyn_stick',         wiki: 'Dynamite_Stick'       },
  { id: 'dyn_bundle',        wiki: 'Dynamite_Bundle'      },
  { id: 'waxed_dyn',         wiki: 'Waxed_Dynamite_Stick' },
  { id: 'big_dyn',           wiki: 'Big_Dynamite_Bundle'  },
  { id: 'stick_bomb',        wiki: 'Stick_Bomb'           },
  { id: 'frag_bomb',         wiki: 'Frag_Bomb'            },
  { id: 'dark_dyn',          wiki: 'Dark_Dynamite_Satchel'},
  { id: 'hive_bomb',         wiki: 'Hive_Bomb'            },
  { id: 'poison_bomb',       wiki: 'Poison_Bomb'          },
  { id: 'chaos_bomb',        wiki: 'Chaos_Bomb'           },
  { id: 'antidote_shot',     wiki: 'Antidote_Shot'        },
  { id: 'antidote_weak',     wiki: 'Antidote_Shot'        },
  { id: 'regen_shot',        wiki: 'Regeneration_Shot'    },
  { id: 'regen_weak',        wiki: 'Regeneration_Shot'    },
  { id: 'stamina_shot',      wiki: 'Stamina_Shot'         },
  { id: 'stamina_weak',      wiki: 'Stamina_Shot'         },
  { id: 'vitality_shot',     wiki: 'Vitality_Shot'        },
  { id: 'vitality_weak',     wiki: 'Vitality_Shot'        },
  { id: 'recovery_shot',     wiki: 'Recovery_Shot'        },
  { id: 'heal_syringe',      wiki: 'Healing_Syringe'      },
  { id: 'stalker_beetle',    wiki: 'Stalker_Beetle'       },
  { id: 'choke_beetle',      wiki: 'Choke_Beetle'         },
  { id: 'fire_beetle',       wiki: 'Fire_Beetle'          },
  { id: 'conc_bomb',         wiki: 'Concertina_Bomb'      },
  { id: 'flash_bomb',        wiki: 'Flash_Bomb'           },
]

async function main() {
  console.log('\n═══ Missing weapon images ═══')
  for (const w of MISSING_WEAPONS) {
    const dest = path.join(WEAPONS_DIR, `${w.id}.png`)
    if (fs.existsSync(dest)) { console.log(`  ⟳ ${w.id}.png already exists`); continue }
    await fetchWikiImage(w.wiki, dest)
    await delay(200)
  }

  console.log('\n═══ Consumable / Tool images ═══')
  let ok = 0, fail = 0
  const seen = new Set()
  for (const item of ITEMS) {
    const dest = path.join(ITEMS_DIR, `${item.id}.png`)
    if (fs.existsSync(dest)) { console.log(`  ⟳ ${item.id}.png exists`); ok++; continue }
    if (seen.has(item.wiki)) {
      // Copy from already-fetched version
      const src = ITEMS.find(i => i.wiki === item.wiki && fs.existsSync(path.join(ITEMS_DIR, `${i.id}.png`)))
      if (src) { fs.copyFileSync(path.join(ITEMS_DIR, `${src.id}.png`), dest); ok++; continue }
    }
    seen.add(item.wiki)
    // Try wiki page
    const urls = [
      `https://huntshowdown.wiki.gg/wiki/Consumable/${item.wiki}`,
      `https://huntshowdown.wiki.gg/wiki/Tool/${item.wiki}`,
      `https://huntshowdown.wiki.gg/wiki/${item.wiki}`,
    ]
    let found = false
    for (const url of urls) {
      try {
        const { status, body } = await get(url)
        if (status !== 200) continue
        // Try various image patterns
        const html = body.toString()
        const imgPatterns = [
          new RegExp(`<img[^>]+src="(/images/${item.wiki}[^"?]*)`, 'i'),
          /<img[^>]+class="[^"]*infobox[^"]*"[^>]+src="([^"?]+)(?:\?[^"]*)?"/i,
          /<img[^>]+src="(\/images\/[A-Z][^"?]+(?:png|jpg))"/i,
        ]
        let imgUrl = null
        for (const p of imgPatterns) {
          const m = html.match(p)
          if (m) { imgUrl = m[1].startsWith('http') ? m[1] : `https://huntshowdown.wiki.gg${m[1]}`; break }
        }
        if (!imgUrl) continue
        const imgRes = await get(imgUrl)
        if (imgRes.status !== 200) continue
        fs.writeFileSync(dest, imgRes.body)
        console.log(`  ✔ ${item.id}.png`)
        found = true; ok++
        break
      } catch { /* try next */ }
    }
    if (!found) { console.log(`  ✗ ${item.id}`); fail++ }
    await delay(200)
  }

  console.log(`\nDone. Items: ${ok} ok, ${fail} failed.`)
}

main().catch(console.error)
