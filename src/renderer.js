'use strict'

// ═══════════════════════════════════════════════════════════════════════════
// AMMO FACTORY
// ═══════════════════════════════════════════════════════════════════════════

const A = {
  std:  (pts=0)   => ({ key:'standard',     label:'Standard',      pts }),
  spit: (pts=-5)  => ({ key:'spitzer',       label:'Spitzer',       pts }),
  fmj:  (pts=-5)  => ({ key:'fmj',           label:'FMJ',           pts }),
  dum:  (pts=-10) => ({ key:'dumdum',         label:'Dumdum',        pts }),
  hv:   (pts=-5)  => ({ key:'highvelocity',  label:'High Velocity', pts }),
  poi:  (pts=20)  => ({ key:'poisonous',     label:'Vergiftet',     pts }),
  exp:  (pts=30)  => ({ key:'explosive',     label:'Explosiv',      pts }),
  inc:  (pts=15)  => ({ key:'incendiary',    label:'Brandmunition', pts }),
  slug: (pts=10)  => ({ key:'slugs',         label:'Slugs',         pts }),
}

const ALL_AMMO_KEYS   = ['standard','spitzer','fmj','dumdum','highvelocity','poisonous','explosive','incendiary','slugs']
const AMMO_LABELS     = { standard:'Standard', spitzer:'Spitzer', fmj:'FMJ', dumdum:'Dumdum', highvelocity:'High Velocity', poisonous:'Vergiftet', explosive:'Explosiv', incendiary:'Brandmunition', slugs:'Slugs' }

// ═══════════════════════════════════════════════════════════════════════════
// WEAPON DATABASE
// ═══════════════════════════════════════════════════════════════════════════

