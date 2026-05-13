'use strict'

// ═══════════════════════════════════════════════════════════════════════════
// AMMO FACTORY
// ═══════════════════════════════════════════════════════════════════════════

const A = {
  // Standard (base = weapon.pts; std = 0 modifier)
  std:      (p=0)   => ({ key:'standard',     label:'Standard',        pts:p }),
  // Rifle modifiers
  spit:     (p=0)   => ({ key:'spitzer',      label:'Spitzer',         pts:p }),
  fmj:      (p=0)   => ({ key:'fmj',          label:'FMJ',             pts:p }),
  dum:      (p=0)   => ({ key:'dumdum',        label:'Dumdum',          pts:p }),
  hv:       (p=0)   => ({ key:'hv',           label:'High Velocity',   pts:p }),
  poi:      (p=0)   => ({ key:'poison',        label:'Poison',          pts:p }),
  exp:      (p=0)   => ({ key:'explosive',     label:'Explosive',       pts:p }),
  inc:      (p=0)   => ({ key:'incendiary',    label:'Incendiary',      pts:p }),
  slug:     (p=0)   => ({ key:'slug',          label:'Slug',            pts:p }),
  sub:      (p=0)   => ({ key:'subsonic',      label:'Subsonic',        pts:p }),
  fle:      (p=0)   => ({ key:'flechette',     label:'Flechette',       pts:p }),
  star:     (p=0)   => ({ key:'starshell',     label:'Starshell',       pts:p }),
  pen:      (p=0)   => ({ key:'pennyshot',     label:'Penny Shot',      pts:p }),
  db:       (p=0)   => ({ key:'dragonsbreath', label:'Dragonsbreath',   pts:p }),
  // Crossbow bolts
  bolt:     (p=0)   => ({ key:'bolt',          label:'Bolt',            pts:p }),
  ebolt:    (p=0)   => ({ key:'expbolt',       label:'Exp. Bolt',       pts:p }),
  sbolt:    (p=0)   => ({ key:'shotbolt',      label:'Shot Bolt',       pts:p }),
  stbolt:   (p=0)   => ({ key:'steelbolt',     label:'Steel Bolt',      pts:p }),
  // Compact crossbow bolts
  cbolt:    (p=0)   => ({ key:'cbolt',         label:'Comp. Bolt',      pts:p }),
  cebolt:   (p=0)   => ({ key:'cexpbolt',      label:'C.Exp. Bolt',     pts:p }),
  cibolt:   (p=0)   => ({ key:'cibolt',        label:'C.Inc. Bolt',     pts:p }),
  chkblt:   (p=0)   => ({ key:'chokebolt',     label:'Choke Bolt',      pts:p }),
  poicbt:   (p=0)   => ({ key:'poisoncbolt',   label:'Poison C.Bolt',   pts:p }),
  dbcbt:    (p=0)   => ({ key:'dbcbolt',       label:'DB C.Bolt',       pts:p }),
  chaosblt: (p=0)   => ({ key:'chaosbolt',     label:'Chaos C.Bolt',    pts:p }),
  // Arrows
  arr:      (p=0)   => ({ key:'arrow',         label:'Arrow',           pts:p }),
  parr:     (p=0)   => ({ key:'poisonarr',     label:'Poison Arrow',    pts:p }),
  farr:     (p=0)   => ({ key:'fragarr',       label:'Frag Arrow',      pts:p }),
  concarr:  (p=0)   => ({ key:'concarr',       label:'Conc. Arrow',     pts:p }),
  // Lance / special charges
  lance:    (p=0)   => ({ key:'lance',         label:'Lance Bolt',      pts:p }),
  harp:     (p=0)   => ({ key:'harpoon',       label:'Harpoon',         pts:p }),
  stball:   (p=0)   => ({ key:'steelball',     label:'Steel Ball',      pts:p }),
  wfrag:    (p=0)   => ({ key:'waxedfrag',     label:'Waxed Frag',      pts:p }),
  dbch:     (p=0)   => ({ key:'dbcharge',      label:'DB Charge',       pts:p }),
  // Unique
  dolch:    (p=0)   => ({ key:'dolchammo',     label:'Dolch Ammo',      pts:p }),
  nitro:    (p=0)   => ({ key:'nitro',         label:'Nitro Ammo',      pts:p }),
  shrdammo: (p=0)   => ({ key:'shredderammo',  label:'Shredder Ammo',   pts:p }),
}

// ── Scarce ammo helper ─────────────────────────────────────────────────────
function sc(entry) { return { ...entry, scarce: true } }

// ── Ammo preset functions ──────────────────────────────────────────────────
// Standard = base (pts:0 modifier). weapon.pts = Standard kill value.
// All other ammo pts = modifier relative to Standard per kill.
const LA = {
  SPARKS:      () => [A.std(), A.poi(10),  A.inc(5),   A.fmj(15),  A.sub(50)],
  SPARKS_SN:   () => [A.std(), A.poi(15),  A.inc(10),  A.fmj(15),  A.sub(50)],
  SPARKS_P:    () => [A.std(), A.poi(10),  A.inc(5),   A.fmj(15),  A.sub(50)],
  MARTINI:     () => [A.std(), A.fmj(0),   A.exp(20),  A.hv(-5),   A.inc(5)],
  MARTINI_MK:  () => [A.std(), A.fmj(5),   A.exp(20),  A.hv(-10),  A.inc(5)],
  MOSIN:       () => [A.std(), A.spit(-15),A.inc(5)],
  MOSIN_SN:    () => [A.std(), A.spit(-25),A.inc(5)],
  MOSIN_AV:    () => [A.std(), A.spit(25), A.inc(5)],
  KRAG:        () => [A.std(), A.fmj(5),   A.inc(5),   A.sub(50)],
  LEBEL:       () => [A.std(), A.spit(-15),A.inc(5)],
  LEBEL_SN:    () => [A.std(), A.spit(-25),A.inc(5)],
  MAKO:        () => [A.std(), A.fmj(5),   A.exp(10)],
  BERTHIER:    () => [A.std(), A.inc(5),   A.spit(-5)],
  BERTHIER_MK: () => [A.std(), A.inc(5),   A.spit(-10)],
  OBREZ:       () => [A.std(), A.spit(-5), A.inc(5)],
  HAYMAKER:    () => [A.std(), A.poi(20),  A.fmj(0)],
  UPPERCUT:    () => [A.std(), A.fmj(0),   A.inc(5),   A.exp(50)],
}
const MA = {
  SPR66:       () => [A.std(), sc(A.dum(-20)),A.hv(-5),   A.poi(15),  A.exp(25)],
  SPR66_MK:    () => [A.std(), sc(A.dum(-10)),A.hv(-10),  A.poi(15),  A.exp(25)],
  CENT:        () => [A.std(), A.hv(-5),   sc(A.dum(-20)),A.poi(10),  A.fmj(0),   A.sub(50)],
  CENT_SN:     () => [A.std(), A.hv(-10),  sc(A.dum(-15)),A.poi(10),  A.fmj(10),  A.sub(50)],
  C1865:       () => [A.std(), A.fmj(0),   A.sub(50)],
  C1865_SL:    () => [A.std(), A.fmj(10),  A.sub(50)],
  VETT:        () => [A.std(), A.hv(-5),   A.fmj(0),   A.sub(50),  A.inc(5)],
  VETT_MK:     () => [A.std(), A.hv(-10),  A.fmj(0),   A.sub(50),  A.inc(5)],
  VETT_CYC:    () => [A.std(), A.hv(-5),   A.fmj(-10), A.sub(50),  A.inc(5)],
  DRILL:       () => [A.std(), A.dum(-15), A.hv(-5),   A.fmj(5)],
  DRILLS:      () => [A.std(), A.dum(-15), A.hv(-5),   A.fmj(5)],
  MAYNARD:     () => [A.std(), A.hv(-5),   A.sub(50),  sc(A.dum(-5))],
  MAYNARD_SL:  () => [A.std(), A.hv(-15),  A.sub(50),  sc(A.dum(-10))],
  WILDLAND:    () => [A.std(), A.hv(-5),   sc(A.dum(-20)),A.poi(10),  A.fmj(0),   A.sub(50)],
  SCOTTFP:     () => [A.std(), A.dum(-10), A.fmj(0),   A.hv(-5),   A.inc(5)],
  CENTS:       () => [A.std(), A.hv(-5),   sc(A.dum(-20)),A.poi(10),  A.fmj(0),   A.sub(50)],
  CENTS_PM:    () => [A.std(), A.hv(-10),  sc(A.dum(0)), A.poi(10),  A.fmj(0),   A.sub(50)],
  SPR66S:      () => [A.std(), sc(A.dum(-20)),A.hv(-5),   A.poi(15),  A.exp(25)],
  PAX:         () => [A.std(), A.dum(-10), A.fmj(-5),  A.hv(-5),   A.poi(20), A.inc(5)],
  SCOTTF:      () => [A.std(), A.dum(-10), A.fmj(0),   A.hv(-5),   A.inc(5)],
}
const SA = {
  MARATHON:    () => [A.std(), A.fmj(-5),  A.hv(-5),   A.poi(20),  A.inc(5)],
  INF73:       () => [A.std(), A.fmj(-5),  A.hv(-5),   A.poi(20),  A.sub(50), A.inc(5)],
  INF73_SN:    () => [A.std(), A.fmj(-5),  A.hv(-10),  A.poi(20),  A.sub(50), A.inc(5)],
  RANGER:      () => [A.std(), A.fmj(-5),  A.hv(-5),   A.poi(20),  A.sub(50), A.inc(5)],
  LEMAT_C:     () => [A.std(), A.fmj(0),   A.inc(0)],
  OFF_C:       () => [A.std(), A.hv(-5),   A.poi(5),   sc(A.dum(-10))],
  FRONT73:     () => [A.std(), A.fmj(-5),  A.hv(-5),   A.poi(20),  A.sub(50), A.inc(5)],
  BORNHEIM:    () => [A.std(), A.hv(-10),  A.inc(15),  A.sub(50)],
  NAGANT:      () => [A.std(), A.hv(-5),   A.dum(-10), A.poi(20),  A.sub(50)],
  VANDAL:      () => [A.std(), A.fmj(-5),  A.hv(-5),   A.poi(20),  A.sub(50), A.inc(5)],
  CONV:        () => [A.std(), A.dum(-10), A.fmj(-5)],
  LEMAT:       () => [A.std(), A.fmj(0),   A.inc(0)],
  NEW_ARMY:    () => [A.std(), A.fmj(-5),  A.dum(-10)],
  OFFICER:     () => [A.std(), A.hv(-5),   A.poi(5),   sc(A.dum(-10))],
  SH2ND:       () => [A.std(), A.db(75),   A.slug(10), A.star(500)],
  DRILL_SCHROT:() => [A.std(), A.pen(10),  A.slug(10), A.fle(25)],
  DOLCH:       () => [A.dolch(0), sc(A.fmj(-5)), sc(A.dum(-10))],
  DOLCH_PR:    () => [A.dolch(0), sc(A.fmj(-5)), sc(A.dum(0))],
}
const SH = {
  AUTO5:       () => [A.std(), A.slug(5),  A.pen(10),  A.fle(10)],
  HOME78:      () => [A.std(), A.slug(15), A.pen(20),  A.fle(20),  A.db(75)],
  RIVAL:       () => [A.std(), A.slug(15), A.pen(20),  A.fle(20),  A.db(75)],
  ROMERO:      () => [A.std(), A.slug(15), A.pen(20),  A.star(500),A.db(75)],
  SLATE:       () => [A.std(), A.slug(15), A.pen(20)],
  SPECTER:     () => [A.std(), A.slug(15), A.pen(20),  A.fle(20),  A.db(75)],
  TERMINUS:    () => [A.std(), A.slug(15), A.pen(20),  A.fle(20),  A.db(75)],
}
const SP = {
  NITRO:   () => [A.nitro(0), A.shrdammo(5), A.exp(100)],
  CROSS:   () => [A.bolt(0),  sc(A.ebolt(30)), A.sbolt(15), A.stbolt(-20)],
  CHUKONU: () => [A.cbolt(100), A.cebolt(30), A.cibolt(75), A.chkblt(20)],
  BOW:     () => [A.arr(0),  A.parr(20),   sc(A.farr(-5)), A.concarr(15)],
  LANCE:   () => [A.lance(200), A.harp(40), A.stball(10), A.wfrag(5), A.dbch(150)],
  HBOW:    () => [A.cbolt(100), A.chkblt(500), A.poicbt(20), A.dbcbt(50), A.chaosblt(500)],
}

// ── Weapon factory ─────────────────────────────────────────────────────────
const W = (id, name, slots, ammoType, ammoFn, fireMode, cat, flags) => ({
  id, name, slots, ammoType, pts: 100,
  ammo: ammoFn(), fireMode: fireMode || '—', category: cat || 'rifle', ...(flags || {})
})

// ═══════════════════════════════════════════════════════════════════════════
// WEAPON DATABASE  (order matches user's list)
// ═══════════════════════════════════════════════════════════════════════════

const LONG3 = [
  W('sparks_lrr',           'Sparks LRR',                   3,'long', LA.SPARKS,    'Einzelschuss', 'rifle', {dualMain:true}),
  W('sparks_lrr_sniper',    'Sparks LRR Sniper',            3,'long', LA.SPARKS_SN, 'Einzelschuss', 'rifle', {dualMain:true}),
  W('sparks_lrr_silencer',  'Sparks LRR Silencer',          3,'long', LA.SPARKS,    'Einzelschuss', 'rifle', {dualMain:true}),
  W('martini_ic1',          'Martini Henry IC1',            3,'long', LA.MARTINI,   'Einzelschuss', 'rifle', {dualMain:true}),
  W('martini_ironside',     'Martini Henry IC1 Ironside',   3,'long', LA.MARTINI,   'Einzelschuss', 'rifle', {pts:120}),
  W('martini_deadeye',      'Martini Henry IC1 Deadeye',    3,'long', LA.MARTINI_MK,'Einzelschuss', 'rifle', {dualMain:true}),
  W('martini_marksman',     'Martini Henry IC1 Marksman',   3,'long', LA.MARTINI_MK,'Einzelschuss', 'rifle', {pts:105, dualMain:true}),
  W('martini_riposte',      'Martini Henry IC1 Riposte',    3,'long', LA.MARTINI,   'Einzelschuss', 'rifle', {dualMain:true}),
  W('mosin_m1891',          'Mosin-Nagant M1891',           3,'long', LA.MOSIN,     'Repetier',     'rifle', {pts:90}),
  W('mosin_m1891_bay',      'Mosin-Nagant M1891 Bayonet',   3,'long', LA.MOSIN,     'Repetier',     'rifle', {pts:90}),
  W('mosin_m1891_sniper',   'Mosin-Nagant M1891 Sniper',    3,'long', LA.MOSIN_SN,  'Repetier',     'rifle', {pts:90}),
  W('mosin_m1891_avtom',    'Mosin-Nagant M1891 Avtomat',   3,'long', LA.MOSIN_AV,  'Vollautomat',  'rifle', {pts:85}),
  W('krag',                 'Springfield M1892 Krag',       3,'long', LA.KRAG,      'Repetier',     'rifle', {pts:90}),
  W('krag_bayonet',         'Springfield M1892 Krag Bay.',  3,'long', LA.KRAG,      'Repetier',     'rifle', {pts:90}),
  W('krag_sniper',          'Springfield M1892 Krag Sniper',3,'long', LA.KRAG,      'Repetier',     'rifle', {pts:90}),
  W('krag_silencer',        'Springfield M1892 Krag Sil.',  3,'long', LA.KRAG,      'Repetier',     'rifle', {pts:90}),
  W('lebel_1886',           'Lebel 1886',                   3,'long', LA.LEBEL,     'Repetier',     'rifle', {pts:90}),
  W('lebel_talon',          'Lebel 1886 Talon',             3,'long', LA.LEBEL,     'Repetier',     'rifle', {pts:90}),
  W('lebel_marksman',       'Lebel 1886 Marksman',          3,'long', LA.LEBEL_SN,  'Repetier',     'rifle', {pts:90}),
  W('lebel_aperture',       'Lebel 1886 Aperture',          3,'long', LA.LEBEL,     'Repetier',     'rifle', {pts:90}),
  W('mako_1895',            'Mako 1895',                    3,'long', LA.MAKO,      'Hebel-Repetier'),
  W('mako_aperture',        'Mako 1895 Aperture',           3,'long', LA.MAKO,      'Hebel-Repetier'),
  W('mako_claw',            'Mako 1895 Claw',               3,'long', LA.MAKO,      'Hebel-Repetier'),
  W('berthier_1892',        'Berthier Mle 1892',            3,'long', LA.BERTHIER,  'Repetier', 'rifle', {dualMain:true}),
  W('berthier_deadeye',     'Berthier Mle 1892 Deadeye',    3,'long', LA.BERTHIER,  'Repetier', 'rifle', {dualMain:true}),
  W('berthier_marksman',    'Berthier Mle 1892 Marksman',   3,'long', LA.BERTHIER_MK,'Repetier','rifle', {dualMain:true}),
  W('berthier_riposte',     'Berthier Mle 1892 Riposte',    3,'long', LA.BERTHIER,  'Repetier', 'rifle', {dualMain:true}),
  W('mosin_obrez_match',    'Mosin Obrez Match',            3,'long', LA.OBREZ,     'Repetier',     'rifle', {pts:120}),
  W('mosin_obrez_sharpeye', 'Mosin Obrez Sharpeye',         3,'long', LA.OBREZ,     'Repetier',     'rifle', {pts:120}),
]

