'use strict'
/**
 * Fetch weapon images via the Hunt: Showdown 1896 wiki MediaWiki API.
 * Saves each weapon's image to assets/weapons/<id>.png
 *
 * Run: node scripts/fetch-weapon-images.js
 */

const https = require('https')
const fs    = require('fs')
const path  = require('path')

const WEAPONS_DIR = path.join(__dirname, '..', 'assets', 'weapons')
const API_BASE    = 'https://huntshowdown.wiki.gg/api.php'
const DELAY_MS    = 300

const BROWSER_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
  'Accept': 'application/json, */*',
  'Referer': 'https://huntshowdown.wiki.gg/',
}

// ─── Weapon list: id → wiki image file name (Weapon_<wiki>.png) ──────────────
// fam: fallback if the variant-specific file doesn't exist on the wiki
const WEAPONS = [
  // ── LONG AMMO — 3 SLOT ──
  { id:'sparks_lrr',            wiki:'Sparks',                           fam:'Sparks' },
  { id:'sparks_lrr_sniper',     wiki:'Sparks_Sniper',                    fam:'Sparks' },
  { id:'sparks_lrr_silencer',   wiki:'Sparks_Silencer',                  fam:'Sparks' },
  { id:'martini_ic1',           wiki:'Martini-Henry',                    fam:'Martini-Henry' },
  { id:'martini_ironside',      wiki:'Martini-Henry_Ironside',           fam:'Martini-Henry' },
  { id:'martini_deadeye',       wiki:'Martini-Henry_Deadeye',            fam:'Martini-Henry' },
  { id:'martini_marksman',      wiki:'Martini-Henry_Marksman',           fam:'Martini-Henry' },
  { id:'martini_riposte',       wiki:'Martini-Henry_Riposte',            fam:'Martini-Henry' },
  { id:'mosin_m1891',           wiki:'Mosin-Nagant',                     fam:'Mosin-Nagant' },
  { id:'mosin_m1891_bay',       wiki:'Mosin-Nagant_Bayonet',             fam:'Mosin-Nagant' },
  { id:'mosin_m1891_sniper',    wiki:'Mosin-Nagant_Sniper',              fam:'Mosin-Nagant' },
  { id:'mosin_m1891_avtom',     wiki:'Mosin-Nagant_Avtomat',             fam:'Mosin-Nagant' },
  { id:'krag',                  wiki:'Krag',                             fam:'Krag' },
  { id:'krag_bayonet',          wiki:'Krag_Bayonet',                     fam:'Krag' },
  { id:'krag_sniper',           wiki:'Krag_Sniper',                      fam:'Krag' },
  { id:'krag_silencer',         wiki:'Krag_Silencer',                    fam:'Krag' },
  { id:'lebel_1886',            wiki:'Lebel_1886',                       fam:'Lebel_1886' },
  { id:'lebel_talon',           wiki:'Lebel_1886_Talon',                 fam:'Lebel_1886' },
  { id:'lebel_marksman',        wiki:'Lebel_1886_Marksman',              fam:'Lebel_1886' },
  { id:'lebel_aperture',        wiki:'Lebel_1886_Aperture',              fam:'Lebel_1886' },
  { id:'mako_1895',             wiki:'Mako_1895',                        fam:'Mako_1895' },
  { id:'mako_aperture',         wiki:'Mako_1895_Aperture',               fam:'Mako_1895' },
  { id:'mako_claw',             wiki:'Mako_1895_Claw',                   fam:'Mako_1895' },
  { id:'berthier_1892',         wiki:'Berthier_1892',                    fam:'Berthier_1892' },
  { id:'berthier_deadeye',      wiki:'Berthier_1892_Deadeye',            fam:'Berthier_1892' },
  { id:'berthier_marksman',     wiki:'Berthier_1892_Marksman',           fam:'Berthier_1892' },
  { id:'berthier_riposte',      wiki:'Berthier_1892_Riposte',            fam:'Berthier_1892' },
  { id:'mosin_obrez_match',     wiki:'Mosin_Obrez_Match',                fam:'Mosin_Obrez' },
  { id:'mosin_obrez_sharpeye',  wiki:'Mosin_Obrez_Sharpeye',             fam:'Mosin_Obrez' },

  // ── MEDIUM AMMO — 3 SLOT ──
  { id:'c1865',                 wiki:'1865_Carbine',                     fam:'1865_Carbine' },
  { id:'c1865_silencer',        wiki:'1865_Carbine_Silencer',            fam:'1865_Carbine' },
  { id:'c1865_aperture',        wiki:'1865_Carbine_Aperture',            fam:'1865_Carbine' },
  { id:'centennial',            wiki:'Centennial',                       fam:'Centennial' },
  { id:'centennial_sniper',     wiki:'Centennial_Sniper',                fam:'Centennial' },
  { id:'centennial_trauma',     wiki:'Centennial_Trauma',                fam:'Centennial' },
  { id:'drilling',              wiki:'Drilling',                         fam:'Drilling' },
  { id:'maynard_sniper',        wiki:'Maynard_Sniper',                   fam:'Maynard_Sniper' },
  { id:'maynard_sniper_sil',    wiki:'Maynard_Sniper_Silencer',          fam:'Maynard_Sniper' },
  { id:'springfield_1866',      wiki:'Springfield_1866',                 fam:'Springfield_1866' },
  { id:'springfield_1866_mark', wiki:'Springfield_1866_Marksman',        fam:'Springfield_1866' },
  { id:'springfield_1866_bay',  wiki:'Springfield_1866_Bayonet',         fam:'Springfield_1866' },
  { id:'vetterli_71',           wiki:'Vetterli_71',                      fam:'Vetterli_71' },
  { id:'vetterli_71_bay',       wiki:'Vetterli_71_Bayonet',              fam:'Vetterli_71' },
  { id:'vetterli_71_deadeye',   wiki:'Vetterli_71_Deadeye',              fam:'Vetterli_71' },
  { id:'vetterli_71_marksman',  wiki:'Vetterli_71_Marksman',             fam:'Vetterli_71' },
  { id:'vetterli_71_silencer',  wiki:'Vetterli_71_Silencer',             fam:'Vetterli_71' },
  { id:'wildland',              wiki:'Wildland',                         fam:'Wildland' },

  // ── SMALL AMMO — 3 SLOT ──
  { id:'marathon',              wiki:'Marathon',                         fam:'Marathon' },
  { id:'marathon_swift',        wiki:'Marathon_Swift',                   fam:'Marathon' },
  { id:'infantry_73l',          wiki:'Infantry_73L',                     fam:'Infantry_73L' },
  { id:'infantry_73l_bay',      wiki:'Infantry_73L_Bayonet',             fam:'Infantry_73L' },
  { id:'infantry_73l_sniper',   wiki:'Infantry_73L_Sniper',              fam:'Infantry_73L' },
  { id:'ranger_73',             wiki:'Ranger_73',                        fam:'Ranger_73' },
  { id:'ranger_73_aperture',    wiki:'Ranger_73_Aperture',               fam:'Ranger_73' },
  { id:'ranger_73_talon',       wiki:'Ranger_73_Talon',                  fam:'Ranger_73' },
  { id:'ranger_73_swift',       wiki:'Ranger_73_Swift',                  fam:'Ranger_73' },
  { id:'lemat_carbine',         wiki:'LeMat_Carbine',                    fam:'LeMat_Carbine' },
  { id:'lemat_carbine_mark',    wiki:'LeMat_Carbine_Marksman',           fam:'LeMat_Carbine' },
  { id:'officer_carbine',       wiki:'Officer_Carbine',                  fam:'Officer_Carbine' },
  { id:'officer_carbine_de',    wiki:'Officer_Carbine_Deadeye',          fam:'Officer_Carbine' },
  { id:'frontier_73c',          wiki:'Frontier_73C',                     fam:'Frontier_73C' },
  { id:'frontier_73c_sil',      wiki:'Frontier_73C_Silencer',            fam:'Frontier_73C' },
  { id:'frontier_73c_mark',     wiki:'Frontier_73C_Marksman',            fam:'Frontier_73C' },

  // ── LONG AMMO — 2 SLOT ──
  { id:'haymaker',              wiki:'Haymaker',                         fam:'Haymaker' },
  { id:'mosin_obrez',           wiki:'Mosin_Obrez',                      fam:'Mosin_Obrez' },
  { id:'mosin_obrez_mace',      wiki:'Mosin_Obrez_Mace',                 fam:'Mosin_Obrez' },
  { id:'mosin_obrez_ext',       wiki:'Mosin_Obrez_Extended',             fam:'Mosin_Obrez' },
  { id:'uppercut_precision',    wiki:'Uppercut_Precision',               fam:'Uppercut' },
  { id:'uppercut_deadeye',      wiki:'Uppercut_Deadeye',                 fam:'Uppercut' },

  // ── MEDIUM AMMO — 2 SLOT ──
  { id:'scottfield_prec',       wiki:'Scottfield_Precision',             fam:'Scottfield' },
  { id:'drilling_shorty',       wiki:'Drilling_Shorty',                  fam:'Drilling' },
  { id:'drilling_hatchet',      wiki:'Drilling_Hatchet',                 fam:'Drilling' },
  { id:'springfield_1866_sh',   wiki:'Springfield_1866_Shorty',          fam:'Springfield_1866' },
  { id:'springfield_1866_str',  wiki:'Springfield_1866_Striker',         fam:'Springfield_1866' },
  { id:'springfield_1866_bull', wiki:'Springfield_1866_Bullseye',        fam:'Springfield_1866' },
  { id:'centennial_shorty',     wiki:'Centennial_Shorty',                fam:'Centennial' },
  { id:'centennial_shorty_sil', wiki:'Centennial_Shorty_Silencer',       fam:'Centennial' },

  // ── SMALL AMMO — 2 SLOT ──
  { id:'bornheim_match',        wiki:'Bornheim_No._3_Match',             fam:'Bornheim_No._3' },
  { id:'nagant_prec',           wiki:'Nagant_M1895_Precision',           fam:'Nagant_M1895' },
  { id:'nagant_deadeye',        wiki:'Nagant_M1895_Deadeye',             fam:'Nagant_M1895' },
  { id:'vandal_73c',            wiki:'Vandal_73C',                       fam:'Vandal_73C' },
  { id:'vandal_73c_striker',    wiki:'Vandal_73C_Striker',               fam:'Vandal_73C' },
  { id:'vandal_73c_bullseye',   wiki:'Vandal_73C_Bullseye',              fam:'Vandal_73C' },

  // ── LONG AMMO — 1 SLOT ──
  { id:'sparks_pistol',         wiki:'Sparks_Pistol',                    fam:'Sparks_Pistol' },
  { id:'sparks_pistol_sil',     wiki:'Sparks_Pistol_Silencer',           fam:'Sparks_Pistol' },
  { id:'uppercut',              wiki:'Uppercut',                         fam:'Uppercut' },

  // ── MEDIUM AMMO — 1 SLOT ──
  { id:'pax',                   wiki:'Pax',                              fam:'Pax' },
  { id:'pax_claw',              wiki:'Pax_Claw',                         fam:'Pax' },
  { id:'pax_trueshot',          wiki:'Pax_Trueshot',                     fam:'Pax' },
  { id:'scottfield',            wiki:'Scottfield',                       fam:'Scottfield' },
  { id:'scottfield_brawler',    wiki:'Scottfield_Brawler',               fam:'Scottfield' },
  { id:'scottfield_spitfire',   wiki:'Scottfield_Spitfire',              fam:'Scottfield' },
  { id:'scottfield_swift',      wiki:'Scottfield_Swift',                 fam:'Scottfield' },

  // ── SMALL AMMO — 1 SLOT ──
  { id:'bornheim_no3',          wiki:'Bornheim_No._3',                   fam:'Bornheim_No._3' },
  { id:'bornheim_no3_sil',      wiki:'Bornheim_No._3_Silencer',          fam:'Bornheim_No._3' },
  { id:'bornheim_no3_ext',      wiki:'Bornheim_No._3_Extended',          fam:'Bornheim_No._3' },
  { id:'conversion',            wiki:'Conversion',                       fam:'Conversion' },
  { id:'conversion_chain',      wiki:'Conversion_Chain_Pistol',          fam:'Conversion' },
  { id:'lemat',                 wiki:'LeMat',                            fam:'LeMat' },
  { id:'nagant_m1895',          wiki:'Nagant_M1895',                     fam:'Nagant_M1895' },
  { id:'nagant_m1895_sil',      wiki:'Nagant_M1895_Silencer',            fam:'Nagant_M1895' },
  { id:'new_army',              wiki:'New_Army',                         fam:'New_Army' },
  { id:'new_army_swift',        wiki:'New_Army_Swift',                   fam:'New_Army' },
  { id:'officer',               wiki:'Officer',                          fam:'Officer' },
  { id:'officer_brawler',       wiki:'Officer_Brawler',                  fam:'Officer' },

  // ── SHOTGUNS ──
  { id:'auto_5',                wiki:'Auto_5',                           fam:'Auto_5' },
  { id:'auto4_shorty',          wiki:'Auto-4_Shorty',                    fam:'Auto_5' },
  { id:'homestead_78',          wiki:'Homestead_78',                     fam:'Homestead_78' },
  { id:'rival_78',              wiki:'Rival_78',                         fam:'Rival_78' },
  { id:'rival_78_shorty',       wiki:'Rival_78_Shorty',                  fam:'Rival_78' },
  { id:'rival_78_trauma',       wiki:'Rival_78_Trauma',                  fam:'Rival_78' },
  { id:'rival_78_mace',         wiki:'Rival_78_Mace',                    fam:'Rival_78' },
  { id:'romero_77',             wiki:'Romero_77',                        fam:'Romero_77' },
  { id:'romero_77_shorty',      wiki:'Romero_77_Shorty',                 fam:'Romero_77' },
  { id:'romero_77_talon',       wiki:'Romero_77_Talon',                  fam:'Romero_77' },
  { id:'romero_77_hatchet',     wiki:'Romero_77_Hatchet',                fam:'Romero_77' },
  { id:'romero_77_alamo',       wiki:'Romero_77_Alamo',                  fam:'Romero_77' },
  { id:'slate',                 wiki:'Slate',                            fam:'Slate' },
  { id:'slate_riposte',         wiki:'Slate_Riposte',                    fam:'Slate' },
  { id:'specter_1882',          wiki:'Specter_1882',                     fam:'Specter_1882' },
  { id:'specter_1882_shorty',   wiki:'Specter_1882_Shorty',              fam:'Specter_1882' },
  { id:'specter_1882_bay',      wiki:'Specter_1882_Bayonet',             fam:'Specter_1882' },
  { id:'terminus',              wiki:'Terminus',                         fam:'Terminus' },
  { id:'terminus_shorty',       wiki:'Terminus_Shorty',                  fam:'Terminus' },

  // ── SPECIAL AMMO ──
  { id:'bomb_lance',            wiki:'Bomb_Lance',                       fam:'Bomb_Lance' },
  { id:'bomb_launcher',         wiki:'Bomb_Launcher',                    fam:'Bomb_Lance' },
  { id:'chu_ko_nu',             wiki:'Chu_Ko_Nu',                        fam:'Chu_Ko_Nu' },
  { id:'crossbow',              wiki:'Crossbow',                         fam:'Crossbow' },
  { id:'crossbow_deadeye',      wiki:'Crossbow_Deadeye',                 fam:'Crossbow' },
  { id:'dolch_96',              wiki:'Dolch_96',                         fam:'Dolch_96' },
  { id:'dolch_96_claw',         wiki:'Dolch_96_Claw',                    fam:'Dolch_96' },
  { id:'dolch_96_bullseye',     wiki:'Dolch_96_Bullseye',                fam:'Dolch_96' },
  { id:'dolch_96_precision',    wiki:'Dolch_96_Precision',               fam:'Dolch_96' },
  { id:'handcrossbow',          wiki:'Hand_Crossbow',                    fam:'Hand_Crossbow' },
  { id:'hunting_bow',           wiki:'Hunting_Bow',                      fam:'Hunting_Bow' },
  { id:'nitro_express',         wiki:'Nitro_Express',                    fam:'Nitro_Express' },

  // ── EVENT WAFFEN ──
  { id:'shredder',              wiki:'Shredder',                         fam:'Shredder' },
  { id:'flame_rifle',           wiki:'Flame_Rifle',                      fam:'Flame_Rifle' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// Query MediaWiki API for the image URL of a single file title
async function getImageUrl(fileName) {
  const title = encodeURIComponent(`File:Weapon_${fileName}.png`)
  const url = `${API_BASE}?action=query&titles=${title}&prop=imageinfo&iiprop=url&format=json`
  try {
    const { status, body } = await get(url)
    if (status !== 200) return null
    const data = JSON.parse(body)
    const pages = data.query && data.query.pages
    if (!pages) return null
    const page = pages[Object.keys(pages)[0]]
    if (!page || page.missing !== undefined) return null
    return page.imageinfo && page.imageinfo[0] && page.imageinfo[0].url || null
  } catch {
    return null
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  if (!fs.existsSync(WEAPONS_DIR)) fs.mkdirSync(WEAPONS_DIR, { recursive: true })

  let nOk = 0, nFallback = 0, nFail = 0
  const failed = []

  console.log(`\nLade ${WEAPONS.length} Waffen-Bilder (via MediaWiki API) ...\n`)

  for (const w of WEAPONS) {
    const dest = path.join(WEAPONS_DIR, `${w.id}.png`)

    if (fs.existsSync(dest)) {
      process.stdout.write(`  [SKIP] ${w.id}\n`)
      nOk++
      continue
    }

    process.stdout.write(`  ${w.id.padEnd(30)} `)

    // 1. Try variant-specific file
    let imgUrl = await getImageUrl(w.wiki)
    let usedFallback = false
    await sleep(DELAY_MS)

    // 2. Fallback to family base (only if different)
    if (!imgUrl && w.fam !== w.wiki) {
      imgUrl = await getImageUrl(w.fam)
      usedFallback = true
      await sleep(DELAY_MS)
    }

    if (!imgUrl) {
      process.stdout.write(`❌ nicht im Wiki\n`)
      nFail++
      failed.push({ id: w.id, wiki: w.wiki })
      continue
    }

    try {
      await downloadBinary(imgUrl, dest)
      const size = Math.round(fs.statSync(dest).size / 1024)
      const tag = usedFallback ? `✓ fallback→${w.fam} (${size}KB)` : `✓ (${size}KB)`
      process.stdout.write(`${tag}\n`)
      usedFallback ? nFallback++ : nOk++
    } catch (e) {
      process.stdout.write(`❌ Download-Fehler: ${e.message}\n`)
      nFail++
      failed.push({ id: w.id, wiki: w.wiki })
    }

    await sleep(DELAY_MS)
  }

  console.log('\n─────────────────────────────────────────────')
  console.log(`Fertig: ✓ ${nOk + nFallback} geladen (${nFallback} Fallbacks) · ❌ ${nFail} fehlen`)
  if (failed.length) {
    console.log('\nNicht gefunden — Wiki-Namen prüfen:')
    failed.forEach(f => console.log(`  - ${f.id.padEnd(30)} wiki: ${f.wiki}`))
  }
  console.log('─────────────────────────────────────────────\n')
}

main().catch(err => { console.error(err); process.exit(1) })
