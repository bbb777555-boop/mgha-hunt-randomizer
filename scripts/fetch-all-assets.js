'use strict'
/**
 * Fetch missing weapon images + consumable/tool/ammo icons via MediaWiki API.
 * Same API approach as fetch-weapon-images.js (imageinfo + binary download).
 *
 * Run: node scripts/fetch-all-assets.js
 */
const https = require('https')
const fs    = require('fs')
const path  = require('path')

const API_BASE    = 'https://huntshowdown.wiki.gg/api.php'
const WEAPONS_DIR = path.join(__dirname, '..', 'assets', 'weapons')
const ITEMS_DIR   = path.join(__dirname, '..', 'assets', 'items')
const AMMO_DIR    = path.join(__dirname, '..', 'assets', 'ammo')
const DELAY_MS    = 300

const BROWSER_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'Accept': 'application/json, */*',
  'Referer': 'https://huntshowdown.wiki.gg/',
}

// ─── Helpers (identical pattern to fetch-weapon-images.js) ──────────────────

function get(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : require('http')
    const req = client.get(url, { headers: BROWSER_HEADERS }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume()
        let loc = res.headers.location
        if (loc.startsWith('/')) loc = 'https://huntshowdown.wiki.gg' + loc
        return resolve(get(loc))
      }
      let body = ''
      res.setEncoding('utf8')
      res.on('data', c => body += c)
      res.on('end', () => resolve({ status: res.statusCode, body }))
    })
    req.on('error', reject)
    req.setTimeout(12000, () => { req.destroy(); reject(new Error('timeout')) })
  })
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : require('http')
    client.get(url, { headers: { ...BROWSER_HEADERS, Accept: 'image/png,image/*,*/*' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume()
        return resolve(downloadBinary(res.headers.location, dest))
      }
      if (res.statusCode !== 200) {
        res.resume()
        return reject(new Error(`HTTP ${res.statusCode}`))
      }
      const tmp = dest + '.tmp'
      const stream = fs.createWriteStream(tmp)
      res.pipe(stream)
      stream.on('finish', () => { fs.renameSync(tmp, dest); resolve() })
      stream.on('error', err => { try { fs.unlinkSync(tmp) } catch {} reject(err) })
    }).on('error', reject)
  })
}

const sleep = ms => new Promise(r => setTimeout(r, ms))

// Query MediaWiki imageinfo API for a full File: title
async function getImageUrl(fullTitle) {
  const url = `${API_BASE}?action=query&titles=${encodeURIComponent(fullTitle)}&prop=imageinfo&iiprop=url&format=json`
  try {
    const { status, body } = await get(url)
    if (status !== 200) return null
    const data = JSON.parse(body)
    const pages = data.query && data.query.pages
    if (!pages) return null
    const page = pages[Object.keys(pages)[0]]
    if (!page || page.missing !== undefined) return null
    return (page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url) || null
  } catch { return null }
}

// Query allimages to discover available image names by prefix (for info/debug)
async function listImages(prefix, limit = 100) {
  const url = `${API_BASE}?action=query&list=allimages&aifrom=${encodeURIComponent(prefix)}&ailimit=${limit}&aiprop=url|title&format=json`
  try {
    const { status, body } = await get(url)
    if (status !== 200) return []
    const data = JSON.parse(body)
    const imgs = (data.query && data.query.allimages) || []
    return imgs.filter(img =>
      img.title.toLowerCase().startsWith(prefix.toLowerCase()) && img.title.endsWith('.png')
    )
  } catch { return [] }
}

// Try each candidate File: title in order, return first hit
async function firstHit(candidates) {
  for (const c of candidates) {
    const url = await getImageUrl(c)
    await sleep(DELAY_MS)
    if (url) return { title: c, url }
  }
  return null
}

// Download if not already present (force = always overwrite)
async function fetchAndSave(candidates, destPath, label, force = false) {
  if (!force && fs.existsSync(destPath)) {
    console.log(`  [skip] ${label}`)
    return 'skip'
  }
  process.stdout.write(`  ${label.padEnd(36)} `)
  const hit = await firstHit(candidates)
  if (!hit) {
    console.log('❌ not found on wiki')
    return 'fail'
  }
  try {
    await downloadBinary(hit.url, destPath)
    const size = Math.round(fs.statSync(destPath).size / 1024)
    console.log(`✓ ${path.basename(hit.title)} (${size}KB)`)
    return 'ok'
  } catch (e) {
    console.log(`❌ download: ${e.message}`)
    return 'fail'
  }
}