const WEAPON_DATA = {

  primaries: [
    // ─── Long Ammo ────────────────────────────────────────────────────────
    { id:'springfield_1866',       name:'Springfield 1866',           category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.dum(-20), A.hv(-5), A.poi(30), A.exp(50)],                                    fireMode:'Einzelschuss' },
    { id:'springfield_1866c',      name:'Springfield 1866 Compact',   category:'rifle',          slots:2, ammoType:'long',   pts:100,
      ammo:[A.std(), A.dum(-20), A.hv(-5), A.poi(30), A.exp(50)],                                    fireMode:'Einzelschuss' },
    { id:'winfield_m1873',         name:'Winfield M1873',             category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.hv(), A.dum(), A.poi()],                                                       fireMode:'Hebel-Repetier' },
    { id:'winfield_m1873c',        name:'Winfield M1873C',            category:'rifle',          slots:2, ammoType:'long',   pts:100,
      ammo:[A.std(), A.hv(), A.dum(), A.poi()],                                                       fireMode:'Hebel-Repetier' },
    { id:'winfield_m1873_marks',   name:'Winfield M1873 Marksman',    category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.hv(), A.spit(), A.fmj()],                                                      fireMode:'Hebel-Repetier' },
    { id:'winfield_centennial',    name:'Winfield Centennial',        category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.hv(), A.dum()],                                                                fireMode:'Hebel-Repetier' },
    { id:'winfield_cent_shorty',   name:'Winfield Centennial Shorty', category:'rifle',          slots:2, ammoType:'long',   pts:100,
      ammo:[A.std(), A.hv(), A.dum()],                                                                fireMode:'Hebel-Repetier' },
    { id:'lebel_1886',             name:'Lebel Model 1886',           category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.fmj(), A.poi()],                                                     fireMode:'Repetier' },
    { id:'mosin_1891',             name:'Mosin-Nagant M1891',         category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.fmj(), A.exp()],                                                     fireMode:'Repetier' },
    { id:'mosin_1891_obrez',       name:'Mosin-Nagant Obrez',         category:'rifle',          slots:2, ammoType:'long',   pts:100,
      ammo:[A.std(), A.fmj(), A.dum()],                                                               fireMode:'Einzelschuss' },
    { id:'sparks_lrr',             name:'Sparks LRR',                 category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.inc(), A.exp()],                                                     fireMode:'Einzelschuss' },
    { id:'krag_jorgensen',         name:'Krag-Jørgensen',             category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.fmj(), A.poi()],                                                     fireMode:'Repetier' },
    { id:'martini_henry',          name:'Martini-Henry',              category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.exp()],                                                               fireMode:'Einzelschuss' },
    { id:'vetterli_71',            name:'Vetterli 71 Karabiner',      category:'rifle',          slots:3, ammoType:'long',   pts:100,
      ammo:[A.std(), A.poi(), A.inc()],                                                                fireMode:'Repetier' },
    { id:'nitro_express',          name:'Nitro Express Rifle',        category:'rifle',          slots:3, ammoType:'nitro',  pts:100,
      ammo:[A.std()],                                                                                   fireMode:'Einzelschuss' },
    // ─── Shotguns ─────────────────────────────────────────────────────────
    { id:'specter_1882',           name:'Specter 1882',               category:'shotgun',        slots:3, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.fmj(), A.slug()],                                                     fireMode:'Pump-Action' },
    { id:'specter_1882c',          name:'Specter 1882 Compact',       category:'shotgun',        slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.fmj(), A.slug()],                                                     fireMode:'Pump-Action' },
    { id:'romero_1877',            name:'Romero 1877',                category:'shotgun',        slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.exp(), A.slug()],                                                     fireMode:'Einzelschuss' },
    { id:'romero_1877_talon',      name:'Romero 1877 Talon',          category:'shotgun',        slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.exp(), A.slug()],                                                     fireMode:'Einzelschuss' },
    { id:'winfield_1887',          name:'Winfield 1887',              category:'shotgun',        slots:3, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.fmj()],                                                               fireMode:'Hebel-Repetier' },
    { id:'winfield_1887_terminus', name:'Winfield 1887 Terminus',     category:'shotgun',        slots:3, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.exp()],                                                               fireMode:'Hebel-Repetier' },
    { id:'crown_king_auto5',       name:'Crown & King Auto-5',        category:'shotgun',        slots:3, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.fmj()],                                                               fireMode:'Halbautomatik' },
    // ─── Pistol-primary ───────────────────────────────────────────────────
    { id:'bornheim_no3',           name:'Bornheim No. 3',             category:'pistol_primary', slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.fmj(), A.dum()],                                                               fireMode:'Vollautomat' },
    { id:'caldwell_rival_78',      name:'Caldwell Rival 78',          category:'pistol_primary', slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.exp(), A.slug()],                                                     fireMode:'Einzelschuss' },
  ],

  secondaries: [
    { id:'nagant_m1895',          name:'Nagant M1895',                category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum(), A.poi()],                                               fireMode:'Revolver' },
    { id:'nagant_officer',        name:'Nagant M1895 Officer',        category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum(), A.poi()],                                               fireMode:'Revolver' },
    { id:'nagant_deadeye',        name:'Nagant M1895 Deadeye',        category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.spit()],                                                       fireMode:'Revolver' },
    { id:'nagant_silencer',       name:'Nagant M1895 Silencer',       category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum()],                                                        fireMode:'Silenced' },
    { id:'caldwell_pax',          name:'Caldwell Pax',                category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.dum(), A.fmj(), A.hv()],                                                fireMode:'Revolver' },
    { id:'caldwell_pax_trapper',  name:'Caldwell Pax Trapper',        category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.dum(), A.fmj(), A.hv()],                                                fireMode:'Revolver' },
    { id:'webley_mk6',            name:'Webley Mk VI',                category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.dum(), A.fmj(), A.exp()],                                               fireMode:'Revolver' },
    { id:'webley_mk6_bayonet',    name:'Webley Mk VI Bayonet',        category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.dum(), A.fmj(), A.exp()],                                               fireMode:'Revolver' },
    { id:'lemat_mark2',           name:'LeMat Mark II',               category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum()], fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:[A.std(), A.inc(), A.slug()] },
    { id:'lemat_mark2_inf',       name:'LeMat Mark II Infantry',      category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum()], fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:[A.std(), A.inc(), A.slug()] },
    { id:'lemat_mark2_cav',       name:'LeMat Mark II Cavalry',       category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.spit()], fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:[A.std(), A.inc(), A.slug()] },
    { id:'caldwell_conv_sec',     name:'Caldwell Conversion',         category:'pistol', slots:2, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.fmj(), A.dum()],                                              fireMode:'Einzelschuss' },
    { id:'bornheim_sec',          name:'Bornheim No. 3',              category:'pistol', slots:1, ammoType:'medium', pts:100,
      ammo:[A.std(), A.fmj(), A.dum()],                                                        fireMode:'Vollautomat' },
    { id:'rival_78_sec',          name:'Caldwell Rival 78',           category:'pistol', slots:2, ammoType:'medium', pts:100,
      ammo:[A.std(), A.inc(), A.slug()],                                                       fireMode:'Einzelschuss' },
    { id:'scottfield_model3',     name:'Scottfield Model 3',          category:'pistol', slots:1, ammoType:'small',  pts:100,
      ammo:[A.std(), A.fmj(), A.dum(), A.poi()],                                               fireMode:'Revolver' },
    { id:'dolch_96',              name:'Dolch 96',                    category:'pistol', slots:1, ammoType:'medium', pts:100,
      ammo:[A.std(), A.fmj()],                                                                 fireMode:'Vollautomat' },
    { id:'uppercut',              name:'Conversion Uppercut',         category:'pistol', slots:1, ammoType:'long',   pts:100,
      ammo:[A.std(), A.spit(), A.dum()],                                                       fireMode:'Einzelschuss' },
  ],

  slottedMelee: [
    { id:'baseball_bat',     name:'Baseball Bat',   category:'slotMelee', slots:1, pts:100 },
    { id:'katana',           name:'Katana',          category:'slotMelee', slots:1, pts:100 },
    { id:'cavalry_saber',    name:'Cavalry Saber',   category:'slotMelee', slots:1, pts:100 },
    { id:'combat_axe',       name:'Kampfaxt',        category:'slotMelee', slots:1, pts:100 },
    { id:'machete_slot',     name:'Machete',         category:'slotMelee', slots:1, pts:100 },
    { id:'railroad_hammer',  name:'Railroad Hammer', category:'slotMelee', slots:1, pts:100 },
    { id:'bomb_lance',       name:'Bomben-Lanze',    category:'slotMelee', slots:1, pts:100 },
  ],

  tools: [
    { id:'choke_bomb',      name:'Choke-Bombe',        required_setting:'chokeRequired' },
    { id:'poison_vial',     name:'Giftvial',            required_setting:null },
    { id:'flashbang',       name:'Blendgranate',        required_setting:null },
    { id:'decoy',           name:'Köder',               required_setting:null },
    { id:'flare_pistol',    name:'Leuchtpistole',       required_setting:null },
    { id:'stalker_beetle',  name:'Stalker-Käfer',       required_setting:null },
    { id:'knife',           name:'Messer',              required_setting:null },
    { id:'heavy_knife',     name:'Schweres Messer',     required_setting:null },
    { id:'dusters',         name:'Schlagring',          required_setting:null },
    { id:'throwing_knives', name:'Wurfmesser',          required_setting:null },
    { id:'throwing_axes',   name:'Wurfäxte',            required_setting:null },
  ],

  consumables: [
    { id:'medkit',          name:'Medkit',              required_setting:'medkitRequired' },
    { id:'heal_syringe',    name:'Heilspritze',         required_setting:'healSyringeRequired' },
    { id:'regen_shot',      name:'Regenshot',           required_setting:'regenShotRequired' },
    { id:'dyn_bundle',      name:'Dynamit-Bündel',      required_setting:null },
    { id:'dyn_small',       name:'Kleines Dynamit',     required_setting:null },
    { id:'firebomb',        name:'Brandbombe',          required_setting:null },
    { id:'vitality_shot',   name:'Vitality Shot',       required_setting:null },
    { id:'antidote_shot',   name:'Antidot Shot',        required_setting:null },
  ],
}

const FLAVOR_TEXTS = [
  'Die Sümpfe rufen nach Blut.',
  'Bereite dich vor, Hunter.',
  'Der Tod lauert in den Schatten.',
  'Möge dein Schuss sein Ziel finden.',
  'Das Bayou vergisst nicht.',
  'Jede Runde könnte deine letzte sein.',
  'Die Bounty wartet. Hol sie dir.',
  'Hunger. Blut. Beute.',
  'Nur die Besten kehren zurück.',
  'Das Monster ist real. Bist du es auch?',
  'Vertraue keinem. Fürchte alles.',
  'Ruhm oder Tod — es gibt nichts dazwischen.',
]

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════

const DEFAULT_SETTINGS = {
  medkitRequired:       false,
  meleeRequired:        true,
  chokeRequired:        false,
  healSyringeRequired:  false,
  regenShotRequired:    false,
  soloMode:             false,
  quartermasterEnabled: false,
}

let state = {
  settings:             { ...DEFAULT_SETTINGS },
  currentRun:           null,
  currentRoundData:     null,
  history:              [],
  arsenalOverrides:     {},
  rerolls:              2,
  totalRoundsCompleted: 0,
}