const MED3 = [
  W('c1865',                '1865 Carbine',                 3,'medium',MA.C1865,    'Repetier'),
  W('c1865_silencer',       '1865 Carbine Silencer',        3,'medium',MA.C1865_SL, 'Repetier'),
  W('c1865_aperture',       '1865 Carbine Aperture',        3,'medium',MA.C1865,    'Repetier'),
  W('centennial',           'Centennial',                   3,'medium',MA.CENT,     'Hebel-Repetier', 'rifle', {pts:95}),
  W('centennial_sniper',    'Centennial Sniper',            3,'medium',MA.CENT_SN,  'Hebel-Repetier', 'rifle', {pts:95}),
  W('centennial_trauma',    'Centennial Trauma',            3,'medium',MA.CENT,     'Hebel-Repetier', 'rifle', {pts:95}),
  W('drilling',             'Drilling',                     3,'medium',MA.DRILL,    'Doppellauf', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.DRILL_SCHROT()}),
  W('maynard_sniper',       'Maynard Sniper',               3,'medium',MA.MAYNARD,  'Einzelschuss', 'rifle', {pts:100, dualMain:true}),
  W('maynard_sniper_sil',   'Maynard Sniper Silencer',      3,'medium',MA.MAYNARD_SL,'Einzelschuss', 'rifle', {pts:75, dualMain:true}),
  W('springfield_1866',     'Springfield 1866',             3,'medium',MA.SPR66,    'Einzelschuss', 'rifle', {dualMain:true}),
  W('springfield_1866_mark','Springfield 1866 Marksman',    3,'medium',MA.SPR66_MK, 'Einzelschuss', 'rifle', {dualMain:true}),
  W('springfield_1866_bay', 'Springfield 1866 Bayonet',     3,'medium',MA.SPR66,    'Einzelschuss', 'rifle', {dualMain:true}),
  W('vetterli_71',          'Vetterli 71',                  3,'medium',MA.VETT,     'Repetier'),
  W('vetterli_71_bay',      'Vetterli 71 Bayonet',          3,'medium',MA.VETT,     'Repetier'),
  W('vetterli_71_deadeye',  'Vetterli 71 Deadeye',          3,'medium',MA.VETT,     'Repetier'),
  W('vetterli_71_marksman', 'Vetterli 71 Marksman',         3,'medium',MA.VETT_MK,  'Repetier'),
  W('vetterli_71_silencer', 'Vetterli 71 Silencer',         3,'medium',MA.VETT,     'Repetier'),
  W('vetterli_71_cyclone',  'Vetterli 71 Cyclone',          3,'medium',MA.VETT_CYC, 'Halbautomatik','rifle', {pts:85}),
  W('wildland',             'Wildland',                     3,'medium',MA.WILDLAND, 'Hebel-Repetier','rifle', {pts:90, optional:'includeWildlandHomestead'}),
]

