'use strict'
const https = require('https')
const http  = require('http')
const fs    = require('fs')
const path  = require('path')

const WEAPONS_DIR = path.join(__dirname, '..', 'assets', 'weapons')
const ITEMS_DIR   = path.join(__dirname, '..', 'assets', 'items')
fs.mkdirSync(WEAPONS_DIR, { recursive: true })
fs.mkdirSync(ITEMS_DIR,   { recursive: true })

function delay(ms) { return new Promise(r => setTimeout(r, ms)) }

function get(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http
    const req = mod.get(url, { headers: { 'User-Agent': 'HuntRandomizerBot/1.0 (image-fetcher)' } }, res => {
      if ([301, 302, 303].includes(res.statusCode) && res.headers.location) {
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

async function apiQuery(params) {
  const qs = new URLSearchParams({ ...params, format: 'json' }).toString()
  const url = `https://huntshowdown.wiki.gg/api.php?${qs}`
  const { status, body } = await get(url)
  if (status !== 200) throw new Error(`API ${status}`)
  return JSON.parse(body.toString())
}

async function getPageImages(title) {
  const data = await apiQuery({
    action: 'parse',
    page:   title,
    prop:   'images',
  })
  return data.parse?.images || []
}

async function getImageUrl(filename) {
  const data = await apiQuery({
    action:   'query',
    titles:   `File:${filename}`,
    prop:     'imageinfo',
    iiprop:   'url',
  })
  const pages = Object.values(data.query?.pages || {})
  return pages[0]?.imageinfo?.[0]?.url || null
}

async function downloadPageImage(wikiTitle, destPath, preferPrefix) {
  try {
    const images = await getPageImages(wikiTitle)
    if (!images.length) return false

    // Prefer image whose name starts with preferPrefix (e.g. 'Weapon_', 'Item_')
    let chosen = images.find(img => preferPrefix && img.startsWith(preferPrefix))
      ?? images.find(img => /\.(png|jpg|jpeg)$/i.test(img))
    if (!chosen) return false

    const imgUrl = await getImageUrl(chosen)
    if (!imgUrl) return false

    const { status, body } = await get(imgUrl)
    if (status !== 200) return false

    fs.writeFileSync(destPath, body)
    console.log(`  ✔ ${path.basename(destPath)} ← ${chosen}`)
    return true
  } catch (e) {
    return false
  }
}

// ── Slotted melee weapons (wiki pages at Weapons/NAME) ────────────────────
const MELEE_WEAPONS = [
  { id: 'baseball_bat',    wiki: 'Weapons/Baseball Bat'    },
  { id: 'cavalry_saber',   wiki: 'Weapons/Cavalry Saber'   },
  { id: 'combat_axe',      wiki: 'Weapons/Combat Axe'      },
  { id: 'katana',          wiki: 'Weapons/Katana'          },
  { id: 'machete',         wiki: 'Weapons/Machete'         },
  { id: 'railroad_hammer', wiki: 'Weapons/Railroad Hammer' },
]

// ── Tarot cards ───────────────────────────────────────────────────────────
const TAROT_NAMES = [
  'The Chariot','The Devil','The Empress','The Fool','The Hanged Man',
  'The High Priestess','The Judgement','The Magician','The Pathfinder',
  'The Sun','The Tower','The World',
]

async function findTarotPage(name) {
  // Search for the tarot card page
  const data = await apiQuery({ action: 'query', list: 'search', srsearch: name, srnamespace: 0 })
  const results = data.query?.search || []
  // Prefer a page title containing "Tarot" or the card name
  const match = results.find(r => r.title.includes('Tarot') || r.title.includes(name))
  return match?.title || results[0]?.title || null
}

async function main() {
  console.log('\n═══ Melee weapon images ═══')
  for (const w of MELEE_WEAPONS) {
    const dest = path.join(WEAPONS_DIR, `${w.id}.png`)
    if (fs.existsSync(dest)) { console.log(`  ⟳ ${w.id}.png exists`); continue }
    const ok = await downloadPageImage(w.wiki, dest, 'Weapon_')
    if (!ok) console.log(`  ✗ ${w.id}`)
    await delay(400)
  }

  console.log('\n═══ Tarot card images ═══')
  for (let i = 0; i < TAROT_NAMES.length; i++) {
    const name = TAROT_NAMES[i]
    const dest = path.join(ITEMS_DIR, `tarot_${i}.png`)
    if (fs.existsSync(dest)) { console.log(`  ⟳ tarot_${i}.png exists`); continue }

    const page = await findTarotPage(name)
    if (!page) { console.log(`  ✗ tarot_${i} (${name}) — no page found`); continue }

    const ok = await downloadPageImage(page, dest, 'Consumable_')
    if (!ok) {
      // Fallback: try Item_ prefix
      const ok2 = await downloadPageImage(page, dest, 'Item_')
      if (!ok2) console.log(`  ✗ tarot_${i} (${name})`)
    }
    await delay(400)
  }

  console.log('\nDone.')
}

main().catch(console.error)
