'use strict'

// ═══════════════════════════════════════════════════════════════════════════
// WEAPON DATABASE
// ═══════════════════════════════════════════════════════════════════════════

const WEAPON_DATA = {
  ammoModifiers: {
    standard:    { label: 'Standard',      pts: 0  },
    spitzer:     { label: 'Spitzer',       pts: -2 },
    fmj:         { label: 'FMJ',           pts: -1 },
    dumdum:      { label: 'Dumdum',        pts: 0  },
    highvelocity:{ label: 'High Velocity', pts: -1 },
    poisonous:   { label: 'Vergiftet',     pts: 1  },
    explosive:   { label: 'Explosiv',      pts: 2  },
    incendiary:  { label: 'Brandmunition', pts: 1  },
    slugs:       { label: 'Slugs',         pts: 1  },
  },

  primaries: [
    // ─ Rifles / Long Ammo ─
    { id:'springfield_1866',      name:'Springfield 1866',            category:'rifle',          slots:3, ammoType:'long',   pts:4, ammo:['standard','spitzer','fmj','poisonous'],              fireMode:'Einzelschuss' },
    { id:'springfield_1866c',     name:'Springfield 1866 Compact',    category:'rifle',          slots:2, ammoType:'long',   pts:3, ammo:['standard','spitzer','fmj','poisonous'],              fireMode:'Einzelschuss' },
    { id:'winfield_m1873',        name:'Winfield M1873',              category:'rifle',          slots:3, ammoType:'long',   pts:3, ammo:['standard','highvelocity','dumdum','poisonous'],      fireMode:'Hebel-Repetier' },
    { id:'winfield_m1873c',       name:'Winfield M1873C',             category:'rifle',          slots:2, ammoType:'long',   pts:3, ammo:['standard','highvelocity','dumdum','poisonous'],      fireMode:'Hebel-Repetier' },
    { id:'winfield_m1873_marks',  name:'Winfield M1873 Marksman',     category:'rifle',          slots:3, ammoType:'long',   pts:4, ammo:['standard','highvelocity','spitzer','fmj'],           fireMode:'Hebel-Repetier' },
    { id:'winfield_centennial',   name:'Winfield Centennial',         category:'rifle',          slots:3, ammoType:'long',   pts:3, ammo:['standard','highvelocity','dumdum'],                  fireMode:'Hebel-Repetier' },
    { id:'winfield_cent_shorty',  name:'Winfield Centennial Shorty',  category:'rifle',          slots:2, ammoType:'long',   pts:3, ammo:['standard','highvelocity','dumdum'],                  fireMode:'Hebel-Repetier' },
    { id:'lebel_1886',            name:'Lebel Model 1886',            category:'rifle',          slots:3, ammoType:'long',   pts:4, ammo:['standard','spitzer','fmj','poisonous'],              fireMode:'Repetier' },
    { id:'mosin_1891',            name:'Mosin-Nagant M1891',          category:'rifle',          slots:3, ammoType:'long',   pts:5, ammo:['standard','spitzer','fmj','explosive'],             fireMode:'Repetier' },
    { id:'mosin_1891_obrez',      name:'Mosin-Nagant Obrez',          category:'rifle',          slots:2, ammoType:'long',   pts:3, ammo:['standard','fmj','dumdum'],                          fireMode:'Einzelschuss' },
    { id:'nitro_express',         name:'Nitro Express Rifle',         category:'rifle',          slots:3, ammoType:'nitro',  pts:5, ammo:['standard'],                                         fireMode:'Einzelschuss' },
    { id:'sparks_lrr',            name:'Sparks LRR',                  category:'rifle',          slots:3, ammoType:'long',   pts:5, ammo:['standard','spitzer','incendiary','explosive'],       fireMode:'Einzelschuss' },
    { id:'krag_jorgensen',        name:'Krag-Jørgensen',              category:'rifle',          slots:3, ammoType:'long',   pts:4, ammo:['standard','spitzer','fmj','poisonous'],              fireMode:'Repetier' },
    // ─ Shotguns / Medium Ammo ─
    { id:'specter_1882',          name:'Specter 1882',                category:'shotgun',        slots:3, ammoType:'medium', pts:2, ammo:['standard','incendiary','fmj','slugs'],               fireMode:'Pump-Action' },
    { id:'specter_1882c',         name:'Specter 1882 Compact',        category:'shotgun',        slots:2, ammoType:'medium', pts:2, ammo:['standard','incendiary','fmj','slugs'],               fireMode:'Pump-Action' },
    { id:'romero_1877',           name:'Romero 1877',                 category:'shotgun',        slots:2, ammoType:'medium', pts:3, ammo:['standard','incendiary','explosive','slugs'],         fireMode:'Einzelschuss' },
    { id:'romero_1877_talon',     name:'Romero 1877 Talon',           category:'shotgun',        slots:2, ammoType:'medium', pts:3, ammo:['standard','incendiary','explosive','slugs'],         fireMode:'Einzelschuss' },
    { id:'winfield_1887',         name:'Winfield 1887',               category:'shotgun',        slots:3, ammoType:'medium', pts:3, ammo:['standard','incendiary','fmj'],                       fireMode:'Hebel-Repetier' },
    { id:'winfield_1887_terminus',name:'Winfield 1887 Terminus',      category:'shotgun',        slots:3, ammoType:'medium', pts:3, ammo:['standard','incendiary','explosive'],                 fireMode:'Hebel-Repetier' },
    { id:'crown_king_auto5',      name:'Crown & King Auto-5',         category:'shotgun',        slots:3, ammoType:'medium', pts:2, ammo:['standard','incendiary','fmj'],                       fireMode:'Halbautomatik' },
    // ─ Other Primaries ─
    { id:'bornheim_no3',          name:'Bornheim No. 3',              category:'pistol_primary', slots:2, ammoType:'medium', pts:3, ammo:['standard','fmj','dumdum'],                          fireMode:'Vollautomat' },
    { id:'caldwell_rival_78',     name:'Caldwell Rival 78',           category:'pistol_primary', slots:2, ammoType:'medium', pts:3, ammo:['standard','incendiary','explosive','slugs'],         fireMode:'Einzelschuss' },
  ],

  secondaries: [
    { id:'nagant_m1895',          name:'Nagant M1895',                category:'pistol', slots:1, ammoType:'small', pts:2, ammo:['standard','fmj','dumdum','poisonous'],          fireMode:'Revolver' },
    { id:'nagant_officer',        name:'Nagant M1895 Officer',        category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','fmj','dumdum','poisonous'],          fireMode:'Revolver' },
    { id:'nagant_deadeye',        name:'Nagant M1895 Deadeye',        category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','fmj','spitzer'],                    fireMode:'Revolver' },
    { id:'nagant_silencer',       name:'Nagant M1895 Silencer',       category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','fmj','dumdum'],                     fireMode:'Revolver (Silenced)' },
    { id:'caldwell_pax',          name:'Caldwell Pax',                category:'pistol', slots:1, ammoType:'small', pts:2, ammo:['standard','dumdum','fmj','highvelocity'],       fireMode:'Revolver' },
    { id:'caldwell_pax_trapper',  name:'Caldwell Pax Trapper',        category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','dumdum','fmj','highvelocity'],       fireMode:'Revolver' },
    { id:'webley_mk6',            name:'Web-Ley Mk VI',               category:'pistol', slots:1, ammoType:'small', pts:2, ammo:['standard','dumdum','fmj','explosive'],          fireMode:'Revolver' },
    { id:'webley_mk6_bayonet',    name:'Web-Ley Mk VI Bayonet',       category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','dumdum','fmj','explosive'],          fireMode:'Revolver' },
    { id:'lemat_mark2',           name:'LeMat Mark II',               category:'pistol', slots:1, ammoType:'small', pts:2, ammo:['standard','fmj','dumdum'],            fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:['standard','incendiary','slugs'] },
    { id:'lemat_mark2_inf',       name:'LeMat Mark II Infantry',      category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','fmj','dumdum'],            fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:['standard','incendiary','slugs'] },
    { id:'lemat_mark2_cav',       name:'LeMat Mark II Cavalry',       category:'pistol', slots:1, ammoType:'small', pts:3, ammo:['standard','fmj','spitzer'],           fireMode:'Revolver',
      dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:['standard','incendiary','slugs'] },
    { id:'caldwell_conv_sec',     name:'Caldwell Conversion',         category:'pistol', slots:2, ammoType:'long',  pts:3, ammo:['standard','spitzer','fmj','dumdum'],             fireMode:'Einzelschuss' },
    { id:'bornheim_sec',          name:'Bornheim No. 3',              category:'pistol', slots:1, ammoType:'medium',pts:3, ammo:['standard','fmj','dumdum'],                     fireMode:'Vollautomat' },
    { id:'rival_78_sec',          name:'Caldwell Rival 78',           category:'pistol', slots:2, ammoType:'medium',pts:2, ammo:['standard','incendiary','slugs'],                fireMode:'Einzelschuss' },
    { id:'scottfield_model3',     name:'Scottfield Model 3',          category:'pistol', slots:1, ammoType:'small', pts:2, ammo:['standard','fmj','dumdum','poisonous'],          fireMode:'Revolver' },
  ],

  melee: [
    { id:'knife',        name:'Messer',       category:'melee', pts:1 },
    { id:'machete',      name:'Machete',      category:'melee', pts:2 },
    { id:'cleaver',      name:'Hackmesser',   category:'melee', pts:2 },
    { id:'axe',          name:'Axt',          category:'melee', pts:3 },
    { id:'combat_axe',   name:'Kampfaxt',     category:'melee', pts:3 },
    { id:'bomb_lance',   name:'Bomben-Lanze', category:'melee', pts:4 },
    { id:'dusters',      name:'Schlagring',   category:'melee', pts:1 },
    { id:'uppercut_bat', name:'Baseball-Bat', category:'melee', pts:2 },
  ],

  items: [
    { id:'medkit',         name:'Medkit',               category:'consumable', required_setting:'medkitRequired' },
    { id:'heal_syringe',   name:'Heilspritze',           category:'consumable', required_setting:'healSyringeRequired' },
    { id:'regen_shot',     name:'Regenshot',             category:'consumable', required_setting:'regenShotRequired' },
    { id:'choke_bomb',     name:'Choke-Bombe',           category:'tool',       required_setting:'chokeRequired' },
    { id:'dyn_bundle',     name:'Dynamit-Bündel',        category:'consumable', required_setting:null },
    { id:'dyn_small',      name:'Kleines Dynamit',       category:'consumable', required_setting:null },
    { id:'poison_vial',    name:'Giftvial',              category:'tool',       required_setting:null },
    { id:'flashbang',      name:'Blendgranate',          category:'tool',       required_setting:null },
    { id:'decoy',          name:'Köder',                 category:'tool',       required_setting:null },
    { id:'firebomb',       name:'Brandbombe',            category:'consumable', required_setting:null },
    { id:'flare_pistol',   name:'Leuchtpistole',         category:'tool',       required_setting:null },
    { id:'stalker_beetle', name:'Stalker-Käfer',         category:'tool',       required_setting:null },
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
  medkitRequired:        false,
  meleeRequired:         true,
  chokeRequired:         false,
  healSyringeRequired:   false,
  regenShotRequired:     false,
  soloMode:              false,
  quartermasterEnabled:  false,
}

let state = {
  settings:         { ...DEFAULT_SETTINGS },
  currentRun:       null,
  currentRoundData: null,
  history:          [],
  arsenalOverrides: {},
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
  if (history)         state.history          = history
  if (settings)        state.settings         = { ...DEFAULT_SETTINGS, ...settings }
  if (arsenalOverrides) state.arsenalOverrides = arsenalOverrides
}

async function saveHistory()  { await window.huntAPI.writeData('history.json',  state.history) }
async function saveSettings() { await window.huntAPI.writeData('settings.json', state.settings) }
async function saveArsenal()  { await window.huntAPI.writeData('arsenal.json',  state.arsenalOverrides) }

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

function calcLoadoutScore(loadout) {
  const amMods = WEAPON_DATA.ammoModifiers
  let pts = 0

  if (loadout.primary) {
    pts += getWeaponPts(loadout.primary)
    pts += (amMods[loadout.primaryAmmo]?.pts ?? 0)
  }
  if (loadout.secondary) {
    pts += getWeaponPts(loadout.secondary)
    pts += (amMods[loadout.secondaryAmmo]?.pts ?? 0)
    if (loadout.secondary.dualAmmo && loadout.secondaryAmmo2) {
      pts += (amMods[loadout.secondaryAmmo2]?.pts ?? 0)
    }
  }
  if (loadout.melee) pts += getWeaponPts(loadout.melee)

  // Slot bonus: fewer total slots = harder challenge
  const totalSlots = (loadout.primary?.slots || 2) + (loadout.secondary?.slots || 1)
  if (totalSlots <= 3) pts += 3
  else if (totalSlots === 4) pts += 1

  if (state.settings.medkitRequired)      pts -= 2
  if (state.settings.healSyringeRequired) pts -= 1
  if (state.settings.regenShotRequired)   pts -= 1

  return pts
}

function calcRoundScore(loadout, results) {
  const breakdown = []

  const loadoutPts = calcLoadoutScore(loadout)
  breakdown.push({ label: 'Loadout', pts: loadoutPts, type: loadoutPts >= 0 ? 'good' : 'bad' })

  const hsPts = results.headshots * 10
  if (hsPts) breakdown.push({ label: `${results.headshots}× Headshot`, pts: hsPts, type: 'good' })

  const killPts = results.kills * 15
  if (killPts) breakdown.push({ label: `${results.kills}× Kill`, pts: killPts, type: 'good' })

  const revPts = results.revives * 5
  if (revPts) breakdown.push({ label: `${results.revives}× Wiederbelebung`, pts: revPts, type: 'good' })

  const deathPts = results.deaths * -10
  if (deathPts) breakdown.push({ label: `${results.deaths}× Tod`, pts: deathPts, type: 'bad' })

  if (results.firstDeath) breakdown.push({ label: 'Erster Tod', pts: -20, type: 'bad' })
  if (results.extracted)  breakdown.push({ label: 'Extraktion',  pts:  30, type: 'good' })

  const bountyPts = results.bounties * 25
  if (bountyPts) breakdown.push({ label: `${results.bounties}× Bounty`, pts: bountyPts, type: 'good' })

  let total = breakdown.reduce((s, b) => s + b.pts, 0)
  if (state.settings.soloMode) {
    breakdown.push({ label: 'Solo-Bonus ×1.5', pts: Math.round(total * 0.5), type: 'good' })
    total = Math.round(total * 1.5)
  }

  return { total, breakdown }
}

function calcTotalStats() {
  let totalScore = 0, totalKills = 0, totalDeaths = 0, totalRounds = 0
  for (const run of state.history) {
    for (const round of run.rounds) {
      totalScore  += round.totalScore
      totalKills  += round.results.kills
      totalDeaths += round.results.deaths
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
  document.getElementById('sb-rounds').textContent = s.totalRounds
  document.getElementById('sb-avg').textContent = s.totalRounds > 0
    ? Math.round(s.totalScore / s.totalRounds)
    : 0
}

// ═══════════════════════════════════════════════════════════════════════════
// LOADOUT GENERATION
// ═══════════════════════════════════════════════════════════════════════════

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }

function generateLoadout() {
  let primary, primaryAmmo, secondary, secondaryAmmo, secondaryAmmo2

  if (state.settings.quartermasterEnabled) {
    // QM: always Large (3-slot) primary + Medium (2-slot) secondary
    const largePrimaries = WEAPON_DATA.primaries.filter(w => w.slots === 3)
    primary = pick(largePrimaries.length > 0 ? largePrimaries : WEAPON_DATA.primaries)
    primaryAmmo = pick(primary.ammo)

    // 2-slot pool: medium secondaries + medium-slot primaries used as secondary
    const qmPool = [
      ...WEAPON_DATA.secondaries.filter(w => w.slots === 2),
      ...WEAPON_DATA.primaries.filter(w => w.slots === 2),
    ]
    secondary = pick(qmPool.length > 0 ? qmPool : WEAPON_DATA.secondaries)
  } else {
    // Standard: any primary, secondary is always Small (1-slot)
    primary = pick(WEAPON_DATA.primaries)
    primaryAmmo = pick(primary.ammo)

    const smallPool = WEAPON_DATA.secondaries.filter(w => w.slots === 1)
    secondary = pick(smallPool.length > 0 ? smallPool : WEAPON_DATA.secondaries)
  }

  secondaryAmmo = pick(secondary.ammo)

  // Dual ammo for LeMat
  if (secondary.dualAmmo && secondary.secondAmmo) {
    secondaryAmmo2 = pick(secondary.secondAmmo)
  }

  let melee = null
  if (state.settings.meleeRequired || Math.random() < 0.5) {
    melee = pick(WEAPON_DATA.melee)
  }

  const requiredItems = WEAPON_DATA.items.filter(i =>
    i.required_setting && state.settings[i.required_setting]
  )
  const optionalItems = WEAPON_DATA.items.filter(i => !i.required_setting)
  const extraCount = Math.floor(Math.random() * 3)
  const extras = [...optionalItems].sort(() => Math.random() - 0.5).slice(0, extraCount)
  const items = [...requiredItems, ...extras]

  return { primary, primaryAmmo, secondary, secondaryAmmo, secondaryAmmo2, melee, items }
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
  melee: `<svg class="weapon-svg-icon" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
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

function getWeaponIcon(category) {
  return WEAPON_ICONS[category] || WEAPON_ICONS.item
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDER LOADOUT (Hunt:Showdown style)
// ═══════════════════════════════════════════════════════════════════════════

function slotDotsHtml(slots, filled) {
  const total = Math.max(slots, 3)
  return Array.from({ length: total }, (_, i) =>
    `<span class="sd${i < slots ? ' filled' : ''}"></span>`
  ).join('')
}

function renderLoadout(loadout) {
  const amMods = WEAPON_DATA.ammoModifiers
  const container = document.getElementById('loadout-display')
  container.innerHTML = ''
  container.className = 'hs-loadout'

  const totalSlots = (loadout.primary?.slots || 2) + (loadout.secondary?.slots || 1)

  // ── Primary weapon card ──
  const primPts = getWeaponPts(loadout.primary) + (amMods[loadout.primaryAmmo]?.pts ?? 0)
  const primAmmoMod = amMods[loadout.primaryAmmo]
  const primAmmoSign = primAmmoMod?.pts >= 0 ? '+' : ''
  const primAmmoPenalty = primAmmoMod?.pts !== 0 ? ` (${primAmmoSign}${primAmmoMod.pts})` : ''
  const slotLabel = loadout.primary.slots === 3 ? 'LARGE SLOT' : 'MEDIUM SLOT'

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
        <div class="hs-ammo-row">
          <span class="weapon-ammo-tag ammo-${loadout.primaryAmmo}">${primAmmoMod?.label}${primAmmoPenalty}</span>
        </div>
      </div>
    </div>`
  container.appendChild(primCard)

  // ── Secondary weapon card ──
  const secPts = getWeaponPts(loadout.secondary) + (amMods[loadout.secondaryAmmo]?.pts ?? 0)
    + (loadout.secondary.dualAmmo && loadout.secondaryAmmo2 ? (amMods[loadout.secondaryAmmo2]?.pts ?? 0) : 0)
  const secAmmoMod = amMods[loadout.secondaryAmmo]
  const secAmmoSign = secAmmoMod?.pts >= 0 ? '+' : ''
  const secAmmoPenalty = secAmmoMod?.pts !== 0 ? ` (${secAmmoSign}${secAmmoMod.pts})` : ''

  let dualAmmoHtml = ''
  if (loadout.secondary.dualAmmo && loadout.secondaryAmmo2) {
    const mod2 = amMods[loadout.secondaryAmmo2]
    const sign2 = mod2?.pts >= 0 ? '+' : ''
    const penalty2 = mod2?.pts !== 0 ? ` (${sign2}${mod2.pts})` : ''
    dualAmmoHtml = `<span class="weapon-ammo-tag ammo-${loadout.secondaryAmmo2}" title="${loadout.secondary.secondAmmoLabel}">${mod2?.label}${penalty2} <span class="dual-ammo-label">· SCHROT</span></span>`
  }

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
          <span class="weapon-ammo-tag ammo-${loadout.secondaryAmmo}">${secAmmoMod?.label}${secAmmoPenalty}</span>
          ${dualAmmoHtml}
        </div>
      </div>
    </div>`
  container.appendChild(secCard)

  // ── Melee ──
  if (loadout.melee) {
    const meleeEl = document.createElement('div')
    meleeEl.className = 'hs-melee-row'
    meleeEl.innerHTML = `
      <div class="hs-melee-icon">${getWeaponIcon('melee')}</div>
      <div class="hs-melee-info">
        <span class="hs-melee-label">NAHKAMPF</span>
        <span class="hs-melee-name">${loadout.melee.name}</span>
      </div>
      <span class="hs-melee-pts">+${getWeaponPts(loadout.melee)} PTS</span>`
    container.appendChild(meleeEl)
  }

  // ── Tools & Consumables ──
  const tools = loadout.items.filter(i => i.category === 'tool')
  const consumables = loadout.items.filter(i => i.category === 'consumable')

  const utilSection = document.createElement('div')
  utilSection.className = 'hs-util-section'
  utilSection.innerHTML = `
    <div class="hs-util-col">
      <div class="hs-util-header">
        <span class="hs-util-icon">⚙</span>
        <span>TOOLS</span>
        <span class="hs-util-count">${tools.length}/4</span>
      </div>
      <div class="hs-util-grid">
        ${renderItemSlots(tools, 4)}
      </div>
    </div>
    <div class="hs-util-col">
      <div class="hs-util-header">
        <span class="hs-util-icon">✚</span>
        <span>CONSUMABLES</span>
        <span class="hs-util-count">${consumables.length}/4</span>
      </div>
      <div class="hs-util-grid">
        ${renderItemSlots(consumables, 4)}
      </div>
    </div>`
  container.appendChild(utilSection)

  // ── Slot bonus indicator ──
  if (totalSlots <= 4) {
    const bonusEl = document.createElement('div')
    bonusEl.className = 'hs-slot-bonus'
    const bonus = totalSlots <= 3 ? 3 : 1
    bonusEl.innerHTML = `
      <span class="slot-bonus-label">SLOT BONUS</span>
      <span class="slot-bonus-val">+${bonus} PTS</span>
      <span class="slot-bonus-desc">${5 - totalSlots} freier Slot${5 - totalSlots !== 1 ? 's' : ''} · Erschwertes Loadout</span>`
    container.appendChild(bonusEl)
  }

  const baseScore = calcLoadoutScore(loadout)
  document.getElementById('loadout-base-score').textContent = (baseScore >= 0 ? '+' : '') + baseScore
}

function renderItemSlots(items, max) {
  const slots = []
  for (let i = 0; i < max; i++) {
    if (i < items.length) {
      const item = items[i]
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

const ALL_AMMO_KEYS = ['standard','spitzer','fmj','dumdum','highvelocity','poisonous','explosive','incendiary','slugs']

function renderArsenalTable() {
  const container = document.getElementById('arsenal-content')
  if (!container) return

  const amMods = WEAPON_DATA.ammoModifiers
  const ammoHeaders = ALL_AMMO_KEYS.map(k =>
    `<th class="ammo-col" title="${amMods[k].label}">${amMods[k].label.replace(' ','<br>')}</th>`
  ).join('')

  function weaponRow(w) {
    const effectivePts = getWeaponPts(w)
    const ammoCells = ALL_AMMO_KEYS.map(key => {
      if (!w.ammo) return '<td class="ammo-na">—</td>'
      if (!w.ammo.includes(key)) return '<td class="ammo-na">—</td>'
      const mod = amMods[key]
      const cls = mod.pts > 0 ? 'ammo-pos' : mod.pts < 0 ? 'ammo-neg' : 'ammo-zero'
      return `<td class="${cls}">${mod.pts >= 0 ? '+' : ''}${mod.pts}</td>`
    }).join('')

    const dualBadge = w.dualAmmo
      ? `<span class="arsenal-dual-badge" title="Dual Ammo">2x</span>`
      : ''

    return `<tr>
      <td class="arsenal-weapon-name">${w.name}${dualBadge}</td>
      <td class="arsenal-slots">${renderSlotPips(w.slots || 1)}</td>
      <td class="arsenal-type">${w.ammoType?.toUpperCase() || '—'}</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${effectivePts}"
          data-id="${w.id}" data-default="${w.pts}"
          onchange="updateArsenalPts(this)"
          min="-10" max="20" step="1">
      </td>
      <td class="arsenal-firemode">${w.fireMode || '—'}</td>
      ${ammoCells}
    </tr>`
  }

  function renderSlotPips(slots) {
    if (!slots) return '—'
    return Array.from({ length: 3 }, (_, i) =>
      `<span class="slot-pip${i < slots ? ' on' : ''}"></span>`
    ).join('')
  }

  function meleeRow(w) {
    const effectivePts = getWeaponPts(w)
    return `<tr>
      <td class="arsenal-weapon-name">${w.name}</td>
      <td class="arsenal-slots">—</td>
      <td class="arsenal-type">NAHKAMPF</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${effectivePts}"
          data-id="${w.id}" data-default="${w.pts}"
          onchange="updateArsenalPts(this)"
          min="-10" max="20" step="1">
      </td>
      <td class="arsenal-firemode">—</td>
      ${ALL_AMMO_KEYS.map(() => '<td class="ammo-na">—</td>').join('')}
    </tr>`
  }

  function itemRow(i) {
    return `<tr>
      <td class="arsenal-weapon-name">${i.name}</td>
      <td class="arsenal-slots">—</td>
      <td class="arsenal-type">${i.category.toUpperCase()}</td>
      <td class="arsenal-pts-cell"><span class="arsenal-pts-static">—</span></td>
      <td class="arsenal-firemode">${i.required_setting ? '⚠ Pflicht' : 'Optional'}</td>
      ${ALL_AMMO_KEYS.map(() => '<td class="ammo-na">—</td>').join('')}
    </tr>`
  }

  const tableHtml = (title, rows) => `
    <div class="arsenal-section">
      <h3 class="arsenal-section-title">${title}</h3>
      <div class="arsenal-table-wrap">
        <table class="arsenal-table">
          <thead>
            <tr>
              <th class="col-name">WAFFE</th>
              <th class="col-slots">SLOTS</th>
              <th class="col-type">TYP</th>
              <th class="col-pts">BASIS PTS</th>
              <th class="col-mode">FEUERMOD.</th>
              ${ammoHeaders}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`

  container.innerHTML =
    tableHtml('PRIMÄRWAFFEN',  WEAPON_DATA.primaries.map(weaponRow).join('')) +
    tableHtml('SEKUNDÄRWAFFEN', WEAPON_DATA.secondaries.map(weaponRow).join('')) +
    tableHtml('NAHKAMPF',      WEAPON_DATA.melee.map(meleeRow).join('')) +
    tableHtml('ITEMS & TOOLS', WEAPON_DATA.items.map(itemRow).join(''))
}

async function updateArsenalPts(input) {
  const id = input.dataset.id
  const defaultPts = Number(input.dataset.default)
  const newPts = Number(input.value)

  if (newPts === defaultPts) {
    delete state.arsenalOverrides[id]
  } else {
    state.arsenalOverrides[id] = { pts: newPts }
  }

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
  const d = new Date(iso)
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function renderHistory() {
  const container = document.getElementById('history-list')
  if (state.history.length === 0) {
    container.innerHTML = `<div class="history-empty">Noch keine Läufe gespeichert.<br>Starte deinen ersten Hunt.</div>`
    return
  }

  const sorted = [...state.history].sort((a, b) => new Date(b.date) - new Date(a.date))
  container.innerHTML = sorted.map(run => {
    const totalKills  = run.rounds.reduce((s, r) => s + r.results.kills, 0)
    const totalDeaths = run.rounds.reduce((s, r) => s + r.results.deaths, 0)
    const extractions = run.rounds.filter(r => r.results.extracted).length
    const kd = totalDeaths > 0 ? (totalKills / totalDeaths).toFixed(2) : totalKills
    const sign = run.totalScore >= 0 ? '+' : ''

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

  document.getElementById('rd-title').textContent = 'LAUF DETAILS'
  document.getElementById('rd-subtitle').textContent = formatDate(run.date)

  const totalKills  = run.rounds.reduce((s, r) => s + r.results.kills, 0)
  const totalDeaths = run.rounds.reduce((s, r) => s + r.results.deaths, 0)
  const totalHS     = run.rounds.reduce((s, r) => s + r.results.headshots, 0)
  const kd = totalDeaths > 0 ? (totalKills / totalDeaths).toFixed(2) : totalKills

  const content = document.getElementById('run-detail-content')
  content.innerHTML = `
    <div class="run-detail-header-stats">
      <div class="rd-stat"><span class="rd-stat-val">${run.totalScore >= 0 ? '+' : ''}${run.totalScore}</span><span class="rd-stat-label">Score</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${run.rounds.length}</span><span class="rd-stat-label">Runden</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalKills}</span><span class="rd-stat-label">Kills</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalDeaths}</span><span class="rd-stat-label">Tode</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${kd}</span><span class="rd-stat-label">K/D</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${totalHS}</span><span class="rd-stat-label">Headshots</span></div>
    </div>
    ${run.rounds.map(round => renderRoundDetailCard(round)).join('')}
  `

  showView('run-detail')
}

function renderRoundDetailCard(round) {
  const scoreSign = round.totalScore >= 0 ? '+' : ''
  const amMods = WEAPON_DATA.ammoModifiers
  const l = round.loadout
  const r = round.results

  const primaryAmmoLabel  = l.primaryAmmo  ? (amMods[l.primaryAmmo]?.label  ?? l.primaryAmmo)  : ''
  const secAmmoLabel      = l.secondaryAmmo ? (amMods[l.secondaryAmmo]?.label ?? l.secondaryAmmo) : ''
  const secAmmo2Label     = l.secondaryAmmo2 ? ` + ${amMods[l.secondaryAmmo2]?.label ?? l.secondaryAmmo2}` : ''

  return `
    <div class="round-detail-card">
      <div class="round-detail-header">
        <span class="round-detail-num">RUNDE ${round.roundNumber}</span>
        <span class="round-detail-score">${scoreSign}${round.totalScore} PTS</span>
      </div>
      <div class="round-detail-body">
        <div class="rd-loadout-col">
          <span><strong>PRIMÄR</strong> ${l.primary?.name ?? '—'} · ${primaryAmmoLabel}</span>
          <span><strong>SEKUNDÄR</strong> ${l.secondary?.name ?? '—'} · ${secAmmoLabel}${secAmmo2Label}</span>
          ${l.melee ? `<span><strong>NAHKAMPF</strong> ${l.melee.name}</span>` : ''}
          ${l.items?.length > 0 ? `<span><strong>ITEMS</strong> ${l.items.map(i => i.name).join(', ')}</span>` : ''}
        </div>
        <div class="rd-results-col">
          <div class="rd-result-item"><span>Headshots</span><span>${r.headshots}</span></div>
          <div class="rd-result-item"><span>Kills</span><span>${r.kills}</span></div>
          <div class="rd-result-item"><span>Tode</span><span>${r.deaths}</span></div>
          <div class="rd-result-item"><span>Wiederbelebungen</span><span>${r.revives}</span></div>
          <div class="rd-result-item"><span>Extraktion</span><span class="${r.extracted ? 'text-good' : 'text-bad'}">${r.extracted ? 'JA' : 'NEIN'}</span></div>
          <div class="rd-result-item"><span>Bounties</span><span>${r.bounties}</span></div>
        </div>
      </div>
    </div>`
}

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS UI
// ═══════════════════════════════════════════════════════════════════════════

function applySettingsToUI() {
  document.getElementById('set-medkit').checked              = state.settings.medkitRequired
  document.getElementById('set-melee').checked               = state.settings.meleeRequired
  document.getElementById('set-choke').checked               = state.settings.chokeRequired
  document.getElementById('set-healsyringe').checked         = state.settings.healSyringeRequired
  document.getElementById('set-regenshot').checked           = state.settings.regenShotRequired
  document.getElementById('set-solo').checked                = state.settings.soloMode
  document.getElementById('set-quartermaster').checked       = state.settings.quartermasterEnabled
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

  const s = calcTotalStats()
  const qs = document.getElementById('home-quick-stats')
  if (state.history.length > 0) {
    const lastRun = [...state.history].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
    qs.innerHTML = `
      <div class="quick-stat-card"><span class="qs-val">${s.totalScore}</span><span class="qs-label">Total Score</span></div>
      <div class="quick-stat-card"><span class="qs-val">${state.history.length}</span><span class="qs-label">Läufe</span></div>
      <div class="quick-stat-card"><span class="qs-val">${lastRun.totalScore >= 0 ? '+' : ''}${lastRun.totalScore}</span><span class="qs-label">Letzter Lauf</span></div>
    `
  } else {
    qs.innerHTML = ''
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAME FLOW HANDLERS
// ═══════════════════════════════════════════════════════════════════════════

function handleRandomize() {
  if (!state.currentRun) {
    state.currentRun = {
      id: `run_${Date.now()}`,
      date: new Date().toISOString(),
      rounds: [],
      totalScore: 0,
      settings: { ...state.settings },
    }
  }

  const loadout = generateLoadout()
  const roundNum = state.currentRun.rounds.length + 1

  state.currentRoundData = {
    roundNumber: roundNum,
    loadout,
    results: { headshots: 0, kills: 0, deaths: 0, revives: 0, firstDeath: false, extracted: false, bounties: 0 },
  }

  document.getElementById('loadout-round-label').textContent = `Runde ${roundNum}`
  renderLoadout(loadout)
  showView('loadout')
}

function confirmLoadout() {
  if (!state.currentRoundData) return
  resetResultsForm()
  const roundNum = state.currentRoundData.roundNumber
  document.getElementById('results-round-label').textContent = `Runde ${roundNum}`

  const l = state.currentRoundData.loadout
  const amMods = WEAPON_DATA.ammoModifiers
  const secAmmo2 = l.secondaryAmmo2 ? ` + ${amMods[l.secondaryAmmo2]?.label ?? l.secondaryAmmo2}` : ''
  const summary = document.getElementById('results-loadout-summary')
  summary.innerHTML = `
    <span><span class="rls-label">PRIMÄR</span> <span class="rls-val">${l.primary.name}</span></span>
    <span><span class="rls-label">SEKUNDÄR</span> <span class="rls-val">${l.secondary.name}${secAmmo2}</span></span>
    ${l.melee ? `<span><span class="rls-label">NAHKAMPF</span> <span class="rls-val">${l.melee.name}</span></span>` : ''}
  `

  updatePreviewScore()
  showView('results')
}

function resetResultsForm() {
  const res = { headshots: 0, kills: 0, deaths: 0, revives: 0, firstDeath: false, extracted: false, bounties: 0 }
  if (state.currentRoundData) state.currentRoundData.results = res

  ;['headshots','kills','deaths','revives','bounties'].forEach(k => {
    document.getElementById(`res-${k}`).textContent = '0'
  })
  document.getElementById('res-first-death').checked = false
  document.getElementById('res-extracted').checked   = false
}

function adjustResult(key, delta) {
  if (!state.currentRoundData) return
  const cur = state.currentRoundData.results[key]
  const next = Math.max(0, cur + delta)
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
  const { total, breakdown } = calcRoundScore(loadout, results)

  const round = {
    id: `round_${Date.now()}`,
    roundNumber,
    loadout,
    results,
    totalScore: total,
    loadoutScore: calcLoadoutScore(loadout),
    breakdown,
  }

  state.currentRun.rounds.push(round)
  state.currentRun.totalScore += total

  const scoreEl = document.getElementById('rc-round-score')
  scoreEl.textContent = (total >= 0 ? '+' : '') + total
  scoreEl.className = 'round-score-value' + (total < 0 ? ' negative' : '')

  document.getElementById('rc-run-total').textContent =
    (state.currentRun.totalScore >= 0 ? '+' : '') + state.currentRun.totalScore

  const breakdownEl = document.getElementById('rc-breakdown')
  breakdownEl.innerHTML = breakdown.map(b => {
    const sign = b.pts >= 0 ? '+' : ''
    return `<span class="breakdown-item ${b.type}">${b.label}: ${sign}${b.pts}</span>`
  }).join('')

  showView('round-complete')
}

function handleNextRound() { handleRandomize() }

async function handleEndRun() {
  if (!state.currentRun) {
    showView('home')
    return
  }
  if (state.currentRun.rounds.length === 0) {
    state.currentRun = null
    showView('home')
    return
  }

  const run = { ...state.currentRun, status: 'completed' }
  state.history.push(run)
  state.currentRun = null
  state.currentRoundData = null

  await saveHistory()
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
      state.history = []
      state.currentRun = null
      state.currentRoundData = null
      await saveHistory()
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

  const loadStart = Date.now()
  await loadAll()
  const elapsed = Date.now() - loadStart
  const wait = Math.max(0, 3600 - elapsed)

  await new Promise(resolve => setTimeout(resolve, wait))

  applySettingsToUI()
  showView('home')
}

init()