// ═══════════════════════════════════════════════════════════════════════════
// PERSISTENCE
// ═══════════════════════════════════════════════════════════════════════════

async function loadAll() {
  const [history, settings, arsenalOverrides] = await Promise.all([
    window.huntAPI.readData('history.json'),
    window.huntAPI.readData('settings.json'),
    window.huntAPI.readData('arsenal.json'),
  ])
  if (history)          state.history          = history
  if (arsenalOverrides) state.arsenalOverrides = arsenalOverrides
  if (settings) {
    state.settings             = { ...DEFAULT_SETTINGS, ...settings }
    state.rerolls              = settings._rerolls              ?? 2
    state.totalRoundsCompleted = settings._totalRoundsCompleted ?? 0
  }
}

async function saveHistory()  { await window.huntAPI.writeData('history.json',  state.history) }
async function saveArsenal()  { await window.huntAPI.writeData('arsenal.json',  state.arsenalOverrides) }
async function saveSettings() {
  await window.huntAPI.writeData('settings.json', {
    ...state.settings,
    _rerolls:              state.rerolls,
    _totalRoundsCompleted: state.totalRoundsCompleted,
  })
}

function getWeaponPts(weapon) {
  return state.arsenalOverrides[weapon.id]?.pts ?? weapon.pts
}

// ═══════════════════════════════════════════════════════════════════════════
// VIEW MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'))
  const el = document.getElementById(`view-${name}`)
  if (!el) return
  el.classList.remove('hidden')
  el.classList.add('active')

  const isSplash = name === 'splash'
  document.getElementById('stats-bar').classList.toggle('hidden', isSplash)
  document.getElementById('main-nav').classList.toggle('hidden', isSplash)

  if (!isSplash) {
    updateStatsBar()
    updateNavActive(name)
  }

  if (name === 'home')    updateHomeUI()
  if (name === 'history') renderHistory()
  if (name === 'arsenal') renderArsenalTable()
}

function updateNavActive(viewName) {
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewName)
  })
}

// ═══════════════════════════════════════════════════════════════════════════
// SCORING
// ═══════════════════════════════════════════════════════════════════════════

function getAmmoEntry(weapon, key) {
  return weapon.ammo?.find(a => a.key === key) ?? null
}

function calcUsedSlots(loadout) {
  let s = (loadout.primary?.slots || 0) + (loadout.secondary?.slots || 0)
  if (loadout.melee?.slots) s += loadout.melee.slots
  return s
}

function calcLoadoutScore(loadout) {
  let pts = 0

  if (loadout.primary) {
    pts += getWeaponPts(loadout.primary)
    pts += getAmmoEntry(loadout.primary, loadout.primaryAmmo)?.pts ?? 0
  }
  if (loadout.secondary) {
    pts += getWeaponPts(loadout.secondary)
    pts += getAmmoEntry(loadout.secondary, loadout.secondaryAmmo)?.pts ?? 0
    if (loadout.secondary.dualAmmo && loadout.secondaryAmmo2) {
      const e2 = loadout.secondary.secondAmmo?.find(a => a.key === loadout.secondaryAmmo2)
      pts += e2?.pts ?? 0
    }
  }
  if (loadout.melee) pts += getWeaponPts(loadout.melee)

  // Empty slot bonus: +50 per unfilled slot (max 2), not for QM loadouts
  if (!state.settings.quartermasterEnabled) {
    const used  = calcUsedSlots(loadout)
    const empty = Math.max(0, Math.min(2, 4 - used))
    pts += empty * 50
  }

  return pts
}

function calcRoundScore(loadout, results) {
  const breakdown = []
  const loadoutPts = calcLoadoutScore(loadout)
  breakdown.push({ label:'Loadout', pts:loadoutPts, type: loadoutPts >= 0 ? 'good' : 'bad' })

  const hasC = id => loadout.consumables?.some(c => c.id === id)

  if (loadout.melee)              breakdown.push({ label:'Nahkampf',  pts:  50, type:'good' })
  if (hasC('medkit'))             breakdown.push({ label:'Medkit',    pts:  50, type:'good' })
  if (hasC('heal_syringe'))       breakdown.push({ label:'Heilspritze', pts:-20, type:'bad'  })
  if (hasC('regen_shot'))         breakdown.push({ label:'Regenshot', pts: -30, type:'bad'  })

  const hsPts     = results.headshots * 10
  const killPts   = results.kills     * 15
  const revPts    = results.revives   * 5
  const deathPts  = results.deaths    * -10
  const bountyPts = results.bounties  * 25

  if (hsPts)     breakdown.push({ label:`${results.headshots}× Headshot`,       pts:hsPts,     type:'good' })
  if (killPts)   breakdown.push({ label:`${results.kills}× Kill`,               pts:killPts,   type:'good' })
  if (revPts)    breakdown.push({ label:`${results.revives}× Wiederbelebung`,   pts:revPts,    type:'good' })
  if (deathPts)  breakdown.push({ label:`${results.deaths}× Tod`,               pts:deathPts,  type:'bad'  })
  if (results.firstDeath) breakdown.push({ label:'Erster Tod',  pts:-20, type:'bad'  })
  if (results.extracted)  breakdown.push({ label:'Extraktion',  pts:  5, type:'good' })
  if (bountyPts) breakdown.push({ label:`${results.bounties}× Bounty`,          pts:bountyPts, type:'good' })

  let total = breakdown.reduce((s, b) => s + b.pts, 0)
  if (state.settings.soloMode) {
    breakdown.push({ label:'Solo-Bonus ×1.5', pts: Math.round(total * 0.5), type:'good' })
    total = Math.round(total * 1.5)
  }

  return { total, breakdown }
}

function calcTotalStats() {
  let totalScore = 0, totalKills = 0, totalDeaths = 0, totalRounds = 0
  const allRuns = [...state.history, ...(state.currentRun ? [state.currentRun] : [])]
  for (const run of allRuns) {
    for (const round of (run.rounds || [])) {
      totalScore  += round.totalScore       || 0
      totalKills  += round.results?.kills   || 0
      totalDeaths += round.results?.deaths  || 0
      totalRounds += 1
    }
  }
  return { totalScore, totalKills, totalDeaths, totalRounds }
}

function updateStatsBar() {
  const s = calcTotalStats()
  document.getElementById('sb-total-score').textContent = s.totalScore
  document.getElementById('sb-kd').textContent = s.totalDeaths > 0
    ? (s.totalKills / s.totalDeaths).toFixed(2)
    : s.totalKills > 0 ? s.totalKills.toString() : '—'
  document.getElementById('sb-rounds').textContent  = s.totalRounds
  document.getElementById('sb-avg').textContent     = s.totalRounds > 0 ? Math.round(s.totalScore / s.totalRounds) : 0
  document.getElementById('sb-rerolls').textContent = state.rerolls
}