const SMALL3 = [
  W('marathon',             'Marathon',                     3,'small', SA.MARATHON, 'Pump-Action',  'rifle', {pts:95}),
  W('marathon_swift',       'Marathon Swift',               3,'small', SA.MARATHON, 'Pump-Action',  'rifle', {pts:95}),
  W('infantry_73l',         'Infantry 73L',                 3,'small', SA.INF73,    'Hebel-Repetier'),
  W('infantry_73l_bay',     'Infantry 73L Bayonet',         3,'small', SA.INF73,    'Hebel-Repetier'),
  W('infantry_73l_sniper',  'Infantry 73L Sniper',          3,'small', SA.INF73_SN, 'Hebel-Repetier'),
  W('ranger_73',            'Ranger 73',                    3,'small', SA.RANGER,   'Hebel-Repetier'),
  W('ranger_73_aperture',   'Ranger 73 Aperture',           3,'small', SA.RANGER,   'Hebel-Repetier'),
  W('ranger_73_talon',      'Ranger 73 Talon',              3,'small', SA.RANGER,   'Hebel-Repetier'),
  W('ranger_73_swift',      'Ranger 73 Swift',              3,'small', SA.RANGER,   'Hebel-Repetier'),
  W('lemat_carbine',        'LeMat Carbine',                3,'small', SA.LEMAT_C,  'Revolver', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('lemat_carbine_mark',   'LeMat Carbine Marksman',       3,'small', SA.LEMAT_C,  'Revolver', 'rifle',
    {pts:110, dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('officer_carbine',      'Officer Carbine',              3,'small', SA.OFF_C,    'Revolver', 'pistol', {pts:75}),
  W('officer_carbine_de',   'Officer Carbine Deadeye',      3,'small', SA.OFF_C,    'Revolver', 'pistol', {pts:85}),
  W('frontier_73c',         'Frontier 73C',                 3,'small', SA.FRONT73,  'Hebel-Repetier'),
  W('frontier_73c_sil',     'Frontier 73C Silencer',        3,'small', SA.FRONT73,  'Hebel-Repetier'),
  W('frontier_73c_mark',    'Frontier 73C Marksman',        3,'small', SA.FRONT73,  'Hebel-Repetier'),
]

const LONG2 = [
  W('haymaker',             'Haymaker',                    2,'long', LA.HAYMAKER, 'Revolver',    'pistol',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('mosin_obrez',          'Mosin Obrez',                 2,'long', LA.OBREZ,    'Repetier'),
  W('mosin_obrez_mace',     'Mosin Obrez Mace',            2,'long', LA.OBREZ,    'Repetier'),
  W('mosin_obrez_ext',      'Mosin Obrez Extended',        2,'long', LA.OBREZ,    'Repetier'),
  W('uppercut_precision',   'Uppercut Precision',          2,'long', LA.UPPERCUT, 'Revolver',   'pistol'),
  W('uppercut_deadeye',     'Uppercut Deadeye',            2,'long', LA.UPPERCUT, 'Revolver',   'pistol'),
]

const MED2 = [
  W('scottfield_prec',      'Scottfield Precision',        2,'medium',MA.SCOTTFP, 'Revolver',   'pistol'),
  W('drilling_shorty',      'Drilling Shorty',             2,'medium',MA.DRILLS,  'Doppellauf', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.DRILL_SCHROT()}),
  W('drilling_hatchet',     'Drilling Hatchet',            2,'medium',MA.DRILLS,  'Doppellauf', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.DRILL_SCHROT()}),
  W('springfield_1866_sh',  'Springfield 1866 Shorty',     2,'medium',MA.SPR66S,  'Einzelschuss', 'rifle', {dualMain:true}),
  W('springfield_1866_str', 'Springfield 1866 Striker',    2,'medium',MA.SPR66S,  'Einzelschuss', 'rifle', {dualMain:true}),
  W('springfield_1866_bull','Springfield 1866 Bullseye',   2,'medium',MA.SPR66S,  'Einzelschuss', 'rifle', {dualMain:true}),
  W('centennial_shorty',    'Centennial Shorty',           2,'medium',MA.CENTS,   'Hebel-Repetier'),
  W('centennial_shorty_sil','Centennial Shorty Silencer',  2,'medium',MA.CENTS,   'Hebel-Repetier'),
  W('centennial_shorty_pm', 'Centennial Shorty Pointman',  2,'medium',MA.CENTS_PM,'Hebel-Repetier'),
]

const SMALL2 = [
  W('bornheim_match',       'Bornheim No. 3 Match',        2,'small', SA.BORNHEIM,'Pistole',    'pistol'),
  W('nagant_prec',          'Nagant M1895 Precision',      2,'small', SA.NAGANT,  'Revolver',   'pistol'),
  W('nagant_deadeye',       'Nagant M1895 Deadeye',        2,'small', SA.NAGANT,  'Revolver',   'pistol'),
  W('vandal_73c',           'Vandal 73C',                  2,'small', SA.VANDAL,  'Hebel-Repetier'),
  W('vandal_73c_striker',   'Vandal 73C Striker',          2,'small', SA.VANDAL,  'Hebel-Repetier'),
  W('vandal_73c_bullseye',  'Vandal 73C Bullseye',         2,'small', SA.VANDAL,  'Hebel-Repetier'),
]

const LONG1 = [
  W('sparks_pistol',        'Sparks Pistol',               1,'long', LA.SPARKS_P, 'Einzelschuss','pistol', {dualMain:true}),
  W('sparks_pistol_sil',    'Sparks Pistol Silencer',      1,'long', LA.SPARKS_P, 'Einzelschuss','pistol', {dualMain:true}),
  W('uppercut',             'Uppercut',                    1,'long', LA.UPPERCUT, 'Revolver',    'pistol'),
]

const MED1 = [
  W('pax',                  'Pax',                         1,'medium',MA.PAX,     'Revolver','pistol'),
  W('pax_claw',             'Pax Claw',                    1,'medium',MA.PAX,     'Revolver','pistol'),
  W('pax_trueshot',         'Pax Trueshot',                1,'medium',MA.PAX,     'Revolver','pistol'),
  W('scottfield',           'Scottfield',                  1,'medium',MA.SCOTTF,  'Revolver','pistol'),
  W('scottfield_brawler',   'Scottfield Brawler',          1,'medium',MA.SCOTTF,  'Revolver','pistol'),
  W('scottfield_spitfire',  'Scottfield Spitfire',         1,'medium',MA.SCOTTF,  'Revolver','pistol'),
  W('scottfield_swift',     'Scottfield Swift',            1,'medium',MA.SCOTTF,  'Revolver','pistol'),
]

const SMALL1 = [
  W('bornheim_no3',         'Bornheim No. 3',              1,'small', SA.BORNHEIM,'Pistole',    'pistol'),
  W('bornheim_no3_sil',     'Bornheim No. 3 Silencer',     1,'small', SA.BORNHEIM,'Pistole',    'pistol'),
  W('bornheim_no3_ext',     'Bornheim No. 3 Extended',     1,'small', SA.BORNHEIM,'Pistole',    'pistol'),
  W('conversion',           'Conversion',                  1,'small', SA.CONV,    'Revolver',   'pistol'),
  W('conversion_chain',     'Conversion Chain Pistol',     1,'small', SA.CONV,    'Revolver',   'pistol'),
  W('lemat',                'LeMat',                       1,'small', SA.LEMAT,   'Revolver',   'pistol',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('nagant_m1895',         'Nagant M1895',                1,'small', SA.NAGANT,  'Revolver',   'pistol'),
  W('nagant_m1895_sil',     'Nagant M1895 Silencer',       1,'small', SA.NAGANT,  'Revolver',   'pistol'),
  W('new_army',             'New Army',                    1,'small', SA.NEW_ARMY, 'Revolver',  'pistol', {pts:95}),
  W('new_army_swift',       'New Army Swift',              1,'small', SA.NEW_ARMY, 'Revolver',  'pistol', {pts:95}),
  W('officer',              'Officer',                     1,'small', SA.OFFICER,  'Revolver',  'pistol', {pts:90}),
  W('officer_brawler',      'Officer Brawler',             1,'small', SA.OFFICER,  'Revolver',  'pistol', {pts:90}),
]

const SHOTGUNS = [
  W('auto_5',               'Auto 5',                      3,'medium',SH.AUTO5,   'Halbautomatik','shotgun'),
  W('auto4_shorty',         'Auto-4 Shorty',               2,'medium',SH.AUTO5,   'Halbautomatik','shotgun'),
  W('homestead_78',         'Homestead 78',                3,'medium',SH.HOME78,  'Doppellauf',  'shotgun', {optional:'includeWildlandHomestead'}),
  W('rival_78',             'Rival 78',                    3,'medium',SH.RIVAL,   'Doppellauf',  'shotgun'),
  W('rival_78_shorty',      'Rival 78 Shorty',             2,'medium',SH.RIVAL,   'Doppellauf',  'shotgun'),
  W('rival_78_trauma',      'Rival 78 Trauma',             3,'medium',SH.RIVAL,   'Doppellauf',  'shotgun'),
  W('rival_78_mace',        'Rival 78 Mace',               2,'medium',SH.RIVAL,   'Doppellauf',  'shotgun'),
  W('romero_77',            'Romero 77',                   3,'medium',SH.ROMERO,  'Einzelschuss','shotgun', {dualMain:true}),
  W('romero_77_shorty',     'Romero 77 Shorty',            2,'medium',SH.ROMERO,  'Einzelschuss','shotgun', {dualMain:true}),
  W('romero_77_talon',      'Romero 77 Talon',             3,'medium',SH.ROMERO,  'Einzelschuss','shotgun', {dualMain:true}),
  W('romero_77_hatchet',    'Romero 77 Hatchet',           2,'medium',SH.ROMERO,  'Einzelschuss','shotgun', {dualMain:true}),
  W('romero_77_alamo',      'Romero 77 Alamo',             3,'medium',
    () => [A.std(), A.slug(15), A.pen(20), A.star(1000), A.db(75)],
    'Einzelschuss','shotgun', {pts:110}),
  W('slate',                'Slate',                       3,'medium',SH.SLATE,   'Pump-Action', 'shotgun'),
  W('slate_riposte',        'Slate Riposte',               3,'medium',SH.SLATE,   'Pump-Action', 'shotgun'),
  W('specter_1882',         'Specter 1882',                3,'medium',SH.SPECTER, 'Pump-Action', 'shotgun'),
  W('specter_1882_shorty',  'Specter 1882 Shorty',         2,'medium',SH.SPECTER, 'Pump-Action', 'shotgun'),
  W('specter_1882_bay',     'Specter 1882 Bayonet',        3,'medium',SH.SPECTER, 'Pump-Action', 'shotgun'),
  W('terminus',             'Terminus',                    3,'medium',SH.TERMINUS,'Hebel-Repetier','shotgun'),
  W('terminus_shorty',      'Terminus Shorty',             2,'medium',SH.TERMINUS,'Hebel-Repetier','shotgun'),
]

const SPECIAL = [
  W('bomb_lance',           'Bomb Lance',                  3,'special',SP.LANCE,  'Einzelschuss','special', {pts:100, dualMain:true}),
  W('bomb_launcher',        'Bomb Launcher',               2,'special',SP.LANCE,  'Einzelschuss','special', {pts:100, dualMain:true}),
  W('chu_ko_nu',            'Chu Ko Nu',                   2,'special',SP.CHUKONU,'Halbautomatik','special', {pts:150}),
  W('crossbow',             'Crossbow',                    3,'special',SP.CROSS,  'Einzelschuss','special', {dualMain:true}),
  W('crossbow_deadeye',     'Crossbow Deadeye',            3,'special',SP.CROSS,  'Einzelschuss','special', {dualMain:true}),
  W('dolch_96',             'Dolch 96',                    1,'special',SA.DOLCH,  'Pistole',     'pistol', {pts:75}),
  W('dolch_96_claw',        'Dolch 96 Claw',               1,'special',SA.DOLCH,  'Pistole',     'pistol', {pts:75}),
  W('dolch_96_bullseye',    'Dolch 96 Bullseye',           1,'special',SA.DOLCH,  'Pistole',     'pistol', {pts:85}),
  W('dolch_96_precision',   'Dolch 96 Precision',          2,'special',SA.DOLCH_PR,'Pistole',    'pistol', {pts:85}),
  W('handcrossbow',         'Handcrossbow',                1,'special',SP.HBOW,   'Einzelschuss','special', {pts:150, dualMain:true}),
  W('hunting_bow',          'Hunting Bow',                 2,'special',SP.BOW,    'Einzelschuss','special', {dualMain:true}),
  W('nitro_express',        'Nitro Express',               3,'special',SP.NITRO,  'Doppellauf',  'special'),
]

const EVENT = [
  W('shredder',    'Shredder',    3,'special',() => [A.std()], 'Halbautomatik','special', {event:true, optional:'includeShredder'}),
  W('flame_rifle', 'Flame Rifle', 2,'special',() => [A.std()], 'Vollautomat',  'special', {event:true, optional:'includeFlameRifle'}),
]

const SLOTTED_MELEE = [
  { id:'baseball_bat',    name:'Baseball Bat',    category:'slotMelee', slots:1, pts:100, ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
  { id:'cavalry_saber',   name:'Cavalry Saber',   category:'slotMelee', slots:1, pts:100, ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
  { id:'combat_axe',      name:'Combat Axe',      category:'slotMelee', slots:1, pts:130, ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
  { id:'katana',          name:'Katana',           category:'slotMelee', slots:1, pts:80,  ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
  { id:'machete',         name:'Machete',          category:'slotMelee', slots:1, pts:120, ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
  { id:'railroad_hammer', name:'Railroad Hammer',  category:'slotMelee', slots:1, pts:130, ammo:[], fireMode:'Nahkampf', ammoType:'melee' },
]

const TOOLS = [
  { id:'first_aid_kit',    name:'First Aid Kit',         required_setting:'medkitRequired',killPts:300 },
  { id:'blank_decoys',     name:'Blank Fire Decoys',     required_setting:null,           killPts:300 },
  { id:'decoys',           name:'Decoys',                required_setting:null,           killPts:300 },
  { id:'decoy_fuses',      name:'Decoy Fuses',           required_setting:null,           killPts:300 },
  { id:'flare_pistol',     name:'Flare Pistol',          required_setting:null,           killPts:200 },
  { id:'fusees',           name:'Fusees',                required_setting:null,           killPts:300 },
  { id:'dusters',          name:'Dusters',               required_setting:null,           killPts:150 },
  { id:'heavy_knife',      name:'Heavy Knife',           required_setting:null,           killPts:200 },
  { id:'knife',            name:'Knife',                 required_setting:null,           killPts:150 },
  { id:'knuckle_knife',    name:'Knuckle Knife',         required_setting:null,           killPts:200 },
  { id:'throwing_axes',    name:'Throwing Axes',         required_setting:null,           killPts:200 },
  { id:'throwing_knives',  name:'Throwing Knives',       required_setting:null,           killPts:200 },
  { id:'spear',            name:'Spear',                 required_setting:null,           killPts:200 },
  { id:'derringer',        name:'Derringer Pennyshot',   required_setting:null,           killPts:100 },
  { id:'quad_derringer',   name:'Quad Derringer',        required_setting:null,           killPts:300 },
  { id:'alert_trip_mines', name:'Alert Trip Mines',      required_setting:null,           killPts:150 },
  { id:'conc_trip_mines',  name:'Concertina Trip Mines', required_setting:null,           killPts:120 },
  { id:'poison_trip_mines',name:'Poison Trip Mines',     required_setting:null,           killPts:120 },
  { id:'bear_traps',       name:'Bear Traps',            required_setting:null,           killPts:120 },
  { id:'choke_bombs',      name:'Choke Bombs',           required_setting:'chokeRequired',killPts:300 },
  { id:'spyglass',         name:'Spyglass',              required_setting:null,           killPts:300 },
]

// Tarot cards (only in pool when setting enabled)
const TAROT_CARDS = [
  'The Chariot','The Devil','The Empress','The Fool','The Hanged Man',
  'The High Priestess','The Judgement','The Magician','The Pathfinder',
  'The Sun','The Tower','The World',
].map((name,i) => ({ id:`tarot_${i}`, name, required_setting:null, tarot:true, killPts:300 }))

const CONSUMABLES = [
  { id:'ammo_box',         name:'Ammo Box',              required_setting:null,                  killPts:300 },
  { id:'tool_box',         name:'Tool Box',              required_setting:null,                  killPts:300 },
  { id:'fire_bomb',        name:'Fire Bomb',             required_setting:null,                  killPts:300 },
  { id:'hellfire_bomb',    name:'Hellfire Bomb',         required_setting:null,                  killPts:300 },
  { id:'liquid_fire_bomb', name:'Liquid Fire Bomb',      required_setting:null,                  killPts:300 },
  { id:'dyn_stick',        name:'Dynamite Stick',        required_setting:null,                  killPts:150 },
  { id:'dyn_bundle',       name:'Dynamite Bundle',       required_setting:null,                  killPts:120 },
  { id:'waxed_dyn',        name:'Waxed Dynamite Stick',  required_setting:null,                  killPts:130 },
  { id:'big_dyn',          name:'Big Dynamite Bundle',   required_setting:null,                  killPts:100 },
  { id:'stick_bomb',       name:'Stick Bomb',            required_setting:null,                  killPts:170 },
  { id:'frag_bomb',        name:'Frag Bomb',             required_setting:null,                  killPts:100 },
  { id:'dark_dyn',         name:'Dark Dynamite Satchel', required_setting:null,                  killPts:120 },
  { id:'hive_bomb',        name:'Hive Bomb',             required_setting:null,                  killPts:150 },
  { id:'poison_bomb',      name:'Poison Bomb',           required_setting:null,                  killPts:150 },
  { id:'chaos_bomb',       name:'Chaos Bomb',            required_setting:null,                  killPts:300 },
  { id:'antidote_shot',    name:'Antidote Shot',         required_setting:null,                  killPts:300 },
  { id:'antidote_weak',    name:'Antidote Shot (weak)',  required_setting:null,                  killPts:300 },
  { id:'regen_shot',       name:'Regeneration Shot',     required_setting:null,                  killPts:300 },
  { id:'regen_weak',       name:'Regen Shot (weak)',     required_setting:null,                  killPts:300 },
  { id:'stamina_shot',     name:'Stamina Shot',          required_setting:null,                  killPts:300 },
  { id:'stamina_weak',     name:'Stamina Shot (weak)',   required_setting:null,                  killPts:300 },
  { id:'vitality_shot',    name:'Vitality Shot',         required_setting:null,                  killPts:300 },
  { id:'vitality_weak',    name:'Vitality Shot (weak)',  required_setting:null,                  killPts:300 },
  { id:'recovery_shot',    name:'Recovery Shot',         required_setting:null,                  killPts:300 },
  { id:'stalker_beetle',   name:'Stalker Beetle',        required_setting:null,                  killPts:200 },
  { id:'choke_beetle',     name:'Choke Beetle',          required_setting:null,                  killPts:250 },
  { id:'fire_beetle',      name:'Fire Beetle',           required_setting:null,                  killPts:200 },
  { id:'conc_bomb',        name:'Concertina Bomb',       required_setting:null,                  killPts:150 },
  { id:'flash_bomb',       name:'Flash Bomb',            required_setting:null,                  killPts:300 },
]

// All weapons in one flat pool (for generation)
function getAllWeaponPool() {
  const pool = [
    ...LONG3, ...MED3, ...SMALL3,
    ...LONG2, ...MED2, ...SMALL2,
    ...LONG1, ...MED1, ...SMALL1,
    ...SHOTGUNS, ...SPECIAL, ...EVENT,
    ...SLOTTED_MELEE,
  ]
  return pool.filter(w => {
    if (w.optional && !state.settings[w.optional]) return false
    return true
  })
}

// Arsenal sections in display order
const ARSENAL_SECTIONS = [
  { label:'LONG AMMO — 3 Slot',    pool: LONG3   },
  { label:'MEDIUM AMMO — 3 Slot',  pool: MED3    },
  { label:'SMALL AMMO — 3 Slot',   pool: SMALL3  },
  { label:'LONG AMMO — 2 Slot',    pool: LONG2   },
  { label:'MEDIUM AMMO — 2 Slot',  pool: MED2    },
  { label:'SMALL AMMO — 2 Slot',   pool: SMALL2  },
  { label:'LONG AMMO — 1 Slot',    pool: LONG1   },
  { label:'MEDIUM AMMO — 1 Slot',  pool: MED1    },
  { label:'SMALL AMMO — 1 Slot',   pool: SMALL1  },
  { label:'SHOTGUNS',              pool: SHOTGUNS },
  { label:'SPECIAL AMMO',          pool: SPECIAL  },
  { label:'EVENT WAFFEN',          pool: EVENT    },
  { label:'NAHKAMPF (SLOT)',        pool: SLOTTED_MELEE, noAmmo: true },
  { label:'TOOLS',                  pool: TOOLS,        items: true },
  { label:'CONSUMABLES',            pool: CONSUMABLES,  items: true },
  { label:'TAROT CARDS',            pool: TAROT_CARDS,  items: true },
]

// ═══════════════════════════════════════════════════════════════════════════
// FLAVOR TEXT
// ═══════════════════════════════════════════════════════════════════════════

const FLAVOR_TEXTS = {
  de: [
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
  ],
  en: [
    'The swamps cry out for blood.',
    'Prepare yourself, Hunter.',
    'Death lurks in the shadows.',
    'May your shot find its mark.',
    'The Bayou never forgets.',
    'Every round could be your last.',
    'The bounty waits. Go claim it.',
    'Hunger. Blood. Prey.',
    'Only the best return.',
    'The monster is real. Are you?',
    'Trust no one. Fear everything.',
    'Glory or death — there is nothing between.',
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════════════
// TRANSLATIONS
// ═══════════════════════════════════════════════════════════════════════════

const TRANSLATIONS = {
  de: {
    // Nav
    nav_home:'HOME', nav_history:'HISTORIK', nav_settings:'EINSTELLUNGEN', nav_arsenal:'ARSENAL',
    // Stats bar
    sb_rounds:'RUNDEN',
    // Home
    home_rnd_sub:'Loadout auswürfeln', home_active:'✦ AKTIVER LAUF ✦',
    home_rnd_played:'Runden gespielt', home_end_run:'LAUF BEENDEN',
    home_loadouts:'Läufe', home_last_run:'Letzter Lauf', home_total:'Total Score',
    // Loadout
    lo_title:'DEIN LOADOUT', lo_difficulty:'LOADOUT SCHWIERIGKEIT', lo_pts:'PUNKTE',
    lo_confirm:'✦ LOADOUT BESTÄTIGEN', lo_end_round:'✦ RUNDE BEENDEN',
    lo_large:'LARGE SLOT', lo_medium:'MEDIUM SLOT', lo_small:'SMALL SLOT', lo_dual:'DUAL WIELD',
    lo_slot1:'ERSTER SLOT', lo_slot2:'ZWEITER SLOT',
    lo_tools:'TOOLS', lo_consumables:'CONSUMABLES', lo_slot_bonus:'SLOT BONUS',
    lo_free_slot:'freier Slot', lo_free_slots:'freie Slots', lo_qm:'QM',
    lo_reroll:'↺ NEU WÜRFELN',
    res_foreign_tip:'Eine aufgehobene Waffe, die nicht im Loadout-Randomizer enthalten war.',
    // Results
    res_title:'RUNDEN ERGEBNIS', res_hint:'Auf Waffe/Item klicken = +1 · Rechtsklick = −1',
    res_stylish:'Stylish Kill', res_foreign:'Fremde Waffe', res_headshots:'Headshots',
    res_deaths:'Tode', res_bounties:'Bounties', res_first_death:'Erster Tod (−100)',
    res_yes:'JA', res_no:'NEIN', res_preview:'VORAUSSICHTLICHE PUNKTE:',
    res_confirm:'✦ ERGEBNIS BESTÄTIGEN', res_primary:'PRIMÄR', res_secondary:'SEKUNDÄR',
    res_kills:'KILLS',
    res_pts_stylish:'+50 / Kill', res_pts_foreign:'+80 / Kill', res_pts_headshots:'+50 / HS',
    res_pts_deaths:'−50 / Tod', res_pts_bounties:'+100 / Stück',
    res_pts_foreign_cons:'+70 / Stück', res_pts_teamkill:'−500 / TK',
    res_pts_world_melee:'+250 / Kill',
    res_failed_extract:'Extraktion fehlgeschlagen (÷2)',
    res_foreign_cons:'Fremde Consumable', res_teamkill:'Teamkill',
    res_world_melee:'World-Melee Kill',
    res_foreign_cons_tip:'Aufgehobenes Consumable, das nicht im Loadout-Randomizer enthalten war.',
    res_teamkill_tip:'Ein versehentlicher oder absichtlicher Teamkill während der Runde.',
    res_world_melee_tip:'Kill mit einer aufgesetzten Weltnahkampfwaffe (Flasche, Hammer, Spitzhacke, etc.) die nicht im eigenen Loadout war.',
    res_stylish_tip:'Wähle dies bei einem besonders stylishen Kill — z.B. 200m Sniper, Kill im freien Fall oder ähnliches. Pauschaler Bonus.',
    // Round complete
    rc_title:'RUNDE ABGESCHLOSSEN', rc_score:'RUNDEN SCORE', rc_total:'LAUF GESAMT:',
    rc_next:'↺ NÄCHSTE RUNDE', rc_end:'✓ LAUF BEENDEN',
    // History
    hist_title:'VERGANGENE LÄUFE', hist_empty:'Noch keine Läufe gespeichert.<br>Starte deinen ersten Hunt.',
    hist_round:'Runde', hist_rounds:'Runden', hist_kills:'Kills:', hist_deaths:'Tode:', hist_kd:'K/D:',
    hist_solo:'Solo ×1.5',
    // Run detail
    rd_title:'LAUF DETAILS', rd_back:'← ZURÜCK',
    rd_score:'Score', rd_rounds:'Runden', rd_kills:'Kills', rd_deaths:'Tode', rd_kd:'K/D', rd_hs:'Headshots',
    rd_round:'RUNDE',
    // Settings
    set_title:'EINSTELLUNGEN',
    set_req_title:'PFLICHTAUSRÜSTUNG', set_req_desc:'Beeinflusst den Loadout und den Score-Multiplikator',
    set_medkit_n:'Medkit verpflichtend', set_medkit_d:'EIN: Medkit garantiert im Loadout — kein Bonus, du hast die Sicherheit schon. AUS: +100 Pts statischer Bonus, weil du auf das Netz verzichtest.',
    set_melee_n:'Nahkampf-Tool verpflichtend', set_melee_d:'EIN: Nahkampf-Tool garantiert — kein Bonus. AUS: +100 Pts statischer Bonus für das Risiko ohne Garantie. (Beide können trotzdem zufällig gewürfelt werden.)',
    set_choke_n:'Choke-Bombe verpflichtend', set_choke_d:'Choke Bomb garantiert im Loadout. Kann ohne diese Option weiterhin zufällig erscheinen. Kein Einfluss auf den Score.',
    set_heal_n:'Heilspritze verpflichtend', set_heal_d:'EIN: Vitality Shot (weak o. normal) garantiert — kostet −50 Pts statisch. AUS: Kein Abzug, kann aber weiterhin zufällig rollen.',
    set_regen_n:'Regenshot verpflichtend', set_regen_d:'EIN: Regen Shot (weak o. normal) garantiert — kostet −75 Pts statisch. AUS: Kein Abzug, kann aber weiterhin zufällig rollen.',
    set_mode_title:'SPIELMODUS',
    set_solo_n:'Solo-Modus', set_solo_d:'Spiele alleine — alle variablen Scores werden mit ×1.5 multipliziert. Statische Boni (Medkit/Nahkampf-Einstellung) werden nicht multipliziert.',
    set_qm_n:'Quartermaster', set_qm_d:'Large + Medium Loadout (5 Slots). Kein Bonus für freie Slots — der QM-Vorteil ist der Slot selbst.',
    set_marcel_n:'Marcel-Hypermode', set_marcel_d:'Der Bogen erscheint häufiger im Pool. Bei aktivem Bogen im Loadout: +25 Punkte pro Kill.',
    set_pool_title:'WAFFENPOOL', set_pool_desc:'Event- und optionale Waffen in den Zufalls-Pool einschließen',
    set_shredder_n:'Shredder einschließen', set_shredder_d:'Shredder (Event-Waffe) im Waffenpool verfügbar',
    set_flame_n:'Flame Rifle einschließen', set_flame_d:'Flame Rifle (Event-Waffe) im Waffenpool verfügbar',
    set_wild_n:'Wildland &amp; Homestead einschließen', set_wild_d:'Wildland und Homestead im Waffenpool verfügbar',
    set_tarot_n:'Tarot-Karten einschließen', set_tarot_d:'Tarot-Karten als Verbrauchsgüter in den Loadout-Pool aufnehmen',
    set_scarce_n:'Scarce-Ammo einschließen', set_scarce_d:'Seltene Munitionstypen (Scarce) in den Munitionspool aufnehmen',
    set_score_title:'SCORING ÜBERSICHT',
    set_pos:'POSITIV', set_neg:'NEGATIV',
    set_danger_title:'GEFAHRENZONE', set_danger_btn:'☠ ALLE DATEN LÖSCHEN',
    // Arsenal
    ars_title:'ARSENAL', ars_sub:'Waffen · Munition · Punktewerte',
    ars_col_weapon:'WAFFE', ars_col_slots:'SLOTS', ars_col_type:'TYP',
    ars_col_pts:'BASIS PTS', ars_col_mode:'FEUERMOD.', ars_col_ammo:'VERFÜGBARE MUNITION',
    ars_dual:'Schrot:',
    // Modal
    modal_confirm_btn:'Bestätigen', modal_cancel:'Abbrechen',
    // Misc
    round_label:'Runde', dual_badge:'2x',
    // Breakdown labels
    bk_kill:'Kill', bk_stylish:'Stylish Kill', bk_foreign:'Fremde Waffe', bk_world_melee:'World-Melee Kill', bk_foreign_cons:'Fremde Consumable', bk_teamkill:'Teamkill', bk_marcel:'Marcel-Hypermode Bonus',
    bk_headshot:'Headshot', bk_death:'Tod', bk_first_death:'Erster Tod',
    bk_bounty:'Bounty', bk_melee:'Nahkampf', bk_medkit:'Medkit',
    bk_heal_syringe:'Heilspritze', bk_regen_shot:'Regenshot',
    bk_free_slot:'Freier Slot', bk_free_cons:'Freier Cons.-Slot', bk_solo:'Solo ×1.5',
    bk_failed_extract:'Extraktion fehlgeschlagen ÷2',
    bk_medkit_off:'Medkit nicht erzwungen', bk_melee_off:'Nahkampf nicht erzwungen',
    bk_vit_forced:'Vitality Shot (erzwungen)', bk_regen_forced:'Regenshot (erzwungen)',
    // Loadout labels
    lo_melee_label:'NAHKAMPF · SLOT', lo_dual_schrot:'· SCHROT',
    // Run detail
    rd_kills_primary:'Kills (Primär)', rd_kills_secondary:'Kills (Sekundär)',
    rd_foreign:'Fremde Waffe', rd_deaths_label:'Tode', rd_first_death_label:'Erster Tod',
    // Scoring overview labels
    sl_kill:'Kill (Waffe, Standard)', sl_stylish:'Stylish Kill', sl_foreign:'Fremde Waffe Kill',
    sl_world_melee:'World-Melee Kill', sl_foreign_cons:'Fremde Consumable', sl_teamkill:'Teamkill',
    sl_marcel:'Marcel-Hypermode (Bogen)', sl_headshot:'Headshot', sl_bounty:'Bounty (max 4 / 2 Solo)',
    sl_free_slot:'Freier Waffen-Slot', sl_free_cons:'Freier Cons.-Slot', sl_medkit_off:'Medkit nicht erzwungen',
    sl_melee_off:'Nahkampf nicht erzwungen', sl_solo:'Solo-Modus',
    sl_death:'Tod', sl_first_death:'Erster Tod', sl_vit_forced:'Vitality Shot (erzwungen)',
    sl_regen_forced:'Regenshot (erzwungen)', sl_extract_fail:'Extraktion fehlgeschlagen',
    sl_ammo_mod:'Munitions-Modifikator', sl_static:'(statisch, kein Solo-Mult.)',
  },
  en: {
    nav_home:'HOME', nav_history:'HISTORY', nav_settings:'SETTINGS', nav_arsenal:'ARSENAL',
    sb_rounds:'ROUNDS',
    home_rnd_sub:'Roll a loadout', home_active:'✦ ACTIVE RUN ✦',
    home_rnd_played:'rounds played', home_end_run:'END RUN',
    home_loadouts:'Runs', home_last_run:'Last Run', home_total:'Total Score',
    lo_title:'YOUR LOADOUT', lo_difficulty:'LOADOUT DIFFICULTY', lo_pts:'POINTS',
    lo_confirm:'✦ CONFIRM LOADOUT', lo_end_round:'✦ END ROUND',
    lo_large:'LARGE SLOT', lo_medium:'MEDIUM SLOT', lo_small:'SMALL SLOT', lo_dual:'DUAL WIELD',
    lo_slot1:'FIRST SLOT', lo_slot2:'SECOND SLOT',
    lo_tools:'TOOLS', lo_consumables:'CONSUMABLES', lo_slot_bonus:'SLOT BONUS',
    lo_free_slot:'free slot', lo_free_slots:'free slots', lo_qm:'QM',
    lo_reroll:'↺ REROLL',
    res_foreign_tip:'A weapon picked up that was not part of the initial loadout randomizer.',
    res_title:'ROUND RESULT', res_hint:'Click weapon/item = +1 · Right-click = −1',
    res_stylish:'Stylish Kill', res_foreign:'Foreign Weapon', res_headshots:'Headshots',
    res_deaths:'Deaths', res_bounties:'Bounties', res_first_death:'First Death (−100)',
    res_yes:'YES', res_no:'NO', res_preview:'ESTIMATED POINTS:',
    res_confirm:'✦ CONFIRM RESULT', res_primary:'PRIMARY', res_secondary:'SECONDARY',
    res_kills:'KILLS',
    res_pts_stylish:'+50 / Kill', res_pts_foreign:'+80 / Kill', res_pts_headshots:'+50 / HS',
    res_pts_deaths:'−50 / Death', res_pts_bounties:'+100 / each',
    res_pts_foreign_cons:'+70 / each', res_pts_teamkill:'−500 / TK',
    res_pts_world_melee:'+250 / Kill',
    res_failed_extract:'Extraction Failed (÷2)',
    res_foreign_cons:'Foreign Consumable', res_teamkill:'Teamkill',
    res_world_melee:'World Melee Kill',
    res_foreign_cons_tip:'A consumable picked up that was not part of the initial loadout randomizer.',
    res_teamkill_tip:'An accidental or intentional teamkill during the round.',
    res_world_melee_tip:'A kill with a world melee weapon (bottle, hammer, pickaxe, etc.) not part of your loadout.',
    res_stylish_tip:'Select this for a particularly stylish kill — e.g. a 200m snipe, kill while skydiving, etc. Flat bonus points.',
    rc_title:'ROUND COMPLETE', rc_score:'ROUND SCORE', rc_total:'RUN TOTAL:',
    rc_next:'↺ NEXT ROUND', rc_end:'✓ END RUN',
    hist_title:'PAST RUNS', hist_empty:'No runs saved yet.<br>Start your first hunt.',
    hist_round:'Round', hist_rounds:'Rounds', hist_kills:'Kills:', hist_deaths:'Deaths:', hist_kd:'K/D:',
    hist_solo:'Solo ×1.5',
    rd_title:'RUN DETAILS', rd_back:'← BACK',
    rd_score:'Score', rd_rounds:'Rounds', rd_kills:'Kills', rd_deaths:'Deaths', rd_kd:'K/D', rd_hs:'Headshots',
    rd_round:'ROUND',
    set_title:'SETTINGS',
    set_req_title:'REQUIRED GEAR', set_req_desc:'Affects loadout and score multiplier',
    set_medkit_n:'Medkit required', set_medkit_d:'ON: Medkit guaranteed in loadout — no bonus, you already have the safety net. OFF: +100 Pts static bonus for playing without the guarantee.',
    set_melee_n:'Melee tool required', set_melee_d:'ON: Melee tool guaranteed — no bonus. OFF: +100 Pts static bonus for the risk of going without. (Either can still roll randomly.)',
    set_choke_n:'Choke Bomb required', set_choke_d:'Choke Bomb guaranteed in loadout. Can still roll randomly without this option. No score effect.',
    set_heal_n:'Healing Syringe required', set_heal_d:'ON: Vitality Shot (weak or normal) guaranteed — costs −50 Pts static. OFF: No penalty; can still roll randomly.',
    set_regen_n:'Regen Shot required', set_regen_d:'ON: Regen Shot (weak or normal) guaranteed — costs −75 Pts static. OFF: No penalty; can still roll randomly.',
    set_mode_title:'GAME MODE',
    set_solo_n:'Solo Mode', set_solo_d:'Play alone — all variable scores are multiplied by ×1.5. Static bonuses (Medkit/Melee setting) are not multiplied.',
    set_qm_n:'Quartermaster', set_qm_d:'Large + Medium loadout (5 slots). No free-slot bonus — the extra slot is the advantage itself.',
    set_marcel_n:'Marcel-Hypermode', set_marcel_d:'Hunting Bow appears much more often in the pool. If Bow is in your loadout: +25 pts per kill.',
    set_pool_title:'WEAPON POOL', set_pool_desc:'Include event and optional weapons in the random pool',
    set_shredder_n:'Include Shredder', set_shredder_d:'Shredder (event weapon) available in weapon pool',
    set_flame_n:'Include Flame Rifle', set_flame_d:'Flame Rifle (event weapon) available in weapon pool',
    set_wild_n:'Include Wildland &amp; Homestead', set_wild_d:'Wildland and Homestead available in weapon pool',
    set_tarot_n:'Include Tarot Cards', set_tarot_d:'Include Tarot Cards as consumables in the loadout pool',
    set_scarce_n:'Include Scarce Ammo', set_scarce_d:'Include rare ammo types (Scarce) in the ammo pool',
    set_score_title:'SCORING OVERVIEW',
    set_pos:'POSITIVE', set_neg:'NEGATIVE',
    set_danger_title:'DANGER ZONE', set_danger_btn:'☠ DELETE ALL DATA',
    ars_title:'ARSENAL', ars_sub:'Weapons · Ammo · Point Values',
    ars_col_weapon:'WEAPON', ars_col_slots:'SLOTS', ars_col_type:'TYPE',
    ars_col_pts:'BASE PTS', ars_col_mode:'FIRE MODE', ars_col_ammo:'AVAILABLE AMMO',
    ars_dual:'Shot:',
    modal_confirm_btn:'Confirm', modal_cancel:'Cancel',
    round_label:'Round', dual_badge:'2x',
    // Breakdown labels
    bk_kill:'Kill', bk_stylish:'Stylish Kill', bk_foreign:'Foreign Weapon', bk_world_melee:'World Melee Kill', bk_foreign_cons:'Foreign Consumable', bk_teamkill:'Teamkill', bk_marcel:'Marcel-Hypermode Bonus',
    bk_headshot:'Headshot', bk_death:'Death', bk_first_death:'First Death',
    bk_bounty:'Bounty', bk_melee:'Melee', bk_medkit:'Medkit',
    bk_heal_syringe:'Healing Syringe', bk_regen_shot:'Regen Shot',
    bk_free_slot:'Free Slot', bk_free_cons:'Free Cons. Slot', bk_solo:'Solo ×1.5',
    bk_failed_extract:'Extraction Failed ÷2',
    bk_medkit_off:'Medkit Not Required', bk_melee_off:'Melee Not Required',
    bk_vit_forced:'Vitality Shot (Forced)', bk_regen_forced:'Regen Shot (Forced)',
    // Loadout labels
    lo_melee_label:'MELEE · SLOT', lo_dual_schrot:'· SHOT',
    // Run detail
    rd_kills_primary:'Kills (Primary)', rd_kills_secondary:'Kills (Secondary)',
    rd_foreign:'Foreign Weapon', rd_deaths_label:'Deaths', rd_first_death_label:'First Death',
    // Scoring overview labels
    sl_kill:'Kill (Weapon, Standard)', sl_stylish:'Stylish Kill', sl_foreign:'Foreign Weapon Kill',
    sl_world_melee:'World Melee Kill', sl_foreign_cons:'Foreign Consumable', sl_teamkill:'Teamkill',
    sl_marcel:'Marcel-Hypermode (Bow)', sl_headshot:'Headshot', sl_bounty:'Bounty (max 4 / 2 Solo)',
    sl_free_slot:'Free Weapon Slot',
    sl_free_cons:'Free Cons. Slot', sl_medkit_off:'Medkit Not Required',
    sl_melee_off:'Melee Not Required', sl_solo:'Solo Mode',
    sl_death:'Death', sl_first_death:'First Death', sl_vit_forced:'Vitality Shot (Forced)',
    sl_regen_forced:'Regen Shot (Forced)', sl_extract_fail:'Extraction Failed',
    sl_ammo_mod:'Ammo Modifier', sl_static:'(static, no Solo mult.)',
  },
}

function T(key) {
  return (TRANSLATIONS[state.lang] || TRANSLATIONS.de)[key] ?? key
}

const FIRE_MODE_EN = {
  'Einzelschuss':   'Single Shot',
  'Repetier':       'Bolt Action',
  'Halbautomatik':  'Semi-Auto',
  'Vollautomat':    'Full-Auto',
  'Hebel-Repetier': 'Lever Action',
  'Doppellauf':     'Double Barrel',
  'Pump-Action':    'Pump Action',
  'Nahkampf':       'Melee',
  'Revolver':       'Revolver',
  'Pistole':        'Pistol',
}
function getFireMode(raw) {
  if (!raw || raw === '—') return '—'
  return state.lang === 'en' ? (FIRE_MODE_EN[raw] ?? raw) : raw
}

function setLang(lang) {
  state.lang = lang
  document.documentElement.lang = lang
  saveSettings()
  applyTranslations()
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = T(el.dataset.i18n)
  })
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === state.lang)
  })
  // Re-render currently visible JS-heavy views
  const active = document.querySelector('.view.active')?.id
  if (active === 'view-home')          updateHomeUI()
  if (active === 'view-history')       renderHistory()
  if (active === 'view-arsenal')       renderArsenalTable()
  if (active === 'view-loadout' && state.currentRoundData) {
    const rndLbl = document.getElementById('loadout-round-label')
    if (rndLbl) rndLbl.textContent = `${T('round_label')} ${state.currentRoundData.roundNumber}`
    renderLoadout(state.currentRoundData.loadout)
    // Re-attach in-round handlers if the round is already confirmed
    const irp = document.getElementById('inline-results-panel')
    if (irp && !irp.classList.contains('hidden')) {
      activateInRoundMode()
      activateItemTracking()
    }
  }
  if (active === 'view-results' && state.currentRoundData)  renderResultsWeaponCards()
}

const DEFAULT_SETTINGS = {
  medkitRequired:            false,
  meleeRequired:             true,
  chokeRequired:             false,
  healSyringeRequired:       false,
  regenShotRequired:         false,
  soloMode:                  false,
  quartermasterEnabled:      false,
  marcelHypermode:           false,
  includeShredder:           false,
  includeFlameRifle:         false,
  includeWildlandHomestead:  false,
  includeTarotCards:         false,
  includeScarceAmmo:         false,
}

let state = {
  settings:             { ...DEFAULT_SETTINGS },
  currentRun:           null,
  currentRoundData:     null,
  history:              [],
  arsenalOverrides:     {},
  rerolls:              2,
  totalRoundsCompleted: 0,
  lang:                 'de',
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
    state.lang                 = settings._lang                 ?? 'de'
  }
}

async function saveHistory()  { await window.huntAPI.writeData('history.json',  state.history) }
async function saveArsenal()  { await window.huntAPI.writeData('arsenal.json',  state.arsenalOverrides) }
async function saveSettings() {
  await window.huntAPI.writeData('settings.json', {
    ...state.settings,
    _rerolls:              state.rerolls,
    _totalRoundsCompleted: state.totalRoundsCompleted,
    _lang:                 state.lang,
  })
}

function getWeaponPts(weapon) {
  return state.arsenalOverrides[weapon.id]?.pts ?? weapon.pts
}

// ═══════════════════════════════════════════════════════════════════════════
// VIEW MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════

function showView(name) {
  // If navigating home while a round is in progress, return to the loadout instead
  if (name === 'home' && state.currentRoundData) { name = 'loadout' }

  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'))
  const el = document.getElementById(`view-${name}`)
  if (!el) return
  el.classList.remove('hidden')
  el.classList.add('active')

  const isSplash = name === 'splash'
  document.getElementById('stats-bar').classList.toggle('hidden', isSplash)
  document.getElementById('main-nav').classList.toggle('hidden', isSplash)
  document.getElementById('corner-icon').classList.toggle('hidden', isSplash)

  if (!isSplash) { updateStatsBar(); updateNavActive(name) }
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
  return weapon?.ammo?.find(a => a.key === key) ?? null
}

function getEffAmmoPts(weapon, ammoKey, isSecond) {
  const storeKey = weapon.id + '_ammo_' + ammoKey
  if (state.arsenalOverrides[storeKey] !== undefined) return state.arsenalOverrides[storeKey].pts
  const arr = isSecond ? weapon.secondAmmo : weapon.ammo
  return arr?.find(a => a.key === ammoKey)?.pts ?? 0
}

function getItemKillPts(item) {
  return state.arsenalOverrides[item.id]?.killPts ?? item.killPts ?? 0
}

function calcUsedSlots(loadout) {
  let s = (loadout.primary?.slots || 0) + (loadout.secondary?.slots || 0)
  if (loadout.dualWield) s += 1
  if (loadout.melee?.slots) s += loadout.melee.slots
  return s
}

function calcLoadoutScore(loadout) {
  let pts = 0
  if (loadout.primary) {
    pts += getWeaponPts(loadout.primary)
    pts += getEffAmmoPts(loadout.primary, loadout.primaryAmmo)
    if (loadout.primaryAmmo2) pts += getEffAmmoPts(loadout.primary, loadout.primaryAmmo2)
    if (loadout.primaryAmmoB) pts += getEffAmmoPts(loadout.primary, loadout.primaryAmmoB, true)
  }
  if (loadout.secondary) {
    pts += getWeaponPts(loadout.secondary)
    pts += getEffAmmoPts(loadout.secondary, loadout.secondaryAmmo)
    if (loadout.secondaryAmmo2) pts += getEffAmmoPts(loadout.secondary, loadout.secondaryAmmo2, true)
    if (loadout.secondaryAmmoB) pts += getEffAmmoPts(loadout.secondary, loadout.secondaryAmmoB)
  }
  if (loadout.melee) pts += getWeaponPts(loadout.melee)

  const weaponSlots = (loadout.primary?.slots || 0) + (loadout.secondary?.slots || 0) + (loadout.dualWield ? 1 : 0)
  const emptySlots  = Math.max(0, (loadout.budget || 4) - weaponSlots)
  pts += emptySlots * 100

  // Empty consumable slots bonus (+30 each)
  const emptyCons = Math.max(0, 4 - (loadout.consumables?.length || 0))
  pts += emptyCons * 30

  return pts
}

function calcRoundScore(loadout, results) {
  const breakdown = []

  // Per-kill weapon scoring (dict: { ammoKey: count } or legacy number)
  function addWeaponKills(weapon, killsData, defaultAmmoKey) {
    if (!killsData) return
    const entries = typeof killsData === 'object'
      ? Object.entries(killsData)
      : [[defaultAmmoKey, killsData]]
    for (const [ammoKey, count] of entries) {
      if (!count) continue
      const isSecondBarrel = weapon.dualAmmo && weapon.secondAmmo?.some(a => a.key === ammoKey)
      const ammoArr = isSecondBarrel ? weapon.secondAmmo : weapon.ammo
      const ammoEntry = ammoArr?.find(a => a.key === ammoKey)
      const ammoLabel = ammoEntry?.label ?? ammoKey
      const ptsEach = getWeaponPts(weapon) + getEffAmmoPts(weapon, ammoKey, isSecondBarrel)
      const label = ammoEntry
        ? `${count}× ${weapon.name} · ${ammoLabel}`
        : `${count}× ${T('bk_kill')} (${weapon.name})`
      breakdown.push({ label, pts: count * ptsEach, type: ptsEach >= 0 ? 'good' : 'bad' })
    }
  }
  addWeaponKills(loadout.primary,   results.primaryKills,   loadout.primaryAmmo)
  addWeaponKills(loadout.secondary, results.secondaryKills, loadout.secondaryAmmo)

  // Item uses (tools & consumables)
  if (results.itemUses) {
    const allItems = [...(loadout.tools || []), ...(loadout.consumables || [])]
    for (const item of allItems) {
      const uses = results.itemUses[item.id] || 0
      if (uses > 0) {
        const kpts = getItemKillPts(item)
        breakdown.push({ label:`${uses}× ${item.name}`, pts: uses * kpts, type: kpts >= 0 ? 'good' : 'bad' })
      }
    }
  }

  // Stylish kills / foreign weapon kills / headshots
  if (results.stylishKills) breakdown.push({ label:`${results.stylishKills}× ${T('bk_stylish')}`, pts: results.stylishKills * 50,  type:'good' })
  if (results.foreignKills)     breakdown.push({ label:`${results.foreignKills}× ${T('bk_foreign')}`,    pts: results.foreignKills * 80,   type:'good' })
  if (results.worldMeleeKills)  breakdown.push({ label:`${results.worldMeleeKills}× ${T('bk_world_melee')}`, pts: results.worldMeleeKills * 250, type:'good' })
  if (results.foreignConsumables) breakdown.push({ label:`${results.foreignConsumables}× ${T('bk_foreign_cons')}`, pts: results.foreignConsumables * 70, type:'good' })
  if (results.teamkills)        breakdown.push({ label:`${results.teamkills}× ${T('bk_teamkill')}`,     pts: results.teamkills * -500,    type:'bad'  })
  if (results.headshots)    breakdown.push({ label:`${results.headshots}× ${T('bk_headshot')}`,   pts: results.headshots    * 50,  type:'good' })

  // Deaths & first death
  if (results.deaths)     breakdown.push({ label:`${results.deaths}× ${T('bk_death')}`, pts: results.deaths * -50, type:'bad' })
  if (results.firstDeath) breakdown.push({ label:T('bk_first_death'), pts:-100, type:'bad' })

  // Bounties (capped)
  const maxBounties = state.settings.soloMode ? 2 : 4
  const bounties    = Math.min(results.bounties || 0, maxBounties)
  if (bounties) breakdown.push({ label:`${bounties}× ${T('bk_bounty')}`, pts: bounties * 100, type:'good' })

  let total = breakdown.reduce((s, b) => s + b.pts, 0)

  // Extraction failure: always ÷2, but if ÷2 would gain points (negative total) → flat −100 instead
  if (results.failedExtract) {
    const halfPenalty = Math.round(total * 0.5)
    if (halfPenalty <= 0) {
      breakdown.push({ label:T('bk_failed_extract'), pts: -100, type:'bad' })
      total -= 100
    } else {
      breakdown.push({ label:T('bk_failed_extract'), pts: -halfPenalty, type:'bad' })
      total -= halfPenalty
    }
  }

  if (state.settings.soloMode) {
    breakdown.push({ label:T('bk_solo'), pts:Math.round(total * 0.5), type:'good' })
    total = Math.round(total * 1.5)
  }

  // ── Static bonuses/penalties (NOT multiplied by solo) ─────────────────────
  // Free weapon slots (+200 each, relative to base 4 slots — QM extra slot gives no bonus)
  const weaponSlots = (loadout.primary?.slots || 0) + (loadout.secondary?.slots || 0) + (loadout.dualWield ? 1 : 0)
  const emptySlots  = Math.max(0, 4 - weaponSlots)
  if (emptySlots > 0) {
    const pts = emptySlots * 200
    breakdown.push({ label:`${emptySlots}× ${T('bk_free_slot')}`, pts, type:'good' })
    total += pts
  }
  // Free consumable slots (+100)
  const emptyCons = Math.max(0, 4 - (loadout.consumables?.length || 0))
  if (emptyCons > 0) {
    const pts = emptyCons * 100
    breakdown.push({ label:`${emptyCons}× ${T('bk_free_cons')}`, pts, type:'good' })
    total += pts
  }
  // Setting-based
  if (!state.settings.medkitRequired) {
    breakdown.push({ label:T('bk_medkit_off'), pts: 100, type:'good' })
    total += 100
  }
  if (!state.settings.meleeRequired) {
    breakdown.push({ label:T('bk_melee_off'), pts: 100, type:'good' })
    total += 100
  }
  if (state.settings.healSyringeRequired) {
    breakdown.push({ label:T('bk_vit_forced'), pts: -50, type:'bad' })
    total -= 50
  }
  if (state.settings.regenShotRequired) {
    breakdown.push({ label:T('bk_regen_forced'), pts: -75, type:'bad' })
    total -= 75
  }
  // Marcel-Hypermode: +25 per kill when Hunting Bow is in loadout
  if (state.settings.marcelHypermode) {
    const hasBow = loadout.primary?.id === 'hunting_bow' || loadout.secondary?.id === 'hunting_bow'
    if (hasBow) {
      const totalKills = sumKillDict(results.primaryKills) + sumKillDict(results.secondaryKills) + (results.foreignKills || 0)
      if (totalKills > 0) {
        const pts = totalKills * 25
        breakdown.push({ label:`${T('bk_marcel')} (${totalKills}×)`, pts, type:'good' })
        total += pts
      }
    }
  }

  return { total, breakdown }
}

function calcTotalStats() {
  let totalScore = 0, totalKills = 0, totalDeaths = 0, totalRounds = 0
  for (const run of [...state.history, ...(state.currentRun ? [state.currentRun] : [])]) {
    for (const r of (run.rounds || [])) {
      totalScore  += r.totalScore || 0
      const pk = r.results?.primaryKills
      const sk = r.results?.secondaryKills
      totalKills  += (typeof pk === 'object' ? Object.values(pk).reduce((s,v) => s+v, 0) : pk || 0)
                   + (typeof sk === 'object' ? Object.values(sk).reduce((s,v) => s+v, 0) : sk || 0)
                   + (r.results?.foreignKills || 0)
                   + (r.results?.kills        || 0)  // legacy
      totalDeaths += r.results?.deaths || 0
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

// IDs of tools that count as melee (for the meleeRequired setting)
const MELEE_TOOL_IDS = new Set(['heavy_knife','knife','knuckle_knife','dusters','spear','throwing_axes','throwing_knives'])

function generateLoadout() {
  const qm     = state.settings.quartermasterEnabled
  const budget = qm ? 5 : 4  // fixed: 4 standard, 5 QM; weapons may leave empty slots

  function filterAmmo(arr) {
    if (!arr || !arr.length || state.settings.includeScarceAmmo) return arr
    const f = arr.filter(a => !a.scarce)
    return f.length ? f : arr
  }

  const pool = getAllWeaponPool()  // includes SLOTTED_MELEE

  // Primary: any weapon from pool (any size)
  // Marcel-Hypermode: 25% chance to force Hunting Bow as primary
  let primary
  if (state.settings.marcelHypermode && Math.random() < 0.25) {
    const bow = pool.find(w => w.id === 'hunting_bow')
    primary = bow || pick(pool)
  } else {
    primary = pick(pool)
  }
  const primAmmoArr = filterAmmo(primary.ammo)
  const primaryAmmo = primAmmoArr?.length ? pick(primAmmoArr).key : null
  // dualMain primary: pick a 2nd ammo freely from same pool (duplicates allowed)
  const primaryAmmo2 = primary.dualMain && primAmmoArr?.length ? pick(primAmmoArr).key : null
  // dualAmmo primary (e.g. LeMat Carbine, Drilling): pick from second barrel
  const primSecArr  = primary.dualAmmo && primary.secondAmmo ? filterAmmo(primary.secondAmmo) : null
  const primaryAmmoB = primSecArr?.length ? pick(primSecArr).key : null

  // Second weapon slot: any weapon that fits within budget (same rules as first slot)
  let secondaryPool = pool.filter(w => primary.slots + w.slots <= budget)
  if (!secondaryPool.length) secondaryPool = pool.filter(w => w.slots === 1)

  const secondary      = pick(secondaryPool)
  const secAmmoArr     = filterAmmo(secondary.ammo)
  const secondaryAmmo  = secAmmoArr?.length ? pick(secAmmoArr).key : null
  // dualMain secondary: pick a 2nd ammo freely from same pool (duplicates allowed)
  const secondaryAmmoB = secondary.dualMain && secAmmoArr?.length ? pick(secAmmoArr).key : null
  // dualAmmo secondary (second barrel, e.g. shotgun slot)
  const sec2Arr        = secondary.dualAmmo && secondary.secondAmmo ? filterAmmo(secondary.secondAmmo) : null
  const secondaryAmmo2 = sec2Arr?.length ? pick(sec2Arr).key : null

  // Dual-wield: pistols only, 25% chance when budget allows +1 slot
  const dualWield = secondary.slots === 1
    && secondary.category === 'pistol'
    && (primary.slots + secondary.slots + 1) <= budget
    && Math.random() < 0.25

  // Tools — always fill to 4
  // meleeRequired: force one random melee tool; handled separately from required_setting
  const meleeTools    = TOOLS.filter(t => MELEE_TOOL_IDS.has(t.id))
  const forcedMelee   = state.settings.meleeRequired && meleeTools.length ? { ...pick(meleeTools), _forced: true } : null
  const reqTools      = TOOLS.filter(t => t.required_setting && state.settings[t.required_setting])
  // optTools: everything not already forced (allow required_setting tools when setting is off)
  const reqToolIds    = new Set([...(forcedMelee ? [forcedMelee.id] : []), ...reqTools.map(t => t.id)])
  const optTools      = TOOLS.filter(t => !reqToolIds.has(t.id))
    .sort(() => Math.random() - 0.5)
  const toolsBase     = [...(forcedMelee ? [forcedMelee] : []), ...reqTools]
  const tools         = [...toolsBase, ...optTools.slice(0, 4 - toolsBase.length)].slice(0, 4)

  // Consumables — random 1-4, min 1
  // healSyringe / regenShot required → pick ONE of weak/normal randomly
  const reqCons = []
  if (state.settings.healSyringeRequired) {
    const opts = CONSUMABLES.filter(c => c.id === 'vitality_shot' || c.id === 'vitality_weak')
    if (opts.length) reqCons.push(pick(opts))
  }
  if (state.settings.regenShotRequired) {
    const opts = CONSUMABLES.filter(c => c.id === 'regen_shot' || c.id === 'regen_weak')
    if (opts.length) reqCons.push(pick(opts))
  }
  // Any other consumables with required_setting (none currently, but keeps extensible)
  CONSUMABLES.filter(c => c.required_setting && state.settings[c.required_setting] && !reqCons.some(r => r.id === c.id))
    .forEach(c => reqCons.push(c))

  const tarotPool = state.settings.includeTarotCards ? TAROT_CARDS : []
  const optCons   = [...CONSUMABLES.filter(c => !reqCons.some(r => r.id === c.id)), ...tarotPool]
    .sort(() => Math.random() - 0.5)
  const totalCons  = Math.max(1, reqCons.length + Math.floor(Math.random() * (4 - reqCons.length + 1)))
  let consumables  = [...reqCons, ...optCons.slice(0, Math.max(0, totalCons - reqCons.length))].slice(0, 4)
  if (!consumables.length) consumables = [pick(CONSUMABLES)]

  return { primary, primaryAmmo, primaryAmmo2, primaryAmmoB, secondary, secondaryAmmo, secondaryAmmo2, secondaryAmmoB, dualWield, melee: null, tools, consumables, budget }
}

// ═══════════════════════════════════════════════════════════════════════════
// SVG ICONS
// ═══════════════════════════════════════════════════════════════════════════

const WEAPON_ICONS = {
  rifle: `<svg class="weapon-svg-icon" viewBox="0 0 80 40"><rect x="2" y="18" width="68" height="5" rx="2" fill="currentColor"/><rect x="5" y="22" width="40" height="10" rx="2" fill="currentColor" opacity="0.7"/><rect x="55" y="16" width="18" height="3" rx="1" fill="currentColor"/><rect x="42" y="20" width="8" height="8" rx="1" fill="currentColor" opacity="0.8"/><circle cx="68" cy="20" r="3" fill="currentColor" opacity="0.6"/></svg>`,
  shotgun:`<svg class="weapon-svg-icon" viewBox="0 0 80 40"><rect x="4" y="17" width="60" height="7" rx="2" fill="currentColor"/><rect x="6" y="23" width="35" height="10" rx="2" fill="currentColor" opacity="0.7"/><rect x="42" y="19" width="6" height="10" rx="1" fill="currentColor" opacity="0.8"/><circle cx="62" cy="21" r="4" fill="currentColor" opacity="0.5"/></svg>`,
  pistol: `<svg class="weapon-svg-icon" viewBox="0 0 60 50"><rect x="5" y="16" width="42" height="7" rx="2" fill="currentColor"/><rect x="8" y="22" width="20" height="14" rx="2" fill="currentColor" opacity="0.7"/><polygon points="8,36 20,36 15,46 5,46" fill="currentColor" opacity="0.6"/><circle cx="44" cy="20" r="3" fill="currentColor" opacity="0.5"/></svg>`,
  special:`<svg class="weapon-svg-icon" viewBox="0 0 60 60"><circle cx="30" cy="30" r="20" stroke="currentColor" stroke-width="3" fill="none"/><circle cx="30" cy="30" r="5" fill="currentColor"/><line x1="30" y1="10" x2="30" y2="20" stroke="currentColor" stroke-width="3"/><line x1="50" y1="30" x2="40" y2="30" stroke="currentColor" stroke-width="3"/><line x1="30" y1="50" x2="30" y2="40" stroke="currentColor" stroke-width="3"/><line x1="10" y1="30" x2="20" y2="30" stroke="currentColor" stroke-width="3"/></svg>`,
  slotMelee:`<svg class="weapon-svg-icon" viewBox="0 0 60 60"><line x1="10" y1="50" x2="50" y2="10" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><polygon points="42,4 56,4 56,18" fill="currentColor"/><line x1="8" y1="52" x2="15" y2="45" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity="0.7"/></svg>`,
  item:   `<svg class="weapon-svg-icon" viewBox="0 0 50 60"><rect x="10" y="15" width="30" height="38" rx="3" fill="currentColor" opacity="0.7"/><rect x="18" y="8" width="14" height="10" rx="2" fill="currentColor"/></svg>`,
}

function getWeaponIcon(cat) { return WEAPON_ICONS[cat] || WEAPON_ICONS.item }

function getAmmoImg(ammoKey, ammoArr, weaponAmmoType) {
  const DIRECT = {
    'dolchammo':    'dolch_standard',
    'nitro':        'nitro_standard',
    'shredderammo': 'nitro_shredder',
    'bolt':         'bolt_standard',
    'expbolt':      'bolt_explosive',
    'shotbolt':     'bolt_shot',
    'steelbolt':    'bolt_steel',
    'cbolt':        'cbolt_standard',
    'cexpbolt':     'cbolt_chukon',
    'cibolt':       'cbolt_revive',
    'chokebolt':    'cbolt_choke',
    'poisoncbolt':  'cbolt_poison',
    'dbcbolt':      'cbolt_dragonbreath',
    'chaosbolt':    'cbolt_chaos',
    'arrow':        'arrow_standard',
    'poisonarr':    'arrow_poison',
    'fragarr':      'arrow_frag',
    'concarr':      'arrow_conc',
    'lance':        'lance_standard',
    'harpoon':      'lance_harpoon',
    'steelball':    'lance_steelball',
    'waxedfrag':    'lance_waxedfrag',
    'dbcharge':     'lance_dragonbreath',
    'slug':         'shell_slug',
    'flechette':    'shell_flechette',
    'pennyshot':    'shell_pennyshot',
    'dragonsbreath':'shell_dragonsbreath',
    'starshell':    'shell_starshell',
  }
  if (DIRECT[ammoKey]) return `../assets/ammo/${DIRECT[ammoKey]}.png`
  const hasShell = ammoArr?.some(a => ['slug','flechette','pennyshot','dragonsbreath','starshell'].includes(a.key))
  const hasDolch = ammoArr?.some(a => a.key === 'dolchammo')
  const hasNitro = ammoArr?.some(a => a.key === 'nitro' || a.key === 'shredderammo')
  let cls
  if (hasDolch)      cls = 'dolch'
  else if (hasNitro) cls = 'nitro'
  else if (hasShell) cls = 'shell'
  else { const m = { long:'long', medium:'medium', small:'compact', shotgun:'shell' }; cls = m[weaponAmmoType] || 'medium' }
  return `../assets/ammo/${cls}_${ammoKey}.png`
}

// ═══════════════════════════════════════════════════════════════════════════
// RENDER LOADOUT
// ═══════════════════════════════════════════════════════════════════════════

function slotDots(n) {
  return Array.from({length:3}, (_,i) =>
    `<span class="sd${i < n ? ' filled' : ''}"></span>`
  ).join('')
}

function ammoTag(weapon, key, isSecond) {
  const arr   = isSecond ? weapon.secondAmmo : weapon.ammo
  const entry = arr?.find(a => a.key === key)
  if (!entry) return ''
  const pts    = getEffAmmoPts(weapon, key, isSecond)
  const sign   = pts >= 0 ? '+' : ''
  const imgSrc = getAmmoImg(entry.key, arr, weapon.ammoType)
  const ptsCls = pts > 0 ? 'ammo-tag-pts-pos' : pts < 0 ? 'ammo-tag-pts-neg' : 'ammo-tag-pts-zero'
  const ptsHtml = pts !== 0 ? ` <span class="${ptsCls}">(${sign}${pts})</span>` : ''
  return `<span class="weapon-ammo-tag ammo-${entry.key}" data-ammo-key="${entry.key}"><span class="ammo-img-box"><img class="ammo-tag-icon" src="${imgSrc}" alt="" onerror="this.style.display='none'"></span>${entry.label}${ptsHtml}</span>`
}

function renderLoadout(loadout) {
  const container = document.getElementById('loadout-display')
  container.innerHTML = ''
  container.className = 'hs-loadout'

  // Primary card
  const primPts  = getWeaponPts(loadout.primary) + (getAmmoEntry(loadout.primary, loadout.primaryAmmo)?.pts ?? 0)
  const slotLbl  = T('lo_slot1')
  const primCard = document.createElement('div')
  primCard.className = `hs-weapon-card hs-primary cat-${loadout.primary.category}`
  primCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${slotLbl}</span>
      <div class="hs-slot-dots">${slotDots(loadout.primary.slots)}</div>
      <span class="hs-pts-badge${primPts < 0 ? ' negative' : ''}">${primPts >= 0 ? '+' : ''}${primPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">
        <img src="../assets/weapons/${loadout.primary.id}.png" class="weapon-img-card" alt="">
      </div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.primary.name}</div>
        <div class="hs-weapon-meta">${getFireMode(loadout.primary.fireMode)} · ${(loadout.primary.ammoType ?? '').toUpperCase()}</div>
        <div class="hs-ammo-row">
          ${loadout.primaryAmmo ? ammoTag(loadout.primary, loadout.primaryAmmo) : ''}
          ${loadout.primaryAmmo2 ? ammoTag(loadout.primary, loadout.primaryAmmo2) : ''}
          ${loadout.primaryAmmoB ? ammoTag(loadout.primary, loadout.primaryAmmoB, true) : ''}
        </div>
      </div>
    </div>`
  container.appendChild(primCard)
  primCard.querySelector('.weapon-img-card').onerror = function() {
    this.parentElement.innerHTML = getWeaponIcon(loadout.primary.category)
  }

  // Secondary card
  const secAmmo2pts = (loadout.secondary.dualAmmo && loadout.secondaryAmmo2)
    ? (loadout.secondary.secondAmmo?.find(a => a.key === loadout.secondaryAmmo2)?.pts ?? 0) : 0
  const secPts     = getWeaponPts(loadout.secondary) + (getAmmoEntry(loadout.secondary, loadout.secondaryAmmo)?.pts ?? 0) + secAmmo2pts
  const secSlotLbl = loadout.dualWield ? T('lo_dual') : T('lo_slot2')
  const secCard    = document.createElement('div')
  secCard.className = `hs-weapon-card hs-secondary cat-${loadout.secondary.category}`
  const dwIconHtml = loadout.dualWield
    ? `<div class="dual-wield-pair">
        <img src="../assets/weapons/${loadout.secondary.id}.png" class="weapon-img-card" style="width:42px" alt="">
        <img src="../assets/weapons/${loadout.secondary.id}.png" class="weapon-img-card" style="width:42px" alt="">
       </div>`
    : `<img src="../assets/weapons/${loadout.secondary.id}.png" class="weapon-img-card" alt="">`
  secCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${secSlotLbl}${!loadout.dualWield && state.settings.quartermasterEnabled ? ` · ${T('lo_qm')}` : ''}</span>
      <div class="hs-slot-dots">${slotDots(loadout.dualWield ? 2 : loadout.secondary.slots)}</div>
      <span class="hs-pts-badge${secPts < 0 ? ' negative' : ''}">${secPts >= 0 ? '+' : ''}${secPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">${dwIconHtml}</div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.secondary.name}${loadout.dualWield ? '<span class="dual-wield-badge">×2</span>' : ''}</div>
        <div class="hs-weapon-meta">${getFireMode(loadout.secondary.fireMode)} · ${(loadout.secondary.ammoType ?? '').toUpperCase()}</div>
        <div class="hs-ammo-row">
          ${loadout.secondaryAmmo ? ammoTag(loadout.secondary, loadout.secondaryAmmo) : ''}
          ${loadout.secondaryAmmo2 ? ammoTag(loadout.secondary, loadout.secondaryAmmo2, true) : ''}
          ${loadout.secondaryAmmoB ? ammoTag(loadout.secondary, loadout.secondaryAmmoB) : ''}
        </div>
      </div>
    </div>`
  container.appendChild(secCard)
  secCard.querySelectorAll('.weapon-img-card').forEach(img => {
    img.onerror = function() {
      if (!this.dataset.replaced) {
        this.dataset.replaced = '1'
        this.replaceWith(document.createRange().createContextualFragment(getWeaponIcon(loadout.secondary.category)))
      }
    }
  })

  // Melee
  if (loadout.melee) {
    const mel = document.createElement('div')
    mel.className = 'hs-melee-row'
    mel.innerHTML = `
      <div class="hs-melee-icon">${getWeaponIcon('slotMelee')}</div>
      <div class="hs-melee-info">
        <span class="hs-melee-label">${T('lo_melee_label')}</span>
        <span class="hs-melee-name">${loadout.melee.name}</span>
      </div>
      <span class="hs-melee-pts">+${getWeaponPts(loadout.melee)} PTS</span>`
    container.appendChild(mel)
  }

  // Tools & Consumables
  const tools       = loadout.tools       || []
  const consumables = loadout.consumables || []
  const util = document.createElement('div')
  util.className = 'hs-util-section'
  util.innerHTML = `
    <div class="hs-util-col">
      <div class="hs-util-header"><span class="hs-util-icon">⚙</span><span>${T('lo_tools')}</span><span class="hs-util-count">${tools.length}/4</span></div>
      <div class="hs-util-grid">${renderItemSlots(tools, 4)}</div>
    </div>
    <div class="hs-util-col">
      <div class="hs-util-header"><span class="hs-util-icon">✚</span><span>${T('lo_consumables')}</span><span class="hs-util-count">${consumables.length}/4</span></div>
      <div class="hs-util-grid">${renderItemSlots(consumables, 4)}</div>
    </div>`
  container.appendChild(util)

  // Slot bonuses
  {
    const weaponSl = (loadout.primary?.slots || 0) + (loadout.secondary?.slots || 0) + (loadout.dualWield ? 1 : 0)
    const emptySl  = Math.max(0, 4 - weaponSl)
    const emptyCons = Math.max(0, 4 - (loadout.consumables?.length || 0))
    if (emptySl > 0 || emptyCons > 0) {
      const bon = document.createElement('div')
      bon.className = 'hs-slot-bonus'
      const parts = []
      if (emptySl > 0)   parts.push(`<span class="slot-bonus-val">+${emptySl * 200} PTS</span><span class="slot-bonus-desc">${emptySl} ${emptySl > 1 ? T('lo_free_slots') : T('lo_free_slot')}</span>`)
      if (emptyCons > 0) parts.push(`<span class="slot-bonus-val">+${emptyCons * 100} PTS</span><span class="slot-bonus-desc">${emptyCons} ${T('bk_free_cons')}</span>`)
      bon.innerHTML = `<span class="slot-bonus-label">${T('lo_slot_bonus')}</span>${parts.join('<span class="slot-bonus-sep"> · </span>')}`
      container.appendChild(bon)
    }
  }

  const lbsEl = document.getElementById('loadout-base-score')
  if (lbsEl) lbsEl.textContent = (calcLoadoutScore(loadout) >= 0 ? '+' : '') + calcLoadoutScore(loadout)

  // Reroll button state
  const rb = document.getElementById('btn-reroll')
  if (rb) { rb.textContent = `${T('lo_reroll')} (${state.rerolls})`; rb.disabled = state.rerolls <= 0 }
}

function renderItemSlots(items, max) {
  const out = []
  for (let i = 0; i < max; i++) {
    if (i < items.length) {
      const it    = items[i]
      const isReq = it._forced || (it.required_setting && state.settings[it.required_setting])
      out.push(`<div class="hs-item-slot filled${isReq ? ' required' : ''}" data-item-id="${it.id}" style="position:relative">
        <img class="item-slot-icon" src="../assets/items/${it.id}.png" alt="" onerror="this.style.display='none'">
        <span class="item-slot-name">${it.name}</span>
      </div>`)
    } else {
      out.push(`<div class="hs-item-slot empty">—</div>`)
    }
  }
  return out.join('')
}

// ═══════════════════════════════════════════════════════════════════════════
// ARSENAL TABLE  (ammo as chips, no columns)
// ═══════════════════════════════════════════════════════════════════════════

function renderArsenalTable() {
  const container = document.getElementById('arsenal-content')
  if (!container) return

  function slotPips(n) {
    return Array.from({length:3}, (_,i) =>
      `<span class="slot-pip${i < n ? ' on' : ''}"></span>`
    ).join('')
  }

  function ammoChips(ammoArr, ammoType, weaponId) {
    if (!ammoArr?.length) return '<span class="ammo-na">—</span>'
    return ammoArr.map(a => {
      const storeKey = weaponId + '_ammo_' + a.key
      const effPts   = state.arsenalOverrides[storeKey] !== undefined ? state.arsenalOverrides[storeKey].pts : a.pts
      const cls      = effPts > 0 ? 'pos' : effPts < 0 ? 'neg' : 'zero'
      const imgSrc   = getAmmoImg(a.key, ammoArr, ammoType)
      const modified = effPts !== a.pts ? ' pts-modified' : ''
      return `<span class="ammo-chip ammo-chip-${cls}"><img class="ammo-chip-icon" src="${imgSrc}" alt="" onerror="this.style.display='none'">${a.label}<input type="number" class="ammo-pts-edit${modified}" value="${effPts}" data-wid="${weaponId}" data-key="${a.key}" data-default="${a.pts}" onchange="updateAmmoPts(this)" min="-200" max="500" step="5"></span>`
    }).join('')
  }

  function weaponRow(w) {
    const eff = getWeaponPts(w)
    const dual = w.dualAmmo ? ` <span class="arsenal-dual-badge">2x</span>` : ''
    const thumb = w.id
      ? `<img src="../assets/weapons/${w.id}.png" class="arsenal-thumb" alt="" onerror="this.style.display='none'">`
      : '—'
    return `<tr>
      <td class="col-thumb">${thumb}</td>
      <td class="arsenal-weapon-name">${w.name}${dual}</td>
      <td class="arsenal-slots">${slotPips(w.slots || 1)}</td>
      <td class="arsenal-type">${(w.ammoType || '').toUpperCase()}</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${eff}" data-id="${w.id}"
          data-default="${w.pts}" onchange="updateArsenalPts(this)" min="-200" max="500" step="10">
      </td>
      <td class="arsenal-firemode">${getFireMode(w.fireMode)}</td>
      <td class="arsenal-ammo-tags">${ammoChips(w.ammo, w.ammoType, w.id)}${w.dualAmmo ? `<br><span class="arsenal-dual-label">${T('ars_dual')} </span>` + ammoChips(w.secondAmmo, 'shell', w.id) : ''}</td>
    </tr>`
  }

  function itemRow(it, type) {
    const thumb = it.id
      ? `<img src="../assets/items/${it.id}.png" class="arsenal-thumb" alt="" onerror="this.style.display='none'">`
      : '—'
    const effKillPts = state.arsenalOverrides[it.id]?.killPts ?? it.killPts
    const modified   = effKillPts !== it.killPts ? ' pts-modified' : ''
    return `<tr>
      <td class="col-thumb">${thumb}</td>
      <td class="arsenal-weapon-name">${it.name}</td>
      <td class="arsenal-slots">—</td>
      <td class="arsenal-type">${type.toUpperCase()}</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input${modified}" value="${effKillPts}" data-id="${it.id}"
          data-default="${it.killPts}" onchange="updateItemKillPts(this)" min="0" max="1000" step="10">
      </td>
      <td class="arsenal-firemode">${it.required_setting ? '⚠ Pflicht' : 'Optional'}</td>
      <td class="arsenal-ammo-tags">—</td>
    </tr>`
  }

  function section(label, pool, noAmmo, isItems) {
    const rows = isItems
      ? pool.map(it => itemRow(it, label.includes('TOOL') ? 'tool' : 'consumable')).join('')
      : noAmmo
        ? pool.map(w => weaponRow(w)).join('')
        : pool.map(w => weaponRow(w)).join('')
    return `
      <div class="arsenal-section">
        <h3 class="arsenal-section-title">${label}</h3>
        <div class="arsenal-table-wrap">
          <table class="arsenal-table">
            <thead><tr>
              <th class="col-thumb"></th>
              <th class="col-name">${T('ars_col_weapon')}</th>
              <th class="col-slots">${T('ars_col_slots')}</th>
              <th class="col-type">${T('ars_col_type')}</th>
              <th class="col-pts">${T('ars_col_pts')}</th>
              <th class="col-mode">${T('ars_col_mode')}</th>
              <th class="col-ammo">${T('ars_col_ammo')}</th>
            </tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>`
  }

  container.innerHTML = ARSENAL_SECTIONS.map(s =>
    section(s.label, s.pool, s.noAmmo, s.items)
  ).join('')
}

async function updateArsenalPts(input) {
  const id  = input.dataset.id
  const def = Number(input.dataset.default)
  const val = Number(input.value)
  if (val === def) delete state.arsenalOverrides[id]
  else              state.arsenalOverrides[id] = { pts: val }
  input.classList.toggle('pts-modified', val !== def)
  await saveArsenal()
}

async function updateAmmoPts(input) {
  const wid      = input.dataset.wid
  const key      = input.dataset.key
  const def      = Number(input.dataset.default)
  const val      = Number(input.value)
  const storeKey = wid + '_ammo_' + key
  if (val === def) delete state.arsenalOverrides[storeKey]
  else             state.arsenalOverrides[storeKey] = { pts: val }
  const chip = input.closest('.ammo-chip')
  if (chip) chip.className = `ammo-chip ammo-chip-${val > 0 ? 'pos' : val < 0 ? 'neg' : 'zero'}`
  input.classList.toggle('pts-modified', val !== def)
  await saveArsenal()
}

async function updateItemKillPts(input) {
  const id  = input.dataset.id
  const def = Number(input.dataset.default)
  const val = Number(input.value)
  if (val === def) {
    if (state.arsenalOverrides[id]) {
      delete state.arsenalOverrides[id].killPts
      if (!Object.keys(state.arsenalOverrides[id]).length) delete state.arsenalOverrides[id]
    }
  } else {
    state.arsenalOverrides[id] = { ...(state.arsenalOverrides[id] || {}), killPts: val }
  }
  input.classList.toggle('pts-modified', val !== def)
  await saveArsenal()
}

// ═══════════════════════════════════════════════════════════════════════════
// RESULTS (preview score)
// ═══════════════════════════════════════════════════════════════════════════

function updatePreviewScore() {
  if (!state.currentRoundData) return
  const { total, breakdown } = calcRoundScore(state.currentRoundData.loadout, state.currentRoundData.results)
  const el = document.getElementById('preview-score')
  if (el) { el.textContent = (total >= 0 ? '+' : '') + total; el.classList.toggle('negative', total < 0) }
  const tip = document.getElementById('preview-breakdown-tooltip')
  if (tip) {
    const base = calcLoadoutScore(state.currentRoundData.loadout)
    const baseRow = `<div class="tooltip-row tooltip-base-row"><span>${T('lo_difficulty')}</span><span class="tooltip-pts-good">${base >= 0 ? '+' : ''}${base}</span></div>`
    const rows = breakdown.map(b =>
      `<div class="tooltip-row"><span>${b.label}</span><span class="${b.type === 'good' ? 'tooltip-pts-good' : 'tooltip-pts-bad'}">${b.pts >= 0 ? '+' : ''}${b.pts}</span></div>`
    ).join('')
    const totalRow = `<div class="tooltip-row tooltip-total-row"><span>TOTAL</span><span>${total >= 0 ? '+' : ''}${total}</span></div>`
    tip.innerHTML = baseRow + rows + totalRow
  }
}

// Left-click = +1, right-click = -1 via context menu prevention
function sumKillDict(k) {
  if (!k) return 0
  if (typeof k === 'object') return Object.values(k).reduce((s, v) => s + v, 0)
  return k || 0
}

function adjustResult(key, delta) {
  if (!state.currentRoundData) return
  let next = Math.max(0, state.currentRoundData.results[key] + delta)
  if (key === 'stylishKills' || key === 'headshots') {
    const r = state.currentRoundData.results
    const total = sumKillDict(r.primaryKills) + sumKillDict(r.secondaryKills) + (r.foreignKills || 0)
    next = Math.min(next, total)
  }
  state.currentRoundData.results[key] = next
  const el = document.getElementById(`res-${key}`)
  if (el) el.textContent = next
  updatePreviewScore()
}

function ctxResult(e, key) {
  e.preventDefault()
  adjustResult(key, -1)
}

function updateToggle(key, value) {
  if (!state.currentRoundData) return
  state.currentRoundData.results[key] = value
  updatePreviewScore()
}

// ═══════════════════════════════════════════════════════════════════════════
// HISTORY
// ═══════════════════════════════════════════════════════════════════════════

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', {
    day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit'
  })
}

function renderHistory() {
  const container = document.getElementById('history-list')
  if (!state.history.length) {
    container.innerHTML = `<div class="history-empty">${T('hist_empty')}</div>`
    return
  }
  container.innerHTML = [...state.history]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(run => {
      const kills  = run.rounds.reduce((s, r) => {
        const pk = r.results?.primaryKills
        const sk = r.results?.secondaryKills
        return s
          + (typeof pk === 'object' ? Object.values(pk).reduce((a,v) => a+v, 0) : pk || 0)
          + (typeof sk === 'object' ? Object.values(sk).reduce((a,v) => a+v, 0) : sk || 0)
          + (r.results?.foreignKills || 0)
          + (r.results?.kills || 0)
      }, 0)
      const deaths = run.rounds.reduce((s, r) => s + (r.results?.deaths || 0), 0)
      const kd     = deaths > 0 ? (kills / deaths).toFixed(2) : kills
      const sign   = run.totalScore >= 0 ? '+' : ''
      return `
        <div class="history-card" onclick="showRunDetail('${run.id}')">
          <div class="history-card-header">
            <span class="history-card-date">${formatDate(run.date)}</span>
            <span class="history-card-badge">${run.rounds.length} ${run.rounds.length !== 1 ? T('hist_rounds') : T('hist_round')}</span>
            <span class="history-card-score">${sign}${run.totalScore}</span>
          </div>
          <div class="history-card-body">
            <span class="history-stat">${T('hist_kills')} <strong>${kills}</strong></span>
            <span class="history-stat">${T('hist_deaths')} <strong>${deaths}</strong></span>
            <span class="history-stat">${T('hist_kd')} <strong>${kd}</strong></span>
            ${run.settings?.soloMode ? `<span class="history-stat text-gold">${T('hist_solo')}</span>` : ''}
          </div>
        </div>`
    }).join('')
}

function showRunDetail(runId) {
  const run = state.history.find(r => r.id === runId)
  if (!run) return
  document.getElementById('rd-title').textContent    = T('rd_title')
  document.getElementById('rd-subtitle').textContent = formatDate(run.date)
  const kills  = run.rounds.reduce((s,r) => {
    const pk = r.results?.primaryKills
    const sk = r.results?.secondaryKills
    return s
      + (typeof pk === 'object' ? Object.values(pk).reduce((a,v) => a+v, 0) : pk || 0)
      + (typeof sk === 'object' ? Object.values(sk).reduce((a,v) => a+v, 0) : sk || 0)
      + (r.results?.foreignKills || 0)
      + (r.results?.kills || 0)
  }, 0)
  const deaths = run.rounds.reduce((s,r) => s + (r.results?.deaths    || 0), 0)
  const hs     = run.rounds.reduce((s,r) => s + (r.results?.headshots || 0), 0)
  document.getElementById('run-detail-content').innerHTML = `
    <div class="run-detail-header-stats">
      <div class="rd-stat"><span class="rd-stat-val">${run.totalScore >= 0 ? '+' : ''}${run.totalScore}</span><span class="rd-stat-label">${T('rd_score')}</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${run.rounds.length}</span><span class="rd-stat-label">${T('rd_rounds')}</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${kills}</span><span class="rd-stat-label">${T('rd_kills')}</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${deaths}</span><span class="rd-stat-label">${T('rd_deaths')}</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${deaths > 0 ? (kills/deaths).toFixed(2) : kills}</span><span class="rd-stat-label">${T('rd_kd')}</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${hs}</span><span class="rd-stat-label">${T('rd_hs')}</span></div>
    </div>
    ${run.rounds.map(renderRoundCard).join('')}`
  showView('run-detail')
}

function renderRoundCard(round) {
  const sign = round.totalScore >= 0 ? '+' : ''
  const l = round.loadout, r = round.results
  const items = [...(l.tools||[]), ...(l.consumables||[]), ...(l.items||[])]
  return `
    <div class="round-detail-card">
      <div class="round-detail-header">
        <span class="round-detail-num">${T('rd_round')} ${round.roundNumber}</span>
        <span class="round-detail-score">${sign}${round.totalScore} PTS</span>
      </div>
      <div class="round-detail-body">
        <div class="rd-loadout-col">
          <span><strong>${T('res_primary')}</strong> ${l.primary?.name ?? '—'}</span>
          <span><strong>${T('res_secondary')}</strong> ${l.secondary?.name ?? '—'}</span>
          ${l.melee ? `<span><strong>${T('lo_melee_label')}</strong> ${l.melee.name}</span>` : ''}
          ${items.length ? `<span><strong>ITEMS</strong> ${items.map(i => i.name).join(', ')}</span>` : ''}
        </div>
        <div class="rd-results-col">
          <div class="rd-result-item"><span>${T('rd_kills_primary')}</span><span>${typeof r?.primaryKills === 'object' ? Object.values(r.primaryKills).reduce((s,v) => s+v, 0) : r?.primaryKills ?? r?.kills ?? 0}</span></div>
          <div class="rd-result-item"><span>${T('rd_kills_secondary')}</span><span>${typeof r?.secondaryKills === 'object' ? Object.values(r.secondaryKills).reduce((s,v) => s+v, 0) : r?.secondaryKills ?? 0}</span></div>
          ${(r?.stylishKills || 0) > 0 ? `<div class="rd-result-item"><span>Stylish Kills</span><span>${r.stylishKills}</span></div>` : ''}
          ${(r?.foreignKills || 0) > 0 ? `<div class="rd-result-item"><span>${T('rd_foreign')}</span><span>${r.foreignKills}</span></div>` : ''}
          <div class="rd-result-item"><span>Headshots</span><span>${r?.headshots ?? 0}</span></div>
          <div class="rd-result-item"><span>${T('rd_deaths_label')}</span><span>${r?.deaths ?? 0}</span></div>
          ${r?.firstDeath ? `<div class="rd-result-item text-bad"><span>${T('rd_first_death_label')}</span><span>−100</span></div>` : ''}
          <div class="rd-result-item"><span>Bounties</span><span>${r?.bounties ?? 0}</span></div>
        </div>
      </div>
    </div>`
}

// ═══════════════════════════════════════════════════════════════════════════
// SETTINGS UI
// ═══════════════════════════════════════════════════════════════════════════

function applySettingsToUI() {
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.checked = val }
  set('set-medkit',         state.settings.medkitRequired)
  set('set-melee',          state.settings.meleeRequired)
  set('set-choke',          state.settings.chokeRequired)
  set('set-healsyringe',    state.settings.healSyringeRequired)
  set('set-regenshot',      state.settings.regenShotRequired)
  set('set-solo',           state.settings.soloMode)
  set('set-quartermaster',  state.settings.quartermasterEnabled)
  set('set-marcel',         state.settings.marcelHypermode)
  set('set-shredder',       state.settings.includeShredder)
  set('set-flamerifle',     state.settings.includeFlameRifle)
  set('set-wildland',       state.settings.includeWildlandHomestead)
  set('set-tarotcards',     state.settings.includeTarotCards)
  set('set-scarceammo',     state.settings.includeScarceAmmo)
}

async function saveSetting(key, value) {
  state.settings[key] = value
  await saveSettings()
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════════════════════

function updateHomeUI() {
  document.getElementById('home-flavor-text').textContent = pick(FLAVOR_TEXTS[state.lang] || FLAVOR_TEXTS.de)
  const hasRun = !!state.currentRun
  document.getElementById('active-run-banner').classList.toggle('hidden', !hasRun)
  document.getElementById('btn-end-run').style.display = hasRun ? 'inline-flex' : 'none'
  if (hasRun) {
    const n = state.currentRun.rounds.length
    document.getElementById('active-run-info').textContent =
      `${n} ${n !== 1 ? T('hist_rounds') : T('hist_round')} ${T('home_rnd_played')} · ${state.currentRun.totalScore} Pts`
  }
  const s  = calcTotalStats()
  const qs = document.getElementById('home-quick-stats')
  if (state.history.length > 0) {
    const last = [...state.history].sort((a,b) => new Date(b.date)-new Date(a.date))[0]
    qs.innerHTML = `
      <div class="quick-stat-card"><span class="qs-val">${s.totalScore}</span><span class="qs-label">${T('home_total')}</span></div>
      <div class="quick-stat-card"><span class="qs-val">${state.history.length}</span><span class="qs-label">${T('home_loadouts')}</span></div>
      <div class="quick-stat-card"><span class="qs-val">${last.totalScore >= 0 ? '+' : ''}${last.totalScore}</span><span class="qs-label">${T('home_last_run')}</span></div>`
  } else { qs.innerHTML = '' }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAME FLOW
// ═══════════════════════════════════════════════════════════════════════════

function handleRandomize() {
  // Reset in-round mode if active from a previous round
  const confirmBtn = document.querySelector('.loadout-actions .btn-primary')
  if (confirmBtn) { confirmBtn.innerHTML = T('lo_confirm'); confirmBtn.onclick = confirmLoadout }
  const rerollBtn = document.getElementById('btn-reroll')
  if (rerollBtn) rerollBtn.style.display = ''
  const irp = document.getElementById('inline-results-panel')
  if (irp) irp.classList.add('hidden')
  const actBar = document.getElementById('loadout-actions-bar')
  if (actBar) actBar.classList.remove('hidden')

  if (!state.currentRun) {
    state.rerolls = 2
    state.currentRun = {
      id: `run_${Date.now()}`, date: new Date().toISOString(),
      rounds: [], totalScore: 0, settings: { ...state.settings },
    }
  }
  const loadout  = generateLoadout()
  const roundNum = state.currentRun.rounds.length + 1
  state.currentRoundData = {
    roundNumber: roundNum, loadout,
    results: { primaryKills:{}, secondaryKills:{}, stylishKills:0, foreignKills:0, worldMeleeKills:0, foreignConsumables:0, teamkills:0, headshots:0, deaths:0, firstDeath:false, failedExtract:false, bounties:0, itemUses:{} },
  }
  document.getElementById('loadout-round-label').textContent = `${T('round_label')} ${roundNum}`
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
  state.currentRoundData.results = {
    primaryKills: {}, secondaryKills: {}, stylishKills: 0, foreignKills: 0,
    foreignConsumables: 0, teamkills: 0,
    headshots: 0, deaths: 0, firstDeath: false, bounties: 0, itemUses: {},
  }
  const confirmBtn = document.querySelector('.loadout-actions .btn-primary')
  if (confirmBtn) { confirmBtn.innerHTML = T('lo_end_round'); confirmBtn.onclick = submitResults }
  const rerollBtn = document.getElementById('btn-reroll')
  if (rerollBtn) rerollBtn.style.display = 'none'
  const actBar = document.getElementById('loadout-actions-bar')
  if (actBar) actBar.classList.add('hidden')
  activateInRoundMode()
  activateItemTracking()
  // Show inline results panel
  const irp = document.getElementById('inline-results-panel')
  if (irp) {
    irp.classList.remove('hidden')
    ;['stylishKills','foreignKills','worldMeleeKills','foreignConsumables','teamkills','headshots','deaths','bounties'].forEach(k => {
      const el = document.getElementById(`res-${k}`)
      if (el) el.textContent = '0'
    })
    const fd = document.getElementById('res-first-death')
    if (fd) fd.checked = false
    const fe = document.getElementById('res-failed-extract')
    if (fe) fe.checked = false
    updatePreviewScore()
  }
}

function activateInRoundMode() {
  const container = document.getElementById('loadout-display')
  container.classList.add('hs-loadout--active')

  const primCard = container.querySelector('.hs-primary')
  const secCard  = container.querySelector('.hs-secondary')

  if (primCard) {
    const tags = primCard.querySelectorAll('.weapon-ammo-tag[data-ammo-key]')
    if (tags.length) tags.forEach(tag => addAmmoKillHandler(tag, 'primaryKills'))
    else             addLegacyKillHandler(primCard, 'primaryKills')
  }
  if (secCard) {
    const tags = secCard.querySelectorAll('.weapon-ammo-tag[data-ammo-key]')
    if (tags.length) tags.forEach(tag => addAmmoKillHandler(tag, 'secondaryKills'))
    else             addLegacyKillHandler(secCard, 'secondaryKills')
  }
}

function addAmmoKillHandler(tagEl, killsKey) {
  const ammoKey = tagEl.dataset.ammoKey
  tagEl.classList.add('ammo-tag--killable')
  const badge = document.createElement('span')
  badge.className = 'ammo-kill-badge'
  badge.textContent = '0'
  tagEl.appendChild(badge)
  tagEl.onclick = e => {
    e.stopPropagation()
    if (!state.currentRoundData) return
    const kills = state.currentRoundData.results[killsKey]
    kills[ammoKey] = (kills[ammoKey] || 0) + 1
    badge.textContent = kills[ammoKey]
    updatePreviewScore()
  }
  tagEl.oncontextmenu = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!state.currentRoundData) return
    const kills = state.currentRoundData.results[killsKey]
    kills[ammoKey] = Math.max(0, (kills[ammoKey] || 0) - 1)
    badge.textContent = kills[ammoKey]
    updatePreviewScore()
  }
}

function addLegacyKillHandler(card, killsKey) {
  card.classList.add('hs-card--killable')
  const badge = document.createElement('div')
  badge.className = 'kill-counter-badge'
  badge.textContent = '0'
  const iconEl = card.querySelector('.hs-weapon-icon')
  if (iconEl) iconEl.appendChild(badge)
  const getTotal = () => {
    const k = state.currentRoundData?.results[killsKey]
    return typeof k === 'object' ? Object.values(k).reduce((s,v) => s+v, 0) : k || 0
  }
  card.onclick = () => {
    if (!state.currentRoundData) return
    const kills = state.currentRoundData.results[killsKey]
    kills['_'] = (kills['_'] || 0) + 1
    badge.textContent = getTotal()
    updatePreviewScore()
  }
  card.oncontextmenu = e => {
    e.preventDefault()
    if (!state.currentRoundData) return
    const kills = state.currentRoundData.results[killsKey]
    kills['_'] = Math.max(0, (kills['_'] || 0) - 1)
    badge.textContent = getTotal()
    updatePreviewScore()
  }
}

function activateItemTracking() {
  const container = document.getElementById('loadout-display')
  const loadout   = state.currentRoundData.loadout
  const allItems  = [...(loadout.tools || []), ...(loadout.consumables || [])]

  container.querySelectorAll('.hs-item-slot.filled[data-item-id]').forEach(slot => {
    const itemId = slot.dataset.itemId
    const item   = allItems.find(it => it.id === itemId)
    if (!item) return

    slot.classList.add('hs-item--trackable')

    const badge = document.createElement('div')
    badge.className = 'item-counter-badge'
    badge.textContent = '0'
    slot.appendChild(badge)

    slot.onclick = () => {
      if (!state.currentRoundData) return
      const uses = state.currentRoundData.results.itemUses
      uses[itemId] = (uses[itemId] || 0) + 1
      badge.textContent = uses[itemId]
      updatePreviewScore()
    }
    slot.oncontextmenu = e => {
      e.preventDefault()
      if (!state.currentRoundData) return
      const uses = state.currentRoundData.results.itemUses
      uses[itemId] = Math.max(0, (uses[itemId] || 0) - 1)
      badge.textContent = uses[itemId]
      updatePreviewScore()
    }
  })
}

function endRound() {
  submitResults()
}

function renderResultsWeaponCards() {
  const container = document.getElementById('results-weapon-cards')
  if (container) container.innerHTML = ''
}

function adjustBounties(delta) {
  if (!state.currentRoundData) return
  const max  = state.settings.soloMode ? 2 : 4
  const next = Math.max(0, Math.min(max, (state.currentRoundData.results.bounties || 0) + delta))
  state.currentRoundData.results.bounties = next
  const el = document.getElementById('res-bounties')
  if (el) el.textContent = next
  updatePreviewScore()
}

function ctxBounties(e) {
  e.preventDefault()
  adjustBounties(-1)
}

function resetResultsForm() {
  if (state.currentRoundData) {
    state.currentRoundData.results = { primaryKills:{}, secondaryKills:{}, stylishKills:0, foreignKills:0, headshots:0, deaths:0, firstDeath:false, bounties:0, itemUses:{} }
  }
  ;['stylishKills','foreignKills','foreignConsumables','teamkills','headshots','deaths','bounties'].forEach(k => {
    const el = document.getElementById(`res-${k}`)
    if (el) el.textContent = '0'
  })
  const fd = document.getElementById('res-first-death')
  if (fd) fd.checked = false
}

async function submitResults() {
  if (!state.currentRoundData || !state.currentRun) return
  const { loadout, results, roundNumber } = state.currentRoundData
  const { total, breakdown }             = calcRoundScore(loadout, results)

  state.currentRun.rounds.push({
    id: `round_${Date.now()}`, roundNumber, loadout, results,
    totalScore: total, loadoutScore: calcLoadoutScore(loadout), breakdown,
  })
  state.currentRun.totalScore += total

  state.totalRoundsCompleted++
  const prev = Math.floor((state.totalRoundsCompleted - 1) / 3)
  const curr = Math.floor(state.totalRoundsCompleted / 3)
  if (curr > prev) state.rerolls++

  await saveSettings()

  const sc = document.getElementById('rc-round-score')
  sc.textContent = (total >= 0 ? '+' : '') + total
  sc.className   = 'round-score-value' + (total < 0 ? ' negative' : '')
  document.getElementById('rc-run-total').textContent =
    (state.currentRun.totalScore >= 0 ? '+' : '') + state.currentRun.totalScore
  document.getElementById('rc-breakdown').innerHTML = breakdown.map(b => {
    return `<span class="breakdown-item ${b.type}">${b.label}: ${b.pts >= 0 ? '+' : ''}${b.pts}</span>`
  }).join('')

  updateStatsBar()
  showView('round-complete')
}

function handleNextRound() { handleRandomize() }

async function handleEndRun() {
  if (!state.currentRun) { showView('home'); return }
  if (state.currentRun.rounds.length === 0) { state.currentRun = null; showView('home'); return }
  state.history.push({ ...state.currentRun, status:'completed' })
  state.currentRun = null; state.currentRoundData = null
  await saveHistory(); updateStatsBar(); showView('home')
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
function closeModal() { document.getElementById('modal-overlay').classList.add('hidden') }

async function confirmResetData() {
  openModal('ALLE DATEN LÖSCHEN',
    'Diese Aktion löscht alle Läufe und Statistiken unwiderruflich. Bist du sicher?',
    async () => {
      state.history = []; state.currentRun = null; state.currentRoundData = null
      state.rerolls = 2; state.totalRoundsCompleted = 0
      await saveHistory(); await saveSettings(); updateStatsBar(); showView('home')
    })
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
  document.documentElement.lang = state.lang
  applyTranslations()
  showView('home')
}

init()