// ─── Missing weapon images (force-overwrite duplicates from previous session) ──

const MISSING_WEAPONS = [
  {
    id: 'centennial_shorty_pm',
    candidates: [
      'File:Weapon_Centennial_Shorty_Pointman.png',
      'File:Weapon_Centennial_Pointman.png',
      'File:Weapon_Centennial_Shorty_PM.png',
    ],
  },
  {
    id: 'vetterli_71_cyclone',
    candidates: [
      'File:Weapon_Vetterli_71_Cyclone.png',
      'File:Weapon_Vetterli_Cyclone.png',
    ],
  },
]

// ─── Consumables & Tools ────────────────────────────────────────────────────

const ITEMS = [
  // ── Tools ──
  { id:'spyglass',          candidates:['File:Tool_Spyglass.png',                  'File:Spyglass.png',              'File:Item_Spyglass.png'               ]},
  { id:'ammo_box',          candidates:['File:Consumable_Ammo_Box.png',            'File:Tool_Ammo_Box.png',         'File:Ammo_Box.png'                    ]},
  { id:'tool_box',          candidates:['File:Consumable_Tool_Box.png',            'File:Tool_Tool_Box.png',         'File:Tool_Toolbox.png'                ]},
  { id:'flare_pistol',      candidates:['File:Tool_Flare_Pistol.png',              'File:Flare_Pistol.png',          'File:Item_Flare_Pistol.png'           ]},
  { id:'fusees',            candidates:['File:Tool_Fusees.png',                    'File:Tool_Fusee.png',            'File:Fusees.png',    'File:Fusee.png'        ]},
  { id:'blank_decoys',      candidates:['File:Tool_Blank_Fire_Decoys.png',         'File:Tool_Blank_Decoys.png',     'File:Tool_Blank_Decoy.png'            ]},
  { id:'decoys',            candidates:['File:Tool_Decoys.png',                    'File:Tool_Decoy.png',            'File:Tool_Fire_Decoy.png',         'File:Decoy.png']},
  { id:'decoy_fuses',       candidates:['File:Tool_Decoy_Fuses.png',               'File:Tool_Decoy_Fuse.png',       'File:Decoy_Fuses.png',  'File:Decoy_Fuse.png' ]},
  { id:'dusters',           candidates:['File:Tool_Dusters.png',                   'File:Tool_Duster.png',           'File:Dusters.png'                     ]},
  { id:'bear_traps',        candidates:['File:Tool_Bear_Traps.png',                'File:Tool_Bear_Trap.png',        'File:Bear_Traps.png',  'File:Bear_Trap.png'  ]},
  { id:'alert_trip_mines',  candidates:['File:Tool_Alert_Trip_Mines.png',          'File:Tool_Alert_Trip_Mine.png',  'File:Tool_Alarm_Trip_Mine.png',   'File:Alert_Trip_Mine.png']},
  { id:'conc_trip_mines',   candidates:['File:Tool_Concertina_Trip_Mines.png',     'File:Tool_Concertina_Trip_Mine.png','File:Tool_Barbed_Wire_Trip_Mine.png','File:Concertina_Trip_Mine.png']},
  { id:'poison_trip_mines', candidates:['File:Tool_Poison_Trip_Mines.png',         'File:Tool_Poison_Trip_Mine.png', 'File:Poison_Trip_Mine.png'            ]},
  { id:'choke_bombs',       candidates:['File:Tool_Choke_Bombs.png',               'File:Tool_Choke_Bomb.png',       'File:Consumable_Choke_Bomb.png',  'File:Choke_Bomb.png']},

  // ── Hand tools / melee ──
  { id:'heavy_knife',       candidates:['File:Tool_Heavy_Knife.png',               'File:Heavy_Knife.png',           'File:Item_Heavy_Knife.png'            ]},
  { id:'knife',             candidates:['File:Tool_Knife.png',                     'File:Knife.png',                 'File:Item_Knife.png'                  ]},
  { id:'knuckle_knife',     candidates:['File:Tool_Knuckle_Knife.png',             'File:Knuckle_Knife.png'                                                 ]},
  { id:'throwing_axes',     candidates:['File:Tool_Throwing_Axes.png',             'File:Tool_Throwing_Axe.png',     'File:Throwing_Axe.png', 'File:Throwing_Axes.png']},
  { id:'throwing_knives',   candidates:['File:Tool_Throwing_Knives.png',           'File:Tool_Throwing_Knife.png',   'File:Throwing_Knife.png','File:Throwing_Knives.png']},
  { id:'spear',             candidates:['File:Tool_Throwing_Spear.png',            'File:Tool_Spear.png',            'File:Throwing_Spear.png'              ]},
  { id:'derringer',         candidates:['File:Tool_Derringer.png',                 'File:Tool_Derringer_Pennyshot.png','File:Weapon_Derringer.png'           ]},
  { id:'quad_derringer',    candidates:['File:Tool_Quad_Derringer.png',            'File:Quad_Derringer.png',        'File:Item_Quad_Derringer.png'         ]},

  // ── Medical consumables ──
  { id:'first_aid_kit',     candidates:['File:Tool_First_Aid_Kit.png',             'File:Consumable_First_Aid_Kit.png','File:First_Aid_Kit.png'             ]},
  { id:'medkit',            candidates:['File:Consumable_Medical_Pack.png',        'File:Medical_Pack.png',          'File:Medkit.png'                      ]},
  { id:'antidote_shot',     candidates:['File:Consumable_Antidote_Shot.png',       'File:Antidote_Shot.png'                                                 ]},
  { id:'regen_shot',        candidates:['File:Consumable_Regeneration_Shot.png',   'File:Regeneration_Shot.png',     'File:Regen_Shot.png'                  ]},
  { id:'stamina_shot',      candidates:['File:Consumable_Stamina_Shot.png',        'File:Stamina_Shot.png'                                                  ]},
  { id:'vitality_shot',     candidates:['File:Consumable_Vitality_Shot.png',       'File:Vitality_Shot.png'                                                 ]},
  { id:'recovery_shot',     candidates:['File:Consumable_Recovery_Shot.png',       'File:Recovery_Shot.png'                                                 ]},
  { id:'heal_syringe',      candidates:['File:Consumable_Healing_Syringe.png',     'File:Consumable_Syringe.png',    'File:Consumable_Hypo_Syringe.png', 'File:Healing_Syringe.png']},

  // ── Beetles ──
  { id:'stalker_beetle',    candidates:['File:Consumable_Stalker_Beetle.png',      'File:Stalker_Beetle.png'                                                ]},
  { id:'choke_beetle',      candidates:['File:Consumable_Choke_Beetle.png',        'File:Choke_Beetle.png'                                                  ]},
  { id:'fire_beetle',       candidates:['File:Consumable_Fire_Beetle.png',         'File:Fire_Beetle.png'                                                   ]},

  // ── Thrown explosives ──
  { id:'fire_bomb',         candidates:['File:Consumable_Fire_Bomb.png',           'File:Fire_Bomb.png'                                                     ]},
  { id:'hellfire_bomb',     candidates:['File:Consumable_Hellfire_Bomb.png',       'File:Hellfire_Bomb.png'                                                 ]},
  { id:'liquid_fire_bomb',  candidates:['File:Consumable_Liquid_Fire_Bomb.png',    'File:Liquid_Fire_Bomb.png'                                              ]},
  { id:'dyn_stick',         candidates:['File:Consumable_Dynamite_Stick.png',      'File:Dynamite_Stick.png',        'File:Dyn_Stick.png'                   ]},
  { id:'dyn_bundle',        candidates:['File:Consumable_Dynamite_Bundle.png',     'File:Dynamite_Bundle.png'                                               ]},
  { id:'waxed_dyn',         candidates:['File:Consumable_Waxed_Dynamite_Stick.png','File:Waxed_Dynamite_Stick.png',  'File:Waxed_Dynamite.png'              ]},
  { id:'big_dyn',           candidates:['File:Consumable_Big_Dynamite_Bundle.png', 'File:Big_Dynamite_Bundle.png',   'File:Large_Dynamite_Bundle.png'       ]},
  { id:'stick_bomb',        candidates:['File:Consumable_Stick_Bomb.png',          'File:Stick_Bomb.png'                                                    ]},
  { id:'frag_bomb',         candidates:['File:Consumable_Frag_Bomb.png',           'File:Frag_Bomb.png'                                                     ]},
  { id:'dark_dyn',          candidates:['File:Consumable_Dark_Dynamite_Satchel.png','File:Dark_Dynamite_Satchel.png','File:Dark_Dynamite.png'               ]},
  { id:'hive_bomb',         candidates:['File:Consumable_Hive_Bomb.png',           'File:Hive_Bomb.png'                                                     ]},
  { id:'poison_bomb',       candidates:['File:Consumable_Poison_Bomb.png',         'File:Poison_Bomb.png'                                                   ]},
  { id:'chaos_bomb',        candidates:['File:Consumable_Chaos_Bomb.png',          'File:Chaos_Bomb.png'                                                    ]},
  { id:'conc_bomb',         candidates:['File:Consumable_Concertina_Bomb.png',     'File:Concertina_Bomb.png',       'File:Conc_Bomb.png'                   ]},
  { id:'flash_bomb',        candidates:['File:Consumable_Flash_Bomb.png',          'File:Flash_Bomb.png'                                                    ]},
]