// ═══════════════════════════════════════════════════════════════════════════
// LOADOUT GENERATION
// ═══════════════════════════════════════════════════════════════════════════

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }

function generateLoadout() {
  const qm     = state.settings.quartermasterEnabled
  const budget = qm ? 5 : 4

  const primary     = pick(WEAPON_DATA.primaries)
  const primaryAmmo = pick(primary.ammo).key

  // Valid secondaries: fit within budget; without QM, no Large(3)+Medium(2)
  let validSec = WEAPON_DATA.secondaries.filter(s => {
    const total = primary.slots + s.slots
    if (total > budget) return false
    if (!qm && primary.slots === 3 && s.slots === 2) return false
    return true
  })
  if (!validSec.length) validSec = WEAPON_DATA.secondaries.filter(s => s.slots === 1)

  const secondary     = pick(validSec)
  const secondaryAmmo = pick(secondary.ammo).key
  const secondaryAmmo2 = secondary.dualAmmo && secondary.secondAmmo
    ? pick(secondary.secondAmmo).key
    : null

  // Slotted melee: only if there's room
  const usedByWeapons = primary.slots + secondary.slots
  const hasRoom       = usedByWeapons < budget
  let melee = null
  if (state.settings.meleeRequired && hasRoom) {
    melee = pick(WEAPON_DATA.slottedMelee)
  } else if (hasRoom && Math.random() < 0.4) {
    melee = pick(WEAPON_DATA.slottedMelee)
  }

  // Tools: required first, then 0–2 random extras; always ≥1
  const reqTools  = WEAPON_DATA.tools.filter(t => t.required_setting && state.settings[t.required_setting])
  const optTools  = WEAPON_DATA.tools.filter(t => !t.required_setting).sort(() => Math.random() - 0.5)
  let tools       = [...reqTools, ...optTools.slice(0, Math.floor(Math.random() * 3))].slice(0, 4)
  if (!tools.length) tools = [pick(WEAPON_DATA.tools)]

  // Consumables: required first, then 0–2 random extras; always ≥1
  const reqCons  = WEAPON_DATA.consumables.filter(c => c.required_setting && state.settings[c.required_setting])
  const optCons  = WEAPON_DATA.consumables.filter(c => !c.required_setting).sort(() => Math.random() - 0.5)
  let consumables = [...reqCons, ...optCons.slice(0, Math.floor(Math.random() * 3))].slice(0, 4)
  if (!consumables.length) consumables = [pick(WEAPON_DATA.consumables)]

  return { primary, primaryAmmo, secondary, secondaryAmmo, secondaryAmmo2, melee, tools, consumables }
}

// ═══════════════════════════════════════════════════════════════════════════
// SVG WEAPON ICONS
// ═══════════════════════════════════════════════════════════════════════════

const WEAPON_ICONS = {
  rifle: `<svg class="weapon-svg-icon" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="18" width="68" height="5" rx="2" fill="currentColor"/>
    <rect x="5" y="22" width="40" height="10" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="55" y="16" width="18" height="3" rx="1" fill="currentColor"/>
    <rect x="42" y="20" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/>
    <circle cx="68" cy="20" r="3" fill="currentColor" opacity="0.6"/>
    <rect x="8" y="29" width="5" height="6" rx="1" fill="currentColor" opacity="0.6"/>
  </svg>`,
  shotgun: `<svg class="weapon-svg-icon" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="17" width="60" height="7" rx="2" fill="currentColor"/>
    <rect x="4" y="17" width="60" height="3" rx="1" fill="currentColor" opacity="0.5"/>
    <rect x="6" y="23" width="35" height="10" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="42" y="19" width="6" height="10" rx="1" fill="currentColor" opacity="0.8"/>
    <circle cx="62" cy="21" r="4" fill="currentColor" opacity="0.5"/>
    <rect x="10" y="30" width="4" height="5" rx="1" fill="currentColor" opacity="0.6"/>
  </svg>`,
  pistol: `<svg class="weapon-svg-icon" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="16" width="42" height="7" rx="2" fill="currentColor"/>
    <rect x="8" y="22" width="20" height="14" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="28" y="20" width="10" height="8" rx="1" fill="currentColor" opacity="0.8"/>
    <polygon points="8,36 20,36 15,46 5,46" fill="currentColor" opacity="0.6"/>
    <circle cx="44" cy="20" r="3" fill="currentColor" opacity="0.5"/>
  </svg>`,
  pistol_primary: `<svg class="weapon-svg-icon" viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="17" width="55" height="7" rx="2" fill="currentColor"/>
    <rect x="8" y="23" width="25" height="12" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="33" y="19" width="10" height="9" rx="1" fill="currentColor" opacity="0.8"/>
    <polygon points="8,35 20,35 16,43 6,43" fill="currentColor" opacity="0.6"/>
    <circle cx="55" cy="21" r="3" fill="currentColor" opacity="0.5"/>
  </svg>`,
  slotMelee: `<svg class="weapon-svg-icon" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="50" x2="50" y2="10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
    <polygon points="42,4 56,4 56,18" fill="currentColor"/>
    <rect x="18" y="38" width="8" height="8" rx="1" fill="currentColor" opacity="0.6" transform="rotate(45,22,42)"/>
    <line x1="8" y1="52" x2="15" y2="45" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity="0.7"/>
  </svg>`,
  item: `<svg class="weapon-svg-icon" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="15" width="30" height="38" rx="3" fill="currentColor" opacity="0.7"/>
    <rect x="18" y="8" width="14" height="10" rx="2" fill="currentColor"/>
    <line x1="25" y1="25" x2="25" y2="43" stroke="currentColor" stroke-width="2" opacity="0.5"/>
    <line x1="16" y1="34" x2="34" y2="34" stroke="currentColor" stroke-width="2" opacity="0.5"/>
  </svg>`,
}

function getWeaponIcon(category) { return WEAPON_ICONS[category] || WEAPON_ICONS.item }

// ═══════════════════════════════════════════════════════════════════════════
// RENDER LOADOUT
// ═══════════════════════════════════════════════════════════════════════════

function slotDotsHtml(slots) {
  return Array.from({ length: 3 }, (_, i) =>
    `<span class="sd${i < slots ? ' filled' : ''}"></span>`
  ).join('')
}

function ammoTagHtml(weapon, ammoKey, isSecondAmmo) {
  const arr    = isSecondAmmo ? weapon.secondAmmo : weapon.ammo
  const entry  = arr?.find(a => a.key === ammoKey)
  if (!entry) return ''
  const sign   = entry.pts >= 0 ? '+' : ''
  const ptsTxt = entry.pts !== 0 ? ` (${sign}${entry.pts})` : ''
  return `<span class="weapon-ammo-tag ammo-${entry.key}">${entry.label}${ptsTxt}</span>`
}

function renderLoadout(loadout) {
  const container = document.getElementById('loadout-display')
  container.innerHTML = ''
  container.className = 'hs-loadout'

  // ── Primary ──
  const primAmmoPts = getAmmoEntry(loadout.primary, loadout.primaryAmmo)?.pts ?? 0
  const primPts     = getWeaponPts(loadout.primary) + primAmmoPts
  const slotLabel   = loadout.primary.slots === 3 ? 'LARGE SLOT' : 'MEDIUM SLOT'

  const primCard = document.createElement('div')
  primCard.className = `hs-weapon-card hs-primary cat-${loadout.primary.category}`
  primCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${slotLabel}</span>
      <div class="hs-slot-dots">${slotDotsHtml(loadout.primary.slots)}</div>
      <span class="hs-pts-badge${primPts < 0 ? ' negative' : ''}">${primPts >= 0 ? '+' : ''}${primPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">${getWeaponIcon(loadout.primary.category)}</div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.primary.name}</div>
        <div class="hs-weapon-meta">${loadout.primary.fireMode} · ${loadout.primary.ammoType.toUpperCase()} AMMO</div>
        <div class="hs-ammo-row">${ammoTagHtml(loadout.primary, loadout.primaryAmmo)}</div>
      </div>
    </div>`
  container.appendChild(primCard)

  // ── Secondary ──
  const secAmmoPts  = getAmmoEntry(loadout.secondary, loadout.secondaryAmmo)?.pts ?? 0
  const secAmmo2Pts = (loadout.secondary.dualAmmo && loadout.secondaryAmmo2)
    ? (loadout.secondary.secondAmmo?.find(a => a.key === loadout.secondaryAmmo2)?.pts ?? 0)
    : 0
  const secPts      = getWeaponPts(loadout.secondary) + secAmmoPts + secAmmo2Pts
  const secSlotLabel = loadout.secondary.slots === 2 ? 'MEDIUM SLOT' : 'SMALL SLOT'

  const secCard = document.createElement('div')
  secCard.className = `hs-weapon-card hs-secondary cat-${loadout.secondary.category}`
  secCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${secSlotLabel}${state.settings.quartermasterEnabled ? ' · QM' : ''}</span>
      <div class="hs-slot-dots">${slotDotsHtml(loadout.secondary.slots)}</div>
      <span class="hs-pts-badge${secPts < 0 ? ' negative' : ''}">${secPts >= 0 ? '+' : ''}${secPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">${getWeaponIcon(loadout.secondary.category)}</div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.secondary.name}</div>
        <div class="hs-weapon-meta">${loadout.secondary.fireMode} · ${loadout.secondary.ammoType.toUpperCase()} AMMO</div>
        <div class="hs-ammo-row">
          ${ammoTagHtml(loadout.secondary, loadout.secondaryAmmo)}
          ${loadout.secondaryAmmo2 ? ammoTagHtml(loadout.secondary, loadout.secondaryAmmo2, true) + ' <span class="dual-ammo-label">· SCHROT</span>' : ''}
        </div>
      </div>
    </div>`
  container.appendChild(secCard)

  // ── Slotted Melee ──
  if (loadout.melee) {
    const meleePts = getWeaponPts(loadout.melee)
    const meleeEl  = document.createElement('div')
    meleeEl.className = 'hs-melee-row'
    meleeEl.innerHTML = `
      <div class="hs-melee-icon">${getWeaponIcon('slotMelee')}</div>
      <div class="hs-melee-info">
        <span class="hs-melee-label">NAHKAMPF · SLOT</span>
        <span class="hs-melee-name">${loadout.melee.name}</span>
      </div>
      <span class="hs-melee-pts">+${meleePts} PTS</span>`
    container.appendChild(meleeEl)
  }

  // ── Tools & Consumables ──
  const tools       = loadout.tools       || []
  const consumables = loadout.consumables || []

  const utilSection = document.createElement('div')
  utilSection.className = 'hs-util-section'
  utilSection.innerHTML = `
    <div class="hs-util-col">
      <div class="hs-util-header">
        <span class="hs-util-icon">⚙</span>
        <span>TOOLS</span>
        <span class="hs-util-count">${tools.length}/4</span>
      </div>
      <div class="hs-util-grid">${renderItemSlots(tools, 4)}</div>
    </div>
    <div class="hs-util-col">
      <div class="hs-util-header">
        <span class="hs-util-icon">✚</span>
        <span>CONSUMABLES</span>
        <span class="hs-util-count">${consumables.length}/4</span>
      </div>
      <div class="hs-util-grid">${renderItemSlots(consumables, 4)}</div>
    </div>`
  container.appendChild(utilSection)

  // ── Slot bonus ──
  if (!state.settings.quartermasterEnabled) {
    const used  = calcUsedSlots(loadout)
    const empty = Math.max(0, Math.min(2, 4 - used))
    if (empty > 0) {
      const bonusEl = document.createElement('div')
      bonusEl.className = 'hs-slot-bonus'
      bonusEl.innerHTML = `
        <span class="slot-bonus-label">SLOT BONUS</span>
        <span class="slot-bonus-val">+${empty * 50} PTS</span>
        <span class="slot-bonus-desc">${empty} freier Slot${empty !== 1 ? 's' : ''}</span>`
      container.appendChild(bonusEl)
    }
  }

  const baseScore = calcLoadoutScore(loadout)
  document.getElementById('loadout-base-score').textContent = (baseScore >= 0 ? '+' : '') + baseScore

  // Update reroll button
  const rerollBtn = document.getElementById('btn-reroll')
  if (rerollBtn) {
    rerollBtn.textContent = `↺ NEU WÜRFELN (${state.rerolls})`
    rerollBtn.disabled    = state.rerolls <= 0
  }
}

function renderItemSlots(items, max) {
  const slots = []
  for (let i = 0; i < max; i++) {
    if (i < items.length) {
      const item  = items[i]
      const isReq = item.required_setting && state.settings[item.required_setting]
      slots.push(`<div class="hs-item-slot filled${isReq ? ' required' : ''}">${item.name}</div>`)
    } else {
      slots.push(`<div class="hs-item-slot empty">—</div>`)
    }
  }
  return slots.join('')
}

// ═══════════════════════════════════════════════════════════════════════════
// ARSENAL TABLE
// ═══════════════════════════════════════════════════════════════════════════

function renderArsenalTable() {
  const container = document.getElementById('arsenal-content')
  if (!container) return

  const ammoHeaders = ALL_AMMO_KEYS.map(k =>
    `<th class="ammo-col">${AMMO_LABELS[k].replace(' ','<br>')}</th>`
  ).join('')

  function ammoCells(weapon) {
    return ALL_AMMO_KEYS.map(key => {
      const entry = weapon.ammo?.find(a => a.key === key)
      if (!entry) return '<td class="ammo-na">—</td>'
      const cls = entry.pts > 0 ? 'ammo-pos' : entry.pts < 0 ? 'ammo-neg' : 'ammo-zero'
      return `<td class="${cls}">${entry.pts >= 0 ? '+' : ''}${entry.pts}</td>`
    }).join('')
  }

  function renderSlotPips(slots) {
    return Array.from({ length: 3 }, (_, i) =>
      `<span class="slot-pip${i < slots ? ' on' : ''}"></span>`
    ).join('')
  }

  function weaponRow(w) {
    const eff = getWeaponPts(w)
    const dual = w.dualAmmo ? `<span class="arsenal-dual-badge" title="Dual Ammo">2x</span>` : ''
    return `<tr>
      <td class="arsenal-weapon-name">${w.name}${dual}</td>
      <td class="arsenal-slots">${renderSlotPips(w.slots || 1)}</td>
      <td class="arsenal-type">${(w.ammoType || '').toUpperCase() || '—'}</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${eff}"
          data-id="${w.id}" data-default="${w.pts}"
          onchange="updateArsenalPts(this)" min="-200" max="500" step="10">
      </td>
      <td class="arsenal-firemode">${w.fireMode || '—'}</td>
      ${ammoCells(w)}
    </tr>`
  }

  function meleeRow(w) {
    const eff = getWeaponPts(w)
    return `<tr>
      <td class="arsenal-weapon-name">${w.name}</td>
      <td class="arsenal-slots">${renderSlotPips(w.slots || 1)}</td>
      <td class="arsenal-type">NAHKAMPF</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${eff}"
          data-id="${w.id}" data-default="${w.pts}"
          onchange="updateArsenalPts(this)" min="-200" max="500" step="10">
      </td>
      <td class="arsenal-firemode">—</td>
      ${ALL_AMMO_KEYS.map(() => '<td class="ammo-na">—</td>').join('')}
    </tr>`
  }

  function itemRow(i, type) {
    return `<tr>
      <td class="arsenal-weapon-name">${i.name}</td>
      <td class="arsenal-slots">—</td>
      <td class="arsenal-type">${type.toUpperCase()}</td>
      <td class="arsenal-pts-cell"><span class="arsenal-pts-static">—</span></td>
      <td class="arsenal-firemode">${i.required_setting ? '⚠ Pflicht' : 'Optional'}</td>
      ${ALL_AMMO_KEYS.map(() => '<td class="ammo-na">—</td>').join('')}
    </tr>`
  }

  function section(title, rows) {
    return `<div class="arsenal-section">
      <h3 class="arsenal-section-title">${title}</h3>
      <div class="arsenal-table-wrap">
        <table class="arsenal-table">
          <thead><tr>
            <th class="col-name">WAFFE</th>
            <th class="col-slots">SLOTS</th>
            <th class="col-type">TYP</th>
            <th class="col-pts">BASIS PTS</th>
            <th class="col-mode">FEUERMOD.</th>
            ${ammoHeaders}
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`
  }

  container.innerHTML =
    section('PRIMÄRWAFFEN',   WEAPON_DATA.primaries.map(weaponRow).join('')) +
    section('SEKUNDÄRWAFFEN', WEAPON_DATA.secondaries.map(weaponRow).join('')) +
    section('NAHKAMPF (SLOT)',WEAPON_DATA.slottedMelee.map(meleeRow).join('')) +
    section('TOOLS',          WEAPON_DATA.tools.map(t => itemRow(t, 'tool')).join('')) +
    section('CONSUMABLES',    WEAPON_DATA.consumables.map(c => itemRow(c, 'consumable')).join(''))
}

async function updateArsenalPts(input) {
  const id         = input.dataset.id
  const defaultPts = Number(input.dataset.default)
  const newPts     = Number(input.value)
  if (newPts === defaultPts) delete state.arsenalOverrides[id]
  else                        state.arsenalOverrides[id] = { pts: newPts }
  input.classList.toggle('pts-modified', newPts !== defaultPts)
  await saveArsenal()
}

// ═══════════════════════════════════════════════════════════════════════════
// RESULTS PREVIEW
// ═══════════════════════════════════════════════════════════════════════════

function updatePreviewScore() {
  if (!state.currentRoundData) return
  const { total } = calcRoundScore(state.currentRoundData.loadout, state.currentRoundData.results)
  const el = document.getElementById('preview-score')
  el.textContent = (total >= 0 ? '+' : '') + total
  el.classList.toggle('negative', total < 0)
}

// ═══════════════════════════════════════════════════════════════════════════
// HISTORY RENDERING
// ═══════════════════════════════════════════════════════════════════════════

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'
  })
}