// Items that share the same wiki image → copy after download instead of re-fetching
const ITEM_COPIES = [
  { from:'antidote_shot', to:'antidote_weak'  },
  { from:'regen_shot',    to:'regen_weak'     },
  { from:'stamina_shot',  to:'stamina_weak'   },
  { from:'vitality_shot', to:'vitality_weak'  },
]

// ─── Ammo images — named <class>_<variant>.png ───────────────────────────────
// Pattern on wiki: "File:Ammo <Class> <Variant>.png" (spaces = underscores in API)

const AMMO_ICONS = [
  // ── Long Ammo ──
  { id:'long_standard',    candidates:['File:Ammo_Long.png'                          ]},
  { id:'long_hv',          candidates:['File:Ammo_Long_High_Velocity.png'            ]},
  { id:'long_fmj',         candidates:['File:Ammo_Long_Full_Metal_Jacket.png'        ]},
  { id:'long_spitzer',     candidates:['File:Ammo_Long_Spitzer.png'                  ]},
  { id:'long_poison',      candidates:['File:Ammo_Long_Poison.png'                   ]},
  { id:'long_explosive',   candidates:['File:Ammo_Long_Explosive.png'                ]},
  { id:'long_incendiary',  candidates:['File:Ammo_Long_Incendiary.png'               ]},
  { id:'long_subsonic',    candidates:['File:Ammo_Long_Subsonic.png'                 ]},
  { id:'long_dumdum',      candidates:['File:Ammo_Long_Dumdum.png'                   ]},

  // ── Medium Ammo ──
  { id:'medium_standard',  candidates:['File:Ammo_Medium.png'                        ]},
  { id:'medium_hv',        candidates:['File:Ammo_Medium_High_Velocity.png'          ]},
  { id:'medium_fmj',       candidates:['File:Ammo_Medium_Full_Metal_Jacket.png'      ]},
  { id:'medium_spitzer',   candidates:['File:Ammo_Medium_Spitzer.png'                ]},
  { id:'medium_poison',    candidates:['File:Ammo_Medium_Poison.png'                 ]},
  { id:'medium_explosive', candidates:['File:Ammo_Medium_Explosive.png'              ]},
  { id:'medium_incendiary',candidates:['File:Ammo_Medium_Incendiary.png'             ]},
  { id:'medium_subsonic',  candidates:['File:Ammo_Medium_Subsonic.png'               ]},
  { id:'medium_dumdum',    candidates:['File:Ammo_Medium_Dumdum.png'                 ]},

  // ── Compact (Small) Ammo ──
  { id:'compact_standard', candidates:['File:Ammo_Compact.png'                       ]},
  { id:'compact_hv',       candidates:['File:Ammo_Compact_High_Velocity.png'         ]},
  { id:'compact_fmj',      candidates:['File:Ammo_Compact_Full_Metal_Jacket.png'     ]},
  { id:'compact_spitzer',  candidates:['File:Ammo_Compact_Spitzer.png'               ]},
  { id:'compact_poison',   candidates:['File:Ammo_Compact_Poison.png'                ]},
  { id:'compact_explosive',candidates:['File:Ammo_Compact_Explosive.png'             ]},
  { id:'compact_incendiary',candidates:['File:Ammo_Compact_Incendiary.png'           ]},
  { id:'compact_subsonic', candidates:['File:Ammo_Compact_Subsonic.png'              ]},
  { id:'compact_dumdum',   candidates:['File:Ammo_Compact_Dumdum.png'                ]},
  { id:'compact_starshell',candidates:['File:Ammo_Compact_Starshell.png'             ]},

  // ── Shotgun Shell ──
  { id:'shell_standard',   candidates:['File:Ammo_Shell.png'                         ]},
  { id:'shell_slug',        candidates:['File:Ammo_Shell_Slug.png'                   ]},
  { id:'shell_flechette',  candidates:['File:Ammo_Shell_Flechette.png'               ]},
  { id:'shell_pennyshot',  candidates:['File:Ammo_Shell_Penny_Shot.png'              ]},
  { id:'shell_dragonsbreath',candidates:['File:Ammo_Shell_Dragon_Breath.png'         ]},
  { id:'shell_starshell',  candidates:['File:Ammo_Shell_Starshell.png'               ]},

  // ── Dolch ──
  { id:'dolch_standard',   candidates:['File:Ammo_Dolch.png'                         ]},
  { id:'dolch_hv',         candidates:['File:Ammo_Dolch_High_Velocity.png'           ]},
  { id:'dolch_fmj',        candidates:['File:Ammo_Dolch_Full_Metal_Jacket.png'       ]},
  { id:'dolch_spitzer',    candidates:['File:Ammo_Dolch_Spitzer.png'                 ]},
  { id:'dolch_poison',     candidates:['File:Ammo_Dolch_Poison.png'                  ]},
  { id:'dolch_explosive',  candidates:['File:Ammo_Dolch_Explosive.png'               ]},
  { id:'dolch_incendiary', candidates:['File:Ammo_Dolch_Incendiary.png'              ]},
  { id:'dolch_subsonic',   candidates:['File:Ammo_Dolch_Subsonic.png'                ]},
  { id:'dolch_dumdum',     candidates:['File:Ammo_Dolch_Dumdum.png'                  ]},
  { id:'dolch_starshell',  candidates:['File:Ammo_Dolch_Starshell.png'               ]},

  // ── Nitro Express ──
  { id:'nitro_standard',   candidates:['File:Ammo_Nitro.png'                         ]},
  { id:'nitro_hv',         candidates:['File:Ammo_Nitro_High_Velocity.png'           ]},
  { id:'nitro_fmj',        candidates:['File:Ammo_Nitro_Full_Metal_Jacket.png'       ]},
  { id:'nitro_spitzer',    candidates:['File:Ammo_Nitro_Spitzer.png'                 ]},
  { id:'nitro_poison',     candidates:['File:Ammo_Nitro_Poison.png'                  ]},
  { id:'nitro_explosive',  candidates:['File:Ammo_Nitro_Explosive.png'               ]},
  { id:'nitro_incendiary', candidates:['File:Ammo_Nitro_Incendiary.png'              ]},
  { id:'nitro_subsonic',   candidates:['File:Ammo_Nitro_Subsonic.png'                ]},

  // ── Crossbow Bolts ──
  { id:'bolt_standard',    candidates:['File:Ammo_Bolt.png'                          ]},
  { id:'bolt_explosive',   candidates:['File:Ammo_Bolt_Explosive.png'                ]},
  { id:'bolt_shot',        candidates:['File:Ammo_Bolt_Shot.png'                     ]},
  { id:'bolt_steel',       candidates:['File:Ammo_Bolt_Steel.png'                    ]},

  // ── Compact Crossbow Bolts (Hand Crossbow / Chu Ko Nu) ──
  { id:'cbolt_standard',   candidates:['File:Ammo_Compact_Bolt.png'                  ]},
  { id:'cbolt_chaos',      candidates:['File:Ammo_Compact_Bolt_Chaos.png'            ]},
  { id:'cbolt_choke',      candidates:['File:Ammo_Compact_Bolt_Choke.png'            ]},
  { id:'cbolt_poison',     candidates:['File:Ammo_Compact_Bolt_Poison.png'           ]},
  { id:'cbolt_dragonbreath',candidates:['File:Ammo_Compact_Bolt_Dragon_Breath.png'  ]},
  { id:'cbolt_chukon',     candidates:['File:Ammo_Compact_Bolt_Chu_Ko_Nu.png'       ]},
  { id:'cbolt_revive',     candidates:['File:Ammo_Compact_Bolt_Revive.png'           ]},

  // ── Hunting Bow Arrows ──
  { id:'arrow_standard',   candidates:['File:Ammo_Arrow.png'                         ]},
  { id:'arrow_poison',     candidates:['File:Ammo_Arrow_Poison.png'                  ]},
  { id:'arrow_frag',       candidates:['File:Ammo_Arrow_Frag.png'                    ]},
  { id:'arrow_conc',       candidates:['File:Ammo_Arrow_Concertina.png'              ]},

  // ── Bomb Lance ──
  { id:'lance_standard',   candidates:['File:Ammo_Lance.png'                         ]},
  { id:'lance_harpoon',    candidates:['File:Ammo_Lance_Harpoon.png'                 ]},
  { id:'lance_steelball',  candidates:['File:Ammo_Lance_Steel_Ball.png'              ]},
  { id:'lance_waxedfrag',  candidates:['File:Ammo_Lance_Waxed_Frag.png'             ]},
  { id:'lance_dragonbreath',candidates:['File:Ammo_Lance_Dragon_Breath.png'         ]},

  // ── Special ──
  { id:'shredder_standard',candidates:['File:Ammo_Shredder.png'                      ]},
  { id:'derringer_ammo',   candidates:['File:Ammo_Derringer.png'                     ]},
]

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(WEAPONS_DIR, { recursive: true })
  fs.mkdirSync(ITEMS_DIR,   { recursive: true })
  fs.mkdirSync(AMMO_DIR,    { recursive: true })

  // ── 0. Discovery: list available image names for key prefixes ──────────────
  console.log('\n═══ Discovering wiki image prefixes ═══')
  for (const prefix of ['Tool_', 'Consumable_', 'Ammo_']) {
    const imgs = await listImages(prefix, 100)
    if (imgs.length === 0) {
      console.log(`  ${prefix}* → (none found)`)
    } else {
      console.log(`\n  ${prefix}* → ${imgs.length} image(s) found:`)
      imgs.forEach(img => console.log(`    ${img.title}`))
    }
    await sleep(DELAY_MS)
  }

  // ── 1. Missing weapon images (force overwrite — previous files are duplicates) ──
  console.log('\n═══ Missing weapon images ═══')
  let wOk = 0, wFail = 0
  for (const w of MISSING_WEAPONS) {
    const dest = path.join(WEAPONS_DIR, `${w.id}.png`)
    const res = await fetchAndSave(w.candidates, dest, w.id, /* force */ true)
    res === 'ok' ? wOk++ : wFail++
    await sleep(DELAY_MS)
  }

  // ── 2. Consumable & tool images ────────────────────────────────────────────
  console.log('\n═══ Consumable & Tool images ═══')
  let iOk = 0, iFail = 0
  for (const item of ITEMS) {
    const dest = path.join(ITEMS_DIR, `${item.id}.png`)
    const res = await fetchAndSave(item.candidates, dest, item.id)
    if (res === 'ok' || res === 'skip') iOk++; else iFail++
    await sleep(DELAY_MS)
  }

  // ── 3. Copy shared images ──────────────────────────────────────────────────
  for (const { from, to } of ITEM_COPIES) {
    const src = path.join(ITEMS_DIR, `${from}.png`)
    const dst = path.join(ITEMS_DIR, `${to}.png`)
    if (fs.existsSync(src) && !fs.existsSync(dst)) {
      fs.copyFileSync(src, dst)
      console.log(`  [copy] ${from} → ${to}`)
    }
  }

  // ── 4. Ammo type icons ─────────────────────────────────────────────────────
  console.log('\n═══ Ammo type icons ═══')
  let aOk = 0, aFail = 0
  for (const a of AMMO_ICONS) {
    const dest = path.join(AMMO_DIR, `${a.id}.png`)
    const res = await fetchAndSave(a.candidates, dest, a.id)
    if (res === 'ok' || res === 'skip') aOk++; else aFail++
    await sleep(DELAY_MS)
  }

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log('\n─────────────────────────────────────────────')
  console.log(`Weapons:     ${wOk} ok · ${wFail} failed`)
  console.log(`Items:       ${iOk} ok · ${iFail} failed`)
  console.log(`Ammo icons:  ${aOk} ok · ${aFail} failed`)
  console.log('─────────────────────────────────────────────\n')
}

main().catch(err => { console.error(err); process.exit(1) })