function renderHistory() {
  const container = document.getElementById('history-list')
  if (!state.history.length) {
    container.innerHTML = `<div class="history-empty">Noch keine Läufe gespeichert.<br>Starte deinen ersten Hunt.</div>`
    return
  }
  const sorted = [...state.history].sort((a, b) => new Date(b.date) - new Date(a.date))
  container.innerHTML = sorted.map(run => {
    const totalKills  = run.rounds.reduce((s, r) => s + (r.results?.kills  || 0), 0)
    const totalDeaths = run.rounds.reduce((s, r) => s + (r.results?.deaths || 0), 0)
    const extractions = run.rounds.filter(r => r.results?.extracted).length
    const kd    = totalDeaths > 0 ? (totalKills / totalDeaths).toFixed(2) : totalKills
    const sign  = run.totalScore >= 0 ? '+' : ''
    return `
      <div class="history-card" onclick="showRunDetail('${run.id}')">
        <div class="history-card-header">
          <span class="history-card-date">${formatDate(run.date)}</span>
          <span class="history-card-badge">${run.rounds.length} Runde${run.rounds.length !== 1 ? 'n' : ''}</span>
          <span class="history-card-score">${sign}${run.totalScore}</span>
        </div>
        <div class="history-card-body">
          <span class="history-stat">Kills: <strong>${totalKills}</strong></span>
          <span class="history-stat">Tode: <strong>${totalDeaths}</strong></span>
          <span class="history-stat">K/D: <strong>${kd}</strong></span>
          <span class="history-stat">Extraktionen: <strong>${extractions}</strong></span>
          ${run.settings?.soloMode ? '<span class="history-stat text-gold">Solo ×1.5</span>' : ''}
          ${run.settings?.quartermasterEnabled ? '<span class="history-stat text-dim">QM</span>' : ''}
        </div>
      </div>`
  }).join('')
}

function showRunDetail(runId) {
  const run = state.history.find(r => r.id === runId)
  if (!run) return

  document.getElementById('rd-title').textContent    = 'LAUF DETAILS'
  document.getElementById('rd-subtitle').textContent = formatDate(run.date)

  const totalKills  = run.rounds.reduce((s, r) => s + (r.results?.kills      || 0), 0)
  const totalDeaths = run.rounds.reduce((s, r) => s + (r.results?.deaths     || 0), 0)
  const totalHS     = run.rounds.reduce((s, r) => s + (r.results?.headshots  || 0), 0)
  const kd          = totalDeaths > 0 ? (totalKills / totalDeaths).toFixed(2) : totalKills

  document.getElementById('run-detail-content').innerHTML = `
    <div class="run-detail-header-stats">
      <div class="rd-stat"><span class="rd-stat-val">${run.totalScore >= 0 ? '+' : ''}${run.totalScore}</span><span class="rd-stat-label">Score</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${run.rounds.length}</span><span class="rd-stat-label">Runden</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalKills}</span><span class="rd-stat-label">Kills</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalDeaths}</span><span class="rd-stat-label">Tode</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${kd}</span><span class="rd-stat-label">K/D</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalHS}</span><span class="rd-stat-label">Headshots</span></div>
    </div>
    ${run.rounds.map(renderRoundDetailCard).join('')}`

  showView('run-detail')
}

function renderRoundDetailCard(round) {
  const sign = round.totalScore >= 0 ? '+' : ''
  const l    = round.loadout
  const r    = round.results

  const primAmmoEntry = getAmmoEntry(l.primary, l.primaryAmmo)
  const secAmmoEntry  = getAmmoEntry(l.secondary, l.secondaryAmmo)
  const primAmmoLabel = primAmmoEntry?.label ?? l.primaryAmmo ?? ''
  const secAmmoLabel  = secAmmoEntry?.label  ?? l.secondaryAmmo ?? ''
  const sec2Entry     = l.secondaryAmmo2
    ? l.secondary?.secondAmmo?.find(a => a.key === l.secondaryAmmo2)
    : null
  const sec2Label     = sec2Entry ? ` + ${sec2Entry.label}` : ''

  // Support old loadout format with items array
  const tools       = l.tools       || l.items?.filter(i => i.category === 'tool')       || []
  const consumables = l.consumables || l.items?.filter(i => i.category === 'consumable') || []
  const allItems    = [...tools, ...consumables]

  return `
    <div class="round-detail-card">
      <div class="round-detail-header">
        <span class="round-detail-num">RUNDE ${round.roundNumber}</span>
        <span class="round-detail-score">${sign}${round.totalScore} PTS</span>
      </div>
      <div class="round-detail-body">
        <div class="rd-loadout-col">
          <span><strong>PRIMÄR</strong> ${l.primary?.name ?? '—'} · ${primAmmoLabel}</span>
          <span><strong>SEKUNDÄR</strong> ${l.secondary?.name ?? '—'} · ${secAmmoLabel}${sec2Label}</span>
          ${l.melee ? `<span><strong>NAHKAMPF</strong> ${l.melee.name}</span>` : ''}
          ${allItems.length ? `<span><strong>ITEMS</strong> ${allItems.map(i => i.name).join(', ')}</span>` : ''}
        </div>
        <div class="rd-results-col">
          <div class="rd-result-item"><span>Headshots</span><span>${r?.headshots ?? 0}</span></div>
          <div class="rd-result-item"><span>Kills</span><span>${r?.kills ?? 0}</span></div>
          <div class="rd-result-item"><span>Tode</span><span>${r?.deaths ?? 0}</span></div>
          <div class="rd-result-item"><span>Wiederbelebungen</span><span>${r?.revives ?? 0}</span></div>
          <div class="rd-result-item"><span>Extraktion</span><span class="${r?.extracted ? 'text-good' : 'text-bad'}">${r?.extracted ? 'JA' : 'NEIN'}</span></div>
          <div class="rd-result-item"><span>Bounties</span><span>${r?.bounties ?? 0}</span></div>
        </div>
      </div>
    </div>`
}

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS UI
// ═══════════════════════════════════════════════════════════════════════════

function applySettingsToUI() {
  document.getElementById('set-medkit').checked         = state.settings.medkitRequired
  document.getElementById('set-melee').checked          = state.settings.meleeRequired
  document.getElementById('set-choke').checked          = state.settings.chokeRequired
  document.getElementById('set-healsyringe').checked    = state.settings.healSyringeRequired
  document.getElementById('set-regenshot').checked      = state.settings.regenShotRequired
  document.getElementById('set-solo').checked           = state.settings.soloMode
  document.getElementById('set-quartermaster').checked  = state.settings.quartermasterEnabled
}

async function saveSetting(key, value) {
  state.settings[key] = value
  await saveSettings()
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═══════════════════════════════════════════════════════════════════════════

function updateHomeUI() {
  document.getElementById('home-flavor-text').textContent = pick(FLAVOR_TEXTS)

  const hasRun = !!state.currentRun
  const banner = document.getElementById('active-run-banner')
  const endBtn = document.getElementById('btn-end-run')

  if (hasRun) {
    banner.classList.remove('hidden')
    document.getElementById('active-run-info').textContent =
      `${state.currentRun.rounds.length} Runde${state.currentRun.rounds.length !== 1 ? 'n' : ''} gespielt · ${state.currentRun.totalScore} Pts`
    endBtn.style.display = 'inline-flex'
  } else {
    banner.classList.add('hidden')
    endBtn.style.display = 'none'
  }

  const s  = calcTotalStats()
  const qs = document.getElementById('home-quick-stats')
  if (state.history.length > 0) {
    const lastRun = [...state.history].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    qs.innerHTML = `
      <div class="quick-stat-card"><span class="qs-val">${s.totalScore}</span><span class="qs-label">Total Score</span></div>
      <div class="quick-stat-card"><span class="qs-val">${state.history.length}</span><span class="qs-label">Läufe</span></div>
      <div class="quick-stat-card"><span class="qs-val">${lastRun.totalScore >= 0 ? '+' : ''}${lastRun.totalScore}</span><span class="qs-label">Letzter Lauf</span></div>`
  } else {
    qs.innerHTML = ''
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAME FLOW
// ═══════════════════════════════════════════════════════════════════════════

function handleRandomize() {
  if (!state.currentRun) {
    state.currentRun = {
      id:         `run_${Date.now()}`,
      date:       new Date().toISOString(),
      rounds:     [],
      totalScore: 0,
      settings:   { ...state.settings },
    }
  }

  const loadout  = generateLoadout()
  const roundNum = state.currentRun.rounds.length + 1

  state.currentRoundData = {
    roundNumber: roundNum,
    loadout,
    results: { headshots:0, kills:0, deaths:0, revives:0, firstDeath:false, extracted:false, bounties:0 },
  }

  document.getElementById('loadout-round-label').textContent = `Runde ${roundNum}`
  renderLoadout(loadout)
  showView('loadout')
}

function handleReroll() {
  if (state.rerolls <= 0 || !state.currentRoundData) return
  state.rerolls--
  const loadout = generateLoadout()
  state.currentRoundData.loadout = loadout
  renderLoadout(loadout)
  updateStatsBar()
  saveSettings()
}

function confirmLoadout() {
  if (!state.currentRoundData) return
  resetResultsForm()
  document.getElementById('results-round-label').textContent = `Runde ${state.currentRoundData.roundNumber}`

  const l         = state.currentRoundData.loadout
  const primLabel = getAmmoEntry(l.primary, l.primaryAmmo)?.label ?? l.primaryAmmo
  const secLabel  = getAmmoEntry(l.secondary, l.secondaryAmmo)?.label ?? l.secondaryAmmo
  const sec2Entry = l.secondaryAmmo2 ? l.secondary?.secondAmmo?.find(a => a.key === l.secondaryAmmo2) : null
  const sec2Label = sec2Entry ? ` + ${sec2Entry.label}` : ''

  document.getElementById('results-loadout-summary').innerHTML = `
    <span><span class="rls-label">PRIMÄR</span> <span class="rls-val">${l.primary.name} · ${primLabel}</span></span>
    <span><span class="rls-label">SEKUNDÄR</span> <span class="rls-val">${l.secondary.name} · ${secLabel}${sec2Label}</span></span>
    ${l.melee ? `<span><span class="rls-label">NAHKAMPF</span> <span class="rls-val">${l.melee.name}</span></span>` : ''}`

  updatePreviewScore()
  showView('results')
}

function resetResultsForm() {
  if (state.currentRoundData) {
    state.currentRoundData.results = { headshots:0, kills:0, deaths:0, revives:0, firstDeath:false, extracted:false, bounties:0 }
  }
  ;['headshots','kills','deaths','revives','bounties'].forEach(k => {
    document.getElementById(`res-${k}`).textContent = '0'
  })
  document.getElementById('res-first-death').checked = false
  document.getElementById('res-extracted').checked   = false
}

function adjustResult(key, delta) {
  if (!state.currentRoundData) return
  const next = Math.max(0, state.currentRoundData.results[key] + delta)
  state.currentRoundData.results[key] = next
  document.getElementById(`res-${key}`).textContent = next
  updatePreviewScore()
}

function updateToggle(key, value) {
  if (!state.currentRoundData) return
  state.currentRoundData.results[key] = value
  updatePreviewScore()
}

async function submitResults() {
  if (!state.currentRoundData || !state.currentRun) return

  const { loadout, results, roundNumber } = state.currentRoundData
  const { total, breakdown }             = calcRoundScore(loadout, results)

  const round = {
    id:           `round_${Date.now()}`,
    roundNumber,
    loadout,
    results,
    totalScore:   total,
    loadoutScore: calcLoadoutScore(loadout),
    breakdown,
  }

  state.currentRun.rounds.push(round)
  state.currentRun.totalScore += total

  // Reroll award: +1 per 3 completed rounds
  state.totalRoundsCompleted++
  const oldThresh = Math.floor((state.totalRoundsCompleted - 1) / 3)
  const newThresh = Math.floor(state.totalRoundsCompleted / 3)
  if (newThresh > oldThresh) state.rerolls++

  await saveSettings()

  const scoreEl = document.getElementById('rc-round-score')
  scoreEl.textContent = (total >= 0 ? '+' : '') + total
  scoreEl.className   = 'round-score-value' + (total < 0 ? ' negative' : '')
  document.getElementById('rc-run-total').textContent =
    (state.currentRun.totalScore >= 0 ? '+' : '') + state.currentRun.totalScore

  document.getElementById('rc-breakdown').innerHTML = breakdown.map(b => {
    const sign = b.pts >= 0 ? '+' : ''
    return `<span class="breakdown-item ${b.type}">${b.label}: ${sign}${b.pts}</span>`
  }).join('')

  updateStatsBar()
  showView('round-complete')
}

function handleNextRound() { handleRandomize() }

async function handleEndRun() {
  if (!state.currentRun) { showView('home'); return }
  if (state.currentRun.rounds.length === 0) { state.currentRun = null; showView('home'); return }

  state.history.push({ ...state.currentRun, status:'completed' })
  state.currentRun       = null
  state.currentRoundData = null

  await saveHistory()
  updateStatsBar()
  showView('home')
}

// ═══════════════════════════════════════════════════════════════════════════
// MODAL
// ═══════════════════════════════════════════════════════════════════════════

function openModal(title, body, onConfirm) {
  document.getElementById('modal-title').textContent = title
  document.getElementById('modal-body').textContent  = body
  document.getElementById('modal-confirm-btn').onclick = () => { closeModal(); onConfirm() }
  document.getElementById('modal-overlay').classList.remove('hidden')
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden')
}

async function confirmResetData() {
  openModal(
    'ALLE DATEN LÖSCHEN',
    'Diese Aktion löscht alle gespeicherten Läufe und Statistiken unwiderruflich. Bist du sicher?',
    async () => {
      state.history              = []
      state.currentRun           = null
      state.currentRoundData     = null
      state.rerolls              = 2
      state.totalRoundsCompleted = 0
      await saveHistory()
      await saveSettings()
      updateStatsBar()
      showView('home')
    }
  )
}

// ═══════════════════════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════════════════════

async function init() {
  showView('splash')
  const t0 = Date.now()
  await loadAll()
  await new Promise(r => setTimeout(r, Math.max(0, 2400 - (Date.now() - t0))))
  applySettingsToUI()
  showView('home')
}

init()
