'use strict'

// ═══════════════════════════════════════════════════════════════════════════
// AMMO FACTORY
// ═══════════════════════════════════════════════════════════════════════════

const A = {
  // Standard
  std:  (p=0)   => ({ key:'standard',    label:'Standard',        pts:p }),
  // Long/rifle modifiers
  spit: (p=-5)  => ({ key:'spitzer',     label:'Spitzer',         pts:p }),
  fmj:  (p=-5)  => ({ key:'fmj',         label:'FMJ',             pts:p }),
  dum:  (p=-10) => ({ key:'dumdum',       label:'Dumdum',          pts:p }),
  hv:   (p=-5)  => ({ key:'hv',           label:'High Velocity',  pts:p }),
  poi:  (p=20)  => ({ key:'poison',       label:'Poison',          pts:p }),
  exp:  (p=30)  => ({ key:'explosive',    label:'Explosive',       pts:p }),
  inc:  (p=15)  => ({ key:'incendiary',   label:'Incendiary',      pts:p }),
  slug: (p=10)  => ({ key:'slug',         label:'Slug',            pts:p }),
  sub:  (p=10)  => ({ key:'subsonic',     label:'Subsonic',        pts:p }),
  fle:  (p=5)   => ({ key:'flechette',    label:'Flechette',       pts:p }),
  star: (p=20)  => ({ key:'starshell',    label:'Starshell',       pts:p }),
  pen:  (p=5)   => ({ key:'pennyshot',    label:'Penny Shot',      pts:p }),
  db:   (p=15)  => ({ key:'dragonsbreath',label:'Dragonsbreath',   pts:p }),
  // Crossbow bolts
  bolt:   (p=0)  => ({ key:'bolt',        label:'Bolt',            pts:p }),
  ebolt:  (p=30) => ({ key:'expbolt',     label:'Exp. Bolt',       pts:p }),
  sbolt:  (p=5)  => ({ key:'shotbolt',    label:'Shot Bolt',       pts:p }),
  stbolt: (p=5)  => ({ key:'steelbolt',   label:'Steel Bolt',      pts:p }),
  // Compact crossbow bolts
  cbolt:  (p=0)  => ({ key:'cbolt',       label:'Comp. Bolt',      pts:p }),
  cebolt: (p=30) => ({ key:'cexpbolt',    label:'C.Exp. Bolt',     pts:p }),
  cibolt: (p=15) => ({ key:'cibolt',      label:'C.Inc. Bolt',     pts:p }),
  chkblt: (p=10) => ({ key:'chokebolt',   label:'Choke Bolt',      pts:p }),
  poicbt: (p=20) => ({ key:'poisoncbolt', label:'Poison C.Bolt',   pts:p }),
  dbcbt:  (p=20) => ({ key:'dbcbolt',     label:'DB Comp.Bolt',    pts:p }),
  // Arrows
  arr:    (p=0)  => ({ key:'arrow',       label:'Arrow',           pts:p }),
  parr:   (p=20) => ({ key:'poisonarr',   label:'Poison Arrow',    pts:p }),
  farr:   (p=25) => ({ key:'fragarr',     label:'Frag Arrow',      pts:p }),
  concarr:(p=15) => ({ key:'concarr',     label:'Conc. Arrow',     pts:p }),
  // Lance / special charges
  lance:  (p=0)  => ({ key:'lance',       label:'Lance Bolt',      pts:p }),
  harp:   (p=20) => ({ key:'harpoon',     label:'Harpoon',         pts:p }),
  stball: (p=10) => ({ key:'steelball',   label:'Steel Ball',      pts:p }),
  wfrag:  (p=25) => ({ key:'waxedfrag',   label:'Waxed Frag',      pts:p }),
  dbch:   (p=20) => ({ key:'dbcharge',    label:'DB Charge',       pts:p }),
  // Unique
  dolch:  (p=0)  => ({ key:'dolchammo',   label:'Dolch Ammo',      pts:p }),
  nitro:  (p=0)  => ({ key:'nitro',       label:'Nitro Ammo',      pts:p }),
}

// ── Ammo preset functions (called per weapon so each gets its own array) ──
const LA = {
  SPARKS:   () => [A.std(), A.spit(), A.inc(), A.exp()],
  MARTINI:  () => [A.std(), A.fmj(),  A.dum(), A.hv()],
  MOSIN:    () => [A.std(), A.spit(), A.fmj(), A.exp()],
  KRAG:     () => [A.std(), A.spit(), A.fmj(), A.poi()],
  LEBEL:    () => [A.std(), A.spit(), A.fmj(), A.poi()],
  MAKO:     () => [A.std(), A.spit(), A.fmj(), A.exp()],
  BERTHIER: () => [A.std(), A.poi(),  A.fmj(), A.spit()],
  OBREZ:    () => [A.std(), A.spit(), A.fmj(), A.exp()],
  UPPERCUT: () => [A.std(), A.spit(), A.dum()],
  SPARKS_P: () => [A.std(), A.inc(),  A.exp()],
}
const MA = {
  SPR66:    () => [A.std(), A.dum(-20), A.hv(-5), A.poi(30), A.exp(50)],
  CENT:     () => [A.std(), A.hv(),  A.dum()],
  C1865:    () => [A.std(), A.hv(),  A.dum()],
  VETT:     () => [A.std(), A.poi(), A.inc()],
  DRILL:    () => [A.std(), A.fmj(), A.dum(), A.hv(), A.inc()],
  MAYNARD:  () => [A.std(), A.hv(),  A.spit()],
  WILDLAND: () => [A.std(), A.hv(),  A.poi()],
  SCOTTFP:  () => [A.std(), A.fmj(), A.dum(), A.poi()],
  CENTS:    () => [A.std(), A.hv(),  A.dum()],
  SPR66S:   () => [A.std(), A.dum(-20), A.hv(-5)],
  DRILLS:   () => [A.std(), A.fmj(), A.dum(), A.hv()],
  PAX:      () => [A.std(), A.dum(), A.fmj(), A.hv()],
  SCOTTF:   () => [A.std(), A.fmj(), A.dum(), A.poi()],
}
const SA = {
  MARATHON: () => [A.std(), A.fmj(), A.dum(), A.hv(), A.poi()],
  INF73:    () => [A.std(), A.fmj(), A.hv(),  A.dum()],
  RANGER:   () => [A.std(), A.hv(),  A.dum(), A.fmj()],
  LEMAT_C:  () => [A.std(), A.fmj(), A.dum()],
  OFF_C:    () => [A.std(), A.spit(),A.fmj()],
  FRONT73:  () => [A.std(), A.hv(),  A.dum(), A.fmj()],
  BORNHEIM: () => [A.std(), A.fmj(), A.dum()],
  NAGANT:   () => [A.std(), A.fmj(), A.dum(), A.poi()],
  NAGANT_D: () => [A.std(), A.fmj(), A.spit()],
  VANDAL:   () => [A.std(), A.hv(),  A.dum(), A.fmj()],
  CONV:     () => [A.std(), A.spit(),A.dum()],
  LEMAT:    () => [A.std(), A.fmj(), A.dum()],
  NEW_ARMY: () => [A.std(), A.fmj(), A.dum(), A.poi()],
  OFFICER:  () => [A.std(), A.spit(),A.fmj(), A.poi()],
  DOLCH96:  () => [A.dolch(), A.fmj()],
  SH2ND:    () => [A.std(), A.inc(), A.slug()], // LeMat secondary barrel
}
const SH = {
  AUTO5:    () => [A.std(), A.inc(), A.fmj()],
  HOME78:   () => [A.std(), A.inc(), A.slug()],
  RIVAL:    () => [A.std(), A.inc(), A.exp(), A.slug()],
  ROMERO:   () => [A.std(), A.inc(), A.exp(), A.slug()],
  SLATE:    () => [A.std(), A.inc(), A.slug(), A.fle()],
  SPECTER:  () => [A.std(), A.inc(), A.fmj(), A.slug()],
  TERMINUS: () => [A.std(), A.inc(), A.exp()],
}
const SP = {
  NITRO:   () => [A.nitro()],
  CROSS:   () => [A.bolt(), A.ebolt(), A.sbolt(), A.stbolt()],
  CHUKONU: () => [A.cbolt(), A.cebolt(), A.cibolt(), A.chkblt(), A.poicbt(), A.dbcbt()],
  BOW:     () => [A.arr(), A.parr(), A.farr(), A.concarr()],
  LANCE:   () => [A.lance(), A.harp(), A.stball(), A.wfrag(), A.dbch()],
  DOLCH:   () => [A.dolch(), A.fmj()],
  HBOW:    () => [A.cbolt(), A.cebolt(), A.poicbt()],
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
  W('sparks_lrr',           'Sparks LRR',                  3,'long', LA.SPARKS,  'Einzelschuss'),
  W('sparks_lrr_sniper',    'Sparks LRR Sniper',           3,'long', LA.SPARKS,  'Einzelschuss'),
  W('sparks_lrr_silencer',  'Sparks LRR Silencer',         3,'long', LA.SPARKS,  'Einzelschuss'),
  W('martini_ic1',          'Martini Henry IC1',           3,'long', LA.MARTINI, 'Einzelschuss'),
  W('martini_ironside',     'Martini Henry IC1 Ironside',  3,'long', LA.MARTINI, 'Einzelschuss'),
  W('martini_deadeye',      'Martini Henry IC1 Deadeye',   3,'long', LA.MARTINI, 'Einzelschuss'),
  W('martini_marksman',     'Martini Henry IC1 Marksman',  3,'long', LA.MARTINI, 'Einzelschuss'),
  W('martini_riposte',      'Martini Henry IC1 Riposte',   3,'long', LA.MARTINI, 'Einzelschuss'),
  W('mosin_m1891',          'Mosin-Nagant M1891',          3,'long', LA.MOSIN,   'Repetier'),
  W('mosin_m1891_bay',      'Mosin-Nagant M1891 Bayonet',  3,'long', LA.MOSIN,   'Repetier'),
  W('mosin_m1891_sniper',   'Mosin-Nagant M1891 Sniper',   3,'long', LA.MOSIN,   'Repetier'),
  W('mosin_m1891_avtom',    'Mosin-Nagant M1891 Avtomat',  3,'long', LA.MOSIN,   'Vollautomat'),
  W('krag',                 'Springfield M1892 Krag',      3,'long', LA.KRAG,    'Repetier'),
  W('krag_bayonet',         'Springfield M1892 Krag Bay.', 3,'long', LA.KRAG,    'Repetier'),
  W('krag_sniper',          'Springfield M1892 Krag Sniper',3,'long',LA.KRAG,    'Repetier'),
  W('krag_silencer',        'Springfield M1892 Krag Sil.', 3,'long', LA.KRAG,    'Repetier'),
  W('lebel_1886',           'Lebel 1886',                  3,'long', LA.LEBEL,   'Repetier'),
  W('lebel_talon',          'Lebel 1886 Talon',            3,'long', LA.LEBEL,   'Repetier'),
  W('lebel_marksman',       'Lebel 1886 Marksman',         3,'long', LA.LEBEL,   'Repetier'),
  W('lebel_aperture',       'Lebel 1886 Aperture',         3,'long', LA.LEBEL,   'Repetier'),
  W('mako_1895',            'Mako 1895',                   3,'long', LA.MAKO,    'Hebel-Repetier'),
  W('mako_aperture',        'Mako 1895 Aperture',          3,'long', LA.MAKO,    'Hebel-Repetier'),
  W('mako_claw',            'Mako 1895 Claw',              3,'long', LA.MAKO,    'Hebel-Repetier'),
  W('berthier_1892',        'Berthier Mle 1892',           3,'long', LA.BERTHIER,'Repetier'),
  W('berthier_deadeye',     'Berthier Mle 1892 Deadeye',   3,'long', LA.BERTHIER,'Repetier'),
  W('berthier_marksman',    'Berthier Mle 1892 Marksman',  3,'long', LA.BERTHIER,'Repetier'),
  W('berthier_riposte',     'Berthier Mle 1892 Riposte',   3,'long', LA.BERTHIER,'Repetier'),
  W('mosin_obrez_match',    'Mosin Obrez Match',           3,'long', LA.OBREZ,   'Einzelschuss'),
  W('mosin_obrez_sharpeye', 'Mosin Obrez Sharpeye',        3,'long', LA.OBREZ,   'Einzelschuss'),
]

const MED3 = [
  W('c1865',                '1865 Carbine',                3,'medium',MA.C1865,   'Hebel-Repetier'),
  W('c1865_silencer',       '1865 Carbine Silencer',       3,'medium',MA.C1865,   'Hebel-Repetier'),
  W('c1865_aperture',       '1865 Carbine Aperture',       3,'medium',MA.C1865,   'Hebel-Repetier'),
  W('centennial',           'Centennial',                  3,'medium',MA.CENT,    'Hebel-Repetier'),
  W('centennial_sniper',    'Centennial Sniper',           3,'medium',MA.CENT,    'Hebel-Repetier'),
  W('centennial_trauma',    'Centennial Trauma',           3,'medium',MA.CENT,    'Hebel-Repetier'),
  W('drilling',             'Drilling',                    3,'medium',MA.DRILL,   'Einzelschuss'),
  W('maynard_sniper',       'Maynard Sniper',              3,'medium',MA.MAYNARD, 'Repetier'),
  W('maynard_sniper_sil',   'Maynard Sniper Silencer',     3,'medium',MA.MAYNARD, 'Repetier'),
  W('springfield_1866',     'Springfield 1866',            3,'medium',MA.SPR66,   'Einzelschuss'),
  W('springfield_1866_mark','Springfield 1866 Marksman',   3,'medium',MA.SPR66,   'Einzelschuss'),
  W('springfield_1866_bay', 'Springfield 1866 Bayonet',    3,'medium',MA.SPR66,   'Einzelschuss'),
  W('vetterli_71',          'Vetterli 71',                 3,'medium',MA.VETT,    'Hebel-Repetier'),
  W('vetterli_71_bay',      'Vetterli 71 Bayonet',         3,'medium',MA.VETT,    'Hebel-Repetier'),
  W('vetterli_71_deadeye',  'Vetterli 71 Deadeye',         3,'medium',MA.VETT,    'Hebel-Repetier'),
  W('vetterli_71_marksman', 'Vetterli 71 Marksman',        3,'medium',MA.VETT,    'Hebel-Repetier'),
  W('vetterli_71_silencer', 'Vetterli 71 Silencer',        3,'medium',MA.VETT,    'Hebel-Repetier'),
  W('wildland',             'Wildland',                    3,'medium',MA.WILDLAND,'Repetier', 'rifle', {optional:'includeWildlandHomestead'}),
]

const SMALL3 = [
  W('marathon',             'Marathon',                    3,'small', SA.MARATHON,'Hebel-Repetier'),
  W('marathon_swift',       'Marathon Swift',              3,'small', SA.MARATHON,'Hebel-Repetier'),
  W('infantry_73l',         'Infantry 73L',                3,'small', SA.INF73,   'Hebel-Repetier'),
  W('infantry_73l_bay',     'Infantry 73L Bayonet',        3,'small', SA.INF73,   'Hebel-Repetier'),
  W('infantry_73l_sniper',  'Infantry 73L Sniper',         3,'small', SA.INF73,   'Hebel-Repetier'),
  W('ranger_73',            'Ranger 73',                   3,'small', SA.RANGER,  'Hebel-Repetier'),
  W('ranger_73_aperture',   'Ranger 73 Aperture',          3,'small', SA.RANGER,  'Hebel-Repetier'),
  W('ranger_73_talon',      'Ranger 73 Talon',             3,'small', SA.RANGER,  'Hebel-Repetier'),
  W('ranger_73_swift',      'Ranger 73 Swift',             3,'small', SA.RANGER,  'Hebel-Repetier'),
  W('lemat_carbine',        'LeMat Carbine',               3,'small', SA.LEMAT_C, 'Hebel-Repetier', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('lemat_carbine_mark',   'LeMat Carbine Marksman',      3,'small', SA.LEMAT_C, 'Hebel-Repetier', 'rifle',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('officer_carbine',      'Officer Carbine',             3,'small', SA.OFF_C,   'Hebel-Repetier'),
  W('officer_carbine_de',   'Officer Carbine Deadeye',     3,'small', SA.OFF_C,   'Hebel-Repetier'),
  W('frontier_73c',         'Frontier 73C',                3,'small', SA.FRONT73, 'Hebel-Repetier'),
  W('frontier_73c_sil',     'Frontier 73C Silencer',       3,'small', SA.FRONT73, 'Hebel-Repetier'),
  W('frontier_73c_mark',    'Frontier 73C Marksman',       3,'small', SA.FRONT73, 'Hebel-Repetier'),
]

const LONG2 = [
  W('haymaker',             'Haymaker',                    2,'long', LA.OBREZ,   'Einzelschuss'),
  W('mosin_obrez',          'Mosin Obrez',                 2,'long', LA.OBREZ,   'Einzelschuss'),
  W('mosin_obrez_mace',     'Mosin Obrez Mace',            2,'long', LA.OBREZ,   'Einzelschuss'),
  W('mosin_obrez_ext',      'Mosin Obrez Extended',        2,'long', LA.OBREZ,   'Einzelschuss'),
  W('uppercut_precision',   'Uppercut Precision',          2,'long', LA.UPPERCUT,'Einzelschuss','pistol'),
  W('uppercut_deadeye',     'Uppercut Deadeye',            2,'long', LA.UPPERCUT,'Einzelschuss','pistol'),
]

const MED2 = [
  W('scottfield_prec',      'Scottfield Precision',        2,'medium',MA.SCOTTFP,'Revolver','pistol'),
  W('drilling_shorty',      'Drilling Shorty',             2,'medium',MA.DRILLS, 'Einzelschuss'),
  W('drilling_hatchet',     'Drilling Hatchet',            2,'medium',MA.DRILLS, 'Einzelschuss'),
  W('springfield_1866_sh',  'Springfield 1866 Shorty',     2,'medium',MA.SPR66S, 'Einzelschuss'),
  W('springfield_1866_str', 'Springfield 1866 Striker',    2,'medium',MA.SPR66S, 'Einzelschuss'),
  W('springfield_1866_bull','Springfield 1866 Bullseye',   2,'medium',MA.SPR66S, 'Einzelschuss'),
  W('centennial_shorty',    'Centennial Shorty',           2,'medium',MA.CENTS,  'Hebel-Repetier'),
  W('centennial_shorty_sil','Centennial Shorty Silencer',  2,'medium',MA.CENTS,  'Hebel-Repetier'),
]

const SMALL2 = [
  W('bornheim_match',       'Bornheim No. 3 Match',        2,'small', SA.BORNHEIM,'Vollautomat','pistol'),
  W('nagant_prec',          'Nagant M1895 Precision',      2,'small', SA.NAGANT,  'Revolver','pistol'),
  W('nagant_deadeye',       'Nagant M1895 Deadeye',        2,'small', SA.NAGANT_D,'Revolver','pistol'),
  W('vandal_73c',           'Vandal 73C',                  2,'small', SA.VANDAL,  'Hebel-Repetier'),
  W('vandal_73c_striker',   'Vandal 73C Striker',          2,'small', SA.VANDAL,  'Hebel-Repetier'),
  W('vandal_73c_bullseye',  'Vandal 73C Bullseye',         2,'small', SA.VANDAL,  'Hebel-Repetier'),
]

const LONG1 = [
  W('sparks_pistol',        'Sparks Pistol',               1,'long', LA.SPARKS_P,'Einzelschuss','pistol'),
  W('sparks_pistol_sil',    'Sparks Pistol Silencer',      1,'long', LA.SPARKS_P,'Einzelschuss','pistol'),
  W('uppercut',             'Uppercut',                    1,'long', LA.UPPERCUT,'Einzelschuss','pistol'),
]

const MED1 = [
  W('pax',                  'Pax',                         1,'medium',MA.PAX,    'Revolver','pistol'),
  W('pax_claw',             'Pax Claw',                    1,'medium',MA.PAX,    'Revolver','pistol'),
  W('pax_trueshot',         'Pax Trueshot',                1,'medium',MA.PAX,    'Revolver','pistol'),
  W('scottfield',           'Scottfield',                  1,'medium',MA.SCOTTF, 'Revolver','pistol'),
  W('scottfield_brawler',   'Scottfield Brawler',          1,'medium',MA.SCOTTF, 'Revolver','pistol'),
  W('scottfield_spitfire',  'Scottfield Spitfire',         1,'medium',MA.SCOTTF, 'Revolver','pistol'),
  W('scottfield_swift',     'Scottfield Swift',            1,'medium',MA.SCOTTF, 'Revolver','pistol'),
]

const SMALL1 = [
  W('bornheim_no3',         'Bornheim No. 3',              1,'small', SA.BORNHEIM,'Vollautomat','pistol'),
  W('bornheim_no3_sil',     'Bornheim No. 3 Silencer',     1,'small', SA.BORNHEIM,'Vollautomat','pistol'),
  W('bornheim_no3_ext',     'Bornheim No. 3 Extended',     1,'small', SA.BORNHEIM,'Vollautomat','pistol'),
  W('conversion',           'Conversion',                  1,'small', SA.CONV,   'Einzelschuss','pistol'),
  W('conversion_chain',     'Conversion Chain Pistol',     1,'small', SA.CONV,   'Einzelschuss','pistol'),
  W('lemat',                'LeMat',                       1,'small', SA.LEMAT,  'Revolver','pistol',
    {dualAmmo:true, secondAmmoLabel:'Schrotlauf', secondAmmo:SA.SH2ND()}),
  W('nagant_m1895',         'Nagant M1895',                1,'small', SA.NAGANT, 'Revolver','pistol'),
  W('nagant_m1895_sil',     'Nagant M1895 Silencer',       1,'small', SA.NAGANT, 'Revolver','pistol'),
  W('new_army',             'New Army',                    1,'small', SA.NEW_ARMY,'Revolver','pistol'),
  W('new_army_swift',       'New Army Swift',              1,'small', SA.NEW_ARMY,'Revolver','pistol'),
  W('officer',              'Officer',                     1,'small', SA.OFFICER,'Revolver','pistol'),
  W('officer_brawler',      'Officer Brawler',             1,'small', SA.OFFICER,'Revolver','pistol'),
]

const SHOTGUNS = [
  W('auto_5',               'Auto 5',                      3,'medium',SH.AUTO5,  'Halbautomatik','shotgun'),
  W('auto4_shorty',         'Auto-4 Shorty',               2,'medium',SH.AUTO5,  'Halbautomatik','shotgun'),
  W('homestead_78',         'Homestead 78',                3,'medium',SH.HOME78, 'Einzelschuss','shotgun',  {optional:'includeWildlandHomestead'}),
  W('rival_78',             'Rival 78',                    3,'medium',SH.RIVAL,  'Einzelschuss','shotgun'),
  W('rival_78_shorty',      'Rival 78 Shorty',             2,'medium',SH.RIVAL,  'Einzelschuss','shotgun'),
  W('rival_78_trauma',      'Rival 78 Trauma',             3,'medium',SH.RIVAL,  'Einzelschuss','shotgun'),
  W('rival_78_mace',        'Rival 78 Mace',               2,'medium',SH.RIVAL,  'Einzelschuss','shotgun'),
  W('romero_77',            'Romero 77',                   3,'medium',SH.ROMERO, 'Einzelschuss','shotgun'),
  W('romero_77_shorty',     'Romero 77 Shorty',            2,'medium',SH.ROMERO, 'Einzelschuss','shotgun'),
  W('romero_77_talon',      'Romero 77 Talon',             3,'medium',SH.ROMERO, 'Einzelschuss','shotgun'),
  W('romero_77_hatchet',    'Romero 77 Hatchet',           2,'medium',SH.ROMERO, 'Einzelschuss','shotgun'),
  W('romero_77_alamo',      'Romero 77 Alamo',             3,'medium',SH.ROMERO, 'Einzelschuss','shotgun'),
  W('slate',                'Slate',                       3,'medium',SH.SLATE,  'Pump-Action','shotgun'),
  W('slate_riposte',        'Slate Riposte',               3,'medium',SH.SLATE,  'Pump-Action','shotgun'),
  W('specter_1882',         'Specter 1882',                3,'medium',SH.SPECTER,'Pump-Action','shotgun'),
  W('specter_1882_shorty',  'Specter 1882 Shorty',         2,'medium',SH.SPECTER,'Pump-Action','shotgun'),
  W('specter_1882_bay',     'Specter 1882 Bayonet',        3,'medium',SH.SPECTER,'Pump-Action','shotgun'),
  W('terminus',             'Terminus',                    3,'medium',SH.TERMINUS,'Hebel-Repetier','shotgun'),
  W('terminus_shorty',      'Terminus Shorty',             2,'medium',SH.TERMINUS,'Hebel-Repetier','shotgun'),
]

const SPECIAL = [
  W('bomb_lance',           'Bomb Lance',                  3,'special',SP.LANCE, 'Einzelschuss','special'),
  W('bomb_launcher',        'Bomb Launcher',               2,'special',SP.LANCE, 'Einzelschuss','special'),
  W('chu_ko_nu',            'Chu Ko Nu',                   2,'special',SP.CHUKONU,'Repetier','special'),
  W('crossbow',             'Crossbow',                    3,'special',SP.CROSS, 'Einzelschuss','special'),
  W('crossbow_deadeye',     'Crossbow Deadeye',            3,'special',SP.CROSS, 'Einzelschuss','special'),
  W('dolch_96',             'Dolch 96',                    1,'special',SP.DOLCH, 'Vollautomat','pistol'),
  W('dolch_96_claw',        'Dolch 96 Claw',               1,'special',SP.DOLCH, 'Vollautomat','pistol'),
  W('dolch_96_bullseye',    'Dolch 96 Bullseye',           1,'special',SP.DOLCH, 'Vollautomat','pistol'),
  W('dolch_96_precision',   'Dolch 96 Precision',          2,'special',SP.DOLCH, 'Vollautomat','pistol'),
  W('handcrossbow',         'Handcrossbow',                1,'special',SP.HBOW,  'Einzelschuss','special'),
  W('hunting_bow',          'Hunting Bow',                 2,'special',SP.BOW,   'Einzelschuss','special'),
  W('nitro_express',        'Nitro Express',               3,'special',SP.NITRO, 'Einzelschuss','special'),
]

const EVENT = [
  W('shredder',             'Shredder',                    3,'special',SP.DOLCH,  'Halbautomatik','special', {event:true, optional:'includeShredder'}),
  W('flame_rifle',          'Flame Rifle',                 2,'special',() => [A.std()], 'Halbautomatik','special', {event:true, optional:'includeFlameRifle'}),
]

const SLOTTED_MELEE = [
  { id:'baseball_bat',    name:'Baseball Bat',    category:'slotMelee', slots:1, pts:100 },
  { id:'cavalry_saber',   name:'Cavalry Saber',   category:'slotMelee', slots:1, pts:100 },
  { id:'combat_axe',      name:'Kampfaxt',         category:'slotMelee', slots:1, pts:100 },
  { id:'katana',          name:'Katana',           category:'slotMelee', slots:1, pts:100 },
  { id:'machete',         name:'Machete',          category:'slotMelee', slots:1, pts:100 },
  { id:'railroad_hammer', name:'Railroad Hammer',  category:'slotMelee', slots:1, pts:100 },
]

const TOOLS = [
  { id:'first_aid_kit',    name:'First Aid Kit',         required_setting:null },
  { id:'blank_decoys',     name:'Blank Fire Decoys',     required_setting:null },
  { id:'decoys',           name:'Decoys',                required_setting:null },
  { id:'decoy_fuses',      name:'Decoy Fuses',           required_setting:null },
  { id:'flare_pistol',     name:'Flare Pistol',          required_setting:null },
  { id:'fusees',           name:'Fusees',                required_setting:null },
  { id:'dusters',          name:'Dusters',               required_setting:null },
  { id:'heavy_knife',      name:'Heavy Knife',           required_setting:null },
  { id:'knife',            name:'Knife',                 required_setting:null },
  { id:'knuckle_knife',    name:'Knuckle Knife',         required_setting:null },
  { id:'throwing_axes',    name:'Throwing Axes',         required_setting:null },
  { id:'throwing_knives',  name:'Throwing Knives',       required_setting:null },
  { id:'spear',            name:'Spear',                 required_setting:null },
  { id:'derringer',        name:'Derringer Pennyshot',   required_setting:null },
  { id:'quad_derringer',   name:'Quad Derringer',        required_setting:null },
  { id:'alert_trip_mines', name:'Alert Trip Mines',      required_setting:null },
  { id:'conc_trip_mines',  name:'Concertina Trip Mines', required_setting:null },
  { id:'poison_trip_mines',name:'Poison Trip Mines',     required_setting:null },
  { id:'bear_traps',       name:'Bear Traps',            required_setting:null },
  { id:'choke_bombs',      name:'Choke Bombs',           required_setting:'chokeRequired' },
  { id:'spyglass',         name:'Spyglass',              required_setting:null },
]

// Tarot cards (only in pool when setting enabled)
const TAROT_CARDS = [
  'The Chariot','The Devil','The Empress','The Fool','The Hanged Man',
  'The High Priestess','The Judgement','The Magician','The Pathfinder',
  'The Sun','The Tower','The World',
].map((name,i) => ({ id:`tarot_${i}`, name, required_setting:null, tarot:true }))

const CONSUMABLES = [
  { id:'ammo_box',         name:'Ammo Box',              required_setting:null },
  { id:'tool_box',         name:'Tool Box',              required_setting:null },
  { id:'medkit',           name:'Medical Pack',          required_setting:'medkitRequired' },
  { id:'fire_bomb',        name:'Fire Bomb',             required_setting:null },
  { id:'hellfire_bomb',    name:'Hellfire Bomb',         required_setting:null },
  { id:'liquid_fire_bomb', name:'Liquid Fire Bomb',      required_setting:null },
  { id:'dyn_stick',        name:'Dynamite Stick',        required_setting:null },
  { id:'dyn_bundle',       name:'Dynamite Bundle',       required_setting:null },
  { id:'waxed_dyn',        name:'Waxed Dynamite Stick',  required_setting:null },
  { id:'big_dyn',          name:'Big Dynamite Bundle',   required_setting:null },
  { id:'stick_bomb',       name:'Stick Bomb',            required_setting:null },
  { id:'frag_bomb',        name:'Frag Bomb',             required_setting:null },
  { id:'dark_dyn',         name:'Dark Dynamite Satchel', required_setting:null },
  { id:'hive_bomb',        name:'Hive Bomb',             required_setting:null },
  { id:'poison_bomb',      name:'Poison Bomb',           required_setting:null },
  { id:'chaos_bomb',       name:'Chaos Bomb',            required_setting:null },
  { id:'antidote_shot',    name:'Antidote Shot',         required_setting:null },
  { id:'antidote_weak',    name:'Antidote Shot (weak)',  required_setting:null },
  { id:'regen_shot',       name:'Regeneration Shot',     required_setting:'regenShotRequired' },
  { id:'regen_weak',       name:'Regen Shot (weak)',     required_setting:null },
  { id:'stamina_shot',     name:'Stamina Shot',          required_setting:null },
  { id:'stamina_weak',     name:'Stamina Shot (weak)',   required_setting:null },
  { id:'vitality_shot',    name:'Vitality Shot',         required_setting:null },
  { id:'vitality_weak',    name:'Vitality Shot (weak)',  required_setting:null },
  { id:'recovery_shot',    name:'Recovery Shot',         required_setting:null },
  { id:'heal_syringe',     name:'Healing Syringe',       required_setting:'healSyringeRequired' },
  { id:'stalker_beetle',   name:'Stalker Beetle',        required_setting:null },
  { id:'choke_beetle',     name:'Choke Beetle',          required_setting:null },
  { id:'fire_beetle',      name:'Fire Beetle',           required_setting:null },
  { id:'conc_bomb',        name:'Concertina Bomb',       required_setting:null },
  { id:'flash_bomb',       name:'Flash Bomb',            required_setting:null },
]

// All weapons in one flat pool (for generation)
function getAllWeaponPool() {
  const pool = [
    ...LONG3, ...MED3, ...SMALL3,
    ...LONG2, ...MED2, ...SMALL2,
    ...LONG1, ...MED1, ...SMALL1,
    ...SHOTGUNS, ...SPECIAL, ...EVENT,
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
  { label:'TOOLS',                  pool: TOOLS,   items: true },
  { label:'CONSUMABLES',            pool: CONSUMABLES, items: true },
]

// ═══════════════════════════════════════════════════════════════════════════
// FLAVOR TEXT
// ═══════════════════════════════════════════════════════════════════════════

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
  medkitRequired:            false,
  meleeRequired:             true,
  chokeRequired:             false,
  healSyringeRequired:       false,
  regenShotRequired:         false,
  soloMode:                  false,
  quartermasterEnabled:      false,
  includeShredder:           false,
  includeFlameRifle:         false,
  includeWildlandHomestead:  false,
  includeTarotCards:         false,
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
      pts += loadout.secondary.secondAmmo?.find(a => a.key === loadout.secondaryAmmo2)?.pts ?? 0
    }
  }
  if (loadout.melee) pts += getWeaponPts(loadout.melee)

  if (!state.settings.quartermasterEnabled) {
    const empty = Math.max(0, Math.min(2, 4 - calcUsedSlots(loadout)))
    pts += empty * 50
  }
  return pts
}

function calcRoundScore(loadout, results) {
  const breakdown = []
  const base = calcLoadoutScore(loadout)
  breakdown.push({ label:'Loadout', pts:base, type:base >= 0 ? 'good' : 'bad' })

  const hasC = id => loadout.consumables?.some(c => c.id === id)
  if (loadout.melee)        breakdown.push({ label:'Nahkampf',   pts: 50, type:'good' })
  if (hasC('medkit'))       breakdown.push({ label:'Medkit',     pts: 50, type:'good' })
  if (hasC('heal_syringe')) breakdown.push({ label:'Heilspritze',pts:-20, type:'bad'  })
  if (hasC('regen_shot'))   breakdown.push({ label:'Regenshot',  pts:-30, type:'bad'  })

  if (results.headshots) breakdown.push({ label:`${results.headshots}× Headshot`,      pts:results.headshots * 10, type:'good' })
  if (results.kills)     breakdown.push({ label:`${results.kills}× Kill`,               pts:results.kills     * 15, type:'good' })
  if (results.revives)   breakdown.push({ label:`${results.revives}× Wiederbelebung`,   pts:results.revives   * 5,  type:'good' })
  if (results.deaths)    breakdown.push({ label:`${results.deaths}× Tod`,               pts:results.deaths    * -10,type:'bad'  })
  if (results.firstDeath) breakdown.push({ label:'Erster Tod', pts:-20, type:'bad'  })
  if (results.extracted)  breakdown.push({ label:'Extraktion', pts:  5, type:'good' })
  if (results.bounties)   breakdown.push({ label:`${results.bounties}× Bounty`, pts:results.bounties * 25, type:'good' })

  let total = breakdown.reduce((s, b) => s + b.pts, 0)
  if (state.settings.soloMode) {
    breakdown.push({ label:'Solo ×1.5', pts:Math.round(total * 0.5), type:'good' })
    total = Math.round(total * 1.5)
  }
  return { total, breakdown }
}

function calcTotalStats() {
  let totalScore = 0, totalKills = 0, totalDeaths = 0, totalRounds = 0
  for (const run of [...state.history, ...(state.currentRun ? [state.currentRun] : [])]) {
    for (const r of (run.rounds || [])) {
      totalScore  += r.totalScore       || 0
      totalKills  += r.results?.kills   || 0
      totalDeaths += r.results?.deaths  || 0
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
  const pool   = getAllWeaponPool()

  const pool3 = pool.filter(w => w.slots === 3)
  const pool2 = pool.filter(w => w.slots === 2)
  const pool1 = pool.filter(w => w.slots === 1)

  const primaryPool = pool3.length ? pool3 : pool2
  const primary     = pick(primaryPool)
  const primaryAmmo = pick(primary.ammo).key

  let secondaryPool = pool.filter(w => {
    const total = primary.slots + w.slots
    if (total > budget) return false
    if (!qm && primary.slots === 3 && w.slots >= 2) return false
    return true
  })
  if (!secondaryPool.length) secondaryPool = pool1

  const secondary     = pick(secondaryPool)
  const secondaryAmmo = pick(secondary.ammo).key
  const secondaryAmmo2 = secondary.dualAmmo && secondary.secondAmmo
    ? pick(secondary.secondAmmo).key : null

  // Slotted melee
  const usedByWeapons = primary.slots + secondary.slots
  const hasRoom       = usedByWeapons < budget
  let melee = null
  if (state.settings.meleeRequired && hasRoom) {
    melee = pick(SLOTTED_MELEE)
  } else if (hasRoom && Math.random() < 0.4) {
    melee = pick(SLOTTED_MELEE)
  }

  // Tools
  const reqTools  = TOOLS.filter(t => t.required_setting && state.settings[t.required_setting])
  const optTools  = TOOLS.filter(t => !t.required_setting).sort(() => Math.random() - 0.5)
  let tools       = [...reqTools, ...optTools.slice(0, Math.floor(Math.random() * 3))].slice(0, 4)
  if (!tools.length) tools = [pick(TOOLS)]

  // Consumables (optionally include tarot cards)
  const reqCons  = CONSUMABLES.filter(c => c.required_setting && state.settings[c.required_setting])
  const tarotPool = state.settings.includeTarotCards ? TAROT_CARDS : []
  const optCons  = [...CONSUMABLES.filter(c => !c.required_setting), ...tarotPool]
    .sort(() => Math.random() - 0.5)
  let consumables = [...reqCons, ...optCons.slice(0, Math.floor(Math.random() * 3))].slice(0, 4)
  if (!consumables.length) consumables = [pick(CONSUMABLES.filter(c => !c.required_setting))]

  return { primary, primaryAmmo, secondary, secondaryAmmo, secondaryAmmo2, melee, tools, consumables }
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
  const sign  = entry.pts >= 0 ? '+' : ''
  return `<span class="weapon-ammo-tag ammo-${entry.key}">${entry.label}${entry.pts !== 0 ? ` (${sign}${entry.pts})` : ''}</span>`
}

function renderLoadout(loadout) {
  const container = document.getElementById('loadout-display')
  container.innerHTML = ''
  container.className = 'hs-loadout'

  // Primary card
  const primPts  = getWeaponPts(loadout.primary) + (getAmmoEntry(loadout.primary, loadout.primaryAmmo)?.pts ?? 0)
  const slotLbl  = loadout.primary.slots === 3 ? 'LARGE SLOT' : loadout.primary.slots === 2 ? 'MEDIUM SLOT' : 'SMALL SLOT'
  const primCard = document.createElement('div')
  primCard.className = `hs-weapon-card hs-primary cat-${loadout.primary.category}`
  primCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${slotLbl}</span>
      <div class="hs-slot-dots">${slotDots(loadout.primary.slots)}</div>
      <span class="hs-pts-badge${primPts < 0 ? ' negative' : ''}">${primPts >= 0 ? '+' : ''}${primPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">${getWeaponIcon(loadout.primary.category)}</div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.primary.name}</div>
        <div class="hs-weapon-meta">${loadout.primary.fireMode} · ${loadout.primary.ammoType.toUpperCase()}</div>
        <div class="hs-ammo-row">${ammoTag(loadout.primary, loadout.primaryAmmo)}</div>
      </div>
    </div>`
  container.appendChild(primCard)

  // Secondary card
  const secAmmo2pts = (loadout.secondary.dualAmmo && loadout.secondaryAmmo2)
    ? (loadout.secondary.secondAmmo?.find(a => a.key === loadout.secondaryAmmo2)?.pts ?? 0) : 0
  const secPts     = getWeaponPts(loadout.secondary) + (getAmmoEntry(loadout.secondary, loadout.secondaryAmmo)?.pts ?? 0) + secAmmo2pts
  const secSlotLbl = loadout.secondary.slots === 2 ? 'MEDIUM SLOT' : 'SMALL SLOT'
  const secCard    = document.createElement('div')
  secCard.className = `hs-weapon-card hs-secondary cat-${loadout.secondary.category}`
  secCard.innerHTML = `
    <div class="hs-card-header">
      <span class="hs-slot-type">${secSlotLbl}${state.settings.quartermasterEnabled ? ' · QM' : ''}</span>
      <div class="hs-slot-dots">${slotDots(loadout.secondary.slots)}</div>
      <span class="hs-pts-badge${secPts < 0 ? ' negative' : ''}">${secPts >= 0 ? '+' : ''}${secPts} PTS</span>
    </div>
    <div class="hs-card-body">
      <div class="hs-weapon-icon">${getWeaponIcon(loadout.secondary.category)}</div>
      <div class="hs-weapon-details">
        <div class="hs-weapon-name">${loadout.secondary.name}</div>
        <div class="hs-weapon-meta">${loadout.secondary.fireMode} · ${loadout.secondary.ammoType.toUpperCase()}</div>
        <div class="hs-ammo-row">
          ${ammoTag(loadout.secondary, loadout.secondaryAmmo)}
          ${loadout.secondaryAmmo2 ? ammoTag(loadout.secondary, loadout.secondaryAmmo2, true) + '<span class="dual-ammo-label"> · SCHROT</span>' : ''}
        </div>
      </div>
    </div>`
  container.appendChild(secCard)

  // Melee
  if (loadout.melee) {
    const mel = document.createElement('div')
    mel.className = 'hs-melee-row'
    mel.innerHTML = `
      <div class="hs-melee-icon">${getWeaponIcon('slotMelee')}</div>
      <div class="hs-melee-info">
        <span class="hs-melee-label">NAHKAMPF · SLOT</span>
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
      <div class="hs-util-header"><span class="hs-util-icon">⚙</span><span>TOOLS</span><span class="hs-util-count">${tools.length}/4</span></div>
      <div class="hs-util-grid">${renderItemSlots(tools, 4)}</div>
    </div>
    <div class="hs-util-col">
      <div class="hs-util-header"><span class="hs-util-icon">✚</span><span>CONSUMABLES</span><span class="hs-util-count">${consumables.length}/4</span></div>
      <div class="hs-util-grid">${renderItemSlots(consumables, 4)}</div>
    </div>`
  container.appendChild(util)

  // Slot bonus
  if (!state.settings.quartermasterEnabled) {
    const empty = Math.max(0, Math.min(2, 4 - calcUsedSlots(loadout)))
    if (empty > 0) {
      const bon = document.createElement('div')
      bon.className = 'hs-slot-bonus'
      bon.innerHTML = `<span class="slot-bonus-label">SLOT BONUS</span><span class="slot-bonus-val">+${empty * 50} PTS</span><span class="slot-bonus-desc">${empty} freier Slot${empty > 1 ? 's' : ''}</span>`
      container.appendChild(bon)
    }
  }

  document.getElementById('loadout-base-score').textContent =
    (calcLoadoutScore(loadout) >= 0 ? '+' : '') + calcLoadoutScore(loadout)

  // Reroll button state
  const rb = document.getElementById('btn-reroll')
  if (rb) { rb.textContent = `↺ NEU WÜRFELN (${state.rerolls})`; rb.disabled = state.rerolls <= 0 }
}

function renderItemSlots(items, max) {
  const out = []
  for (let i = 0; i < max; i++) {
    if (i < items.length) {
      const isReq = items[i].required_setting && state.settings[items[i].required_setting]
      out.push(`<div class="hs-item-slot filled${isReq ? ' required' : ''}">${items[i].name}</div>`)
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

  function ammoChips(ammoArr) {
    if (!ammoArr?.length) return '<span class="ammo-na">—</span>'
    return ammoArr.map(a => {
      const cls = a.pts > 0 ? 'pos' : a.pts < 0 ? 'neg' : 'zero'
      const ptsTxt = a.pts !== 0 ? ` (${a.pts > 0 ? '+' : ''}${a.pts})` : ''
      return `<span class="ammo-chip ammo-chip-${cls}">${a.label}${ptsTxt}</span>`
    }).join('')
  }

  function weaponRow(w) {
    const eff = getWeaponPts(w)
    const dual = w.dualAmmo ? ` <span class="arsenal-dual-badge">2x</span>` : ''
    return `<tr>
      <td class="arsenal-weapon-name">${w.name}${dual}</td>
      <td class="arsenal-slots">${slotPips(w.slots || 1)}</td>
      <td class="arsenal-type">${(w.ammoType || '').toUpperCase()}</td>
      <td class="arsenal-pts-cell">
        <input type="number" class="pts-input" value="${eff}" data-id="${w.id}"
          data-default="${w.pts}" onchange="updateArsenalPts(this)" min="-200" max="500" step="10">
      </td>
      <td class="arsenal-firemode">${w.fireMode || '—'}</td>
      <td class="arsenal-ammo-tags">${ammoChips(w.ammo)}${w.dualAmmo ? '<br><span class="arsenal-dual-label">Schrot: </span>' + ammoChips(w.secondAmmo) : ''}</td>
    </tr>`
  }

  function itemRow(it, type) {
    return `<tr>
      <td class="arsenal-weapon-name">${it.name}</td>
      <td class="arsenal-slots">—</td>
      <td class="arsenal-type">${type.toUpperCase()}</td>
      <td class="arsenal-pts-cell"><span class="arsenal-pts-static">—</span></td>
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
              <th class="col-name">WAFFE</th>
              <th class="col-slots">SLOTS</th>
              <th class="col-type">TYP</th>
              <th class="col-pts">BASIS PTS</th>
              <th class="col-mode">FEUERMOD.</th>
              <th class="col-ammo">VERFÜGBARE MUNITION</th>
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

// ═══════════════════════════════════════════════════════════════════════════
// RESULTS (preview score)
// ═══════════════════════════════════════════════════════════════════════════

function updatePreviewScore() {
  if (!state.currentRoundData) return
  const { total } = calcRoundScore(state.currentRoundData.loadout, state.currentRoundData.results)
  const el = document.getElementById('preview-score')
  el.textContent = (total >= 0 ? '+' : '') + total
  el.classList.toggle('negative', total < 0)
}

// Left-click = +1, right-click = -1 via context menu prevention
function adjustResult(key, delta) {
  if (!state.currentRoundData) return
  const next = Math.max(0, state.currentRoundData.results[key] + delta)
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
    container.innerHTML = `<div class="history-empty">Noch keine Läufe gespeichert.<br>Starte deinen ersten Hunt.</div>`
    return
  }
  container.innerHTML = [...state.history]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(run => {
      const kills  = run.rounds.reduce((s, r) => s + (r.results?.kills  || 0), 0)
      const deaths = run.rounds.reduce((s, r) => s + (r.results?.deaths || 0), 0)
      const exts   = run.rounds.filter(r => r.results?.extracted).length
      const kd     = deaths > 0 ? (kills / deaths).toFixed(2) : kills
      const sign   = run.totalScore >= 0 ? '+' : ''
      return `
        <div class="history-card" onclick="showRunDetail('${run.id}')">
          <div class="history-card-header">
            <span class="history-card-date">${formatDate(run.date)}</span>
            <span class="history-card-badge">${run.rounds.length} Runde${run.rounds.length !== 1 ? 'n' : ''}</span>
            <span class="history-card-score">${sign}${run.totalScore}</span>
          </div>
          <div class="history-card-body">
            <span class="history-stat">Kills: <strong>${kills}</strong></span>
            <span class="history-stat">Tode: <strong>${deaths}</strong></span>
            <span class="history-stat">K/D: <strong>${kd}</strong></span>
            <span class="history-stat">Ext.: <strong>${exts}</strong></span>
            ${run.settings?.soloMode ? '<span class="history-stat text-gold">Solo ×1.5</span>' : ''}
          </div>
        </div>`
    }).join('')
}

function showRunDetail(runId) {
  const run = state.history.find(r => r.id === runId)
  if (!run) return
  document.getElementById('rd-title').textContent    = 'LAUF DETAILS'
  document.getElementById('rd-subtitle').textContent = formatDate(run.date)
  const kills  = run.rounds.reduce((s,r) => s + (r.results?.kills  || 0), 0)
  const deaths = run.rounds.reduce((s,r) => s + (r.results?.deaths || 0), 0)
  const hs     = run.rounds.reduce((s,r) => s + (r.results?.headshots || 0), 0)
  document.getElementById('run-detail-content').innerHTML = `
    <div class="run-detail-header-stats">
      <div class="rd-stat"><span class="rd-stat-val">${run.totalScore >= 0 ? '+' : ''}${run.totalScore}</span><span class="rd-stat-label">Score</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${run.rounds.length}</span><span class="rd-stat-label">Runden</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${kills}</span><span class="rd-stat-label">Kills</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${deaths}</span><span class="rd-stat-label">Tode</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${deaths > 0 ? (kills/deaths).toFixed(2) : kills}</span><span class="rd-stat-label">K/D</span></div>
      <div class="rd-stat"><span class="rd-stat-val">${hs}</span><span class="rd-stat-label">Headshots</span></div>
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
        <span class="round-detail-num">RUNDE ${round.roundNumber}</span>
        <span class="round-detail-score">${sign}${round.totalScore} PTS</span>
      </div>
      <div class="round-detail-body">
        <div class="rd-loadout-col">
          <span><strong>PRIMÄR</strong> ${l.primary?.name ?? '—'}</span>
          <span><strong>SEKUNDÄR</strong> ${l.secondary?.name ?? '—'}</span>
          ${l.melee ? `<span><strong>NAHKAMPF</strong> ${l.melee.name}</span>` : ''}
          ${items.length ? `<span><strong>ITEMS</strong> ${items.map(i => i.name).join(', ')}</span>` : ''}
        </div>
        <div class="rd-results-col">
          <div class="rd-result-item"><span>Headshots</span><span>${r?.headshots ?? 0}</span></div>
          <div class="rd-result-item"><span>Kills</span><span>${r?.kills ?? 0}</span></div>
          <div class="rd-result-item"><span>Tode</span><span>${r?.deaths ?? 0}</span></div>
          <div class="rd-result-item"><span>Revives</span><span>${r?.revives ?? 0}</span></div>
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
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.checked = val }
  set('set-medkit',         state.settings.medkitRequired)
  set('set-melee',          state.settings.meleeRequired)
  set('set-choke',          state.settings.chokeRequired)
  set('set-healsyringe',    state.settings.healSyringeRequired)
  set('set-regenshot',      state.settings.regenShotRequired)
  set('set-solo',           state.settings.soloMode)
  set('set-quartermaster',  state.settings.quartermasterEnabled)
  set('set-shredder',       state.settings.includeShredder)
  set('set-flamerifle',     state.settings.includeFlameRifle)
  set('set-wildland',       state.settings.includeWildlandHomestead)
  set('set-tarotcards',     state.settings.includeTarotCards)
}

async function saveSetting(key, value) {
  state.settings[key] = value
  await saveSettings()
}

// ═══════════════════════════════════════════════════════════════════════════
// HOME
// ═══════════════════════════════════════════════════════════════════════════

function updateHomeUI() {
  document.getElementById('home-flavor-text').textContent = pick(FLAVOR_TEXTS)
  const hasRun = !!state.currentRun
  document.getElementById('active-run-banner').classList.toggle('hidden', !hasRun)
  document.getElementById('btn-end-run').style.display = hasRun ? 'inline-flex' : 'none'
  if (hasRun) {
    document.getElementById('active-run-info').textContent =
      `${state.currentRun.rounds.length} Runde${state.currentRun.rounds.length !== 1 ? 'n' : ''} gespielt · ${state.currentRun.totalScore} Pts`
  }
  const s  = calcTotalStats()
  const qs = document.getElementById('home-quick-stats')
  if (state.history.length > 0) {
    const last = [...state.history].sort((a,b) => new Date(b.date)-new Date(a.date))[0]
    qs.innerHTML = `
      <div class="quick-stat-card"><span class="qs-val">${s.totalScore}</span><span class="qs-label">Total Score</span></div>
      <div class="quick-stat-card"><span class="qs-val">${state.history.length}</span><span class="qs-label">Läufe</span></div>
      <div class="quick-stat-card"><span class="qs-val">${last.totalScore >= 0 ? '+' : ''}${last.totalScore}</span><span class="qs-label">Letzter Lauf</span></div>`
  } else { qs.innerHTML = '' }
}

// ═══════════════════════════════════════════════════════════════════════════
// GAME FLOW
// ═══════════════════════════════════════════════════════════════════════════

function handleRandomize() {
  if (!state.currentRun) {
    state.currentRun = {
      id: `run_${Date.now()}`, date: new Date().toISOString(),
      rounds: [], totalScore: 0, settings: { ...state.settings },
    }
  }
  const loadout  = generateLoadout()
  const roundNum = state.currentRun.rounds.length + 1
  state.currentRoundData = {
    roundNumber: roundNum, loadout,
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
  const sec2      = l.secondaryAmmo2 ? l.secondary?.secondAmmo?.find(a => a.key === l.secondaryAmmo2) : null

  document.getElementById('results-loadout-summary').innerHTML = `
    <span><span class="rls-label">PRIMÄR</span> <span class="rls-val">${l.primary.name} · ${primLabel}</span></span>
    <span><span class="rls-label">SEKUNDÄR</span> <span class="rls-val">${l.secondary.name} · ${secLabel}${sec2 ? ' + ' + sec2.label : ''}</span></span>
    ${l.melee ? `<span><span class="rls-label">NAHKAMPF</span> <span class="rls-val">${l.melee.name}</span></span>` : ''}`

  updatePreviewScore()
  showView('results')
}

function resetResultsForm() {
  if (state.currentRoundData) {
    state.currentRoundData.results = { headshots:0, kills:0, deaths:0, revives:0, firstDeath:false, extracted:false, bounties:0 }
  }
  ;['headshots','kills','deaths','revives','bounties'].forEach(k => {
    const el = document.getElementById(`res-${k}`)
    if (el) el.textContent = '0'
  })
  const fd = document.getElementById('res-first-death')
  const ex = document.getElementById('res-extracted')
  if (fd) fd.checked = false
  if (ex) ex.checked = false
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
  showView('home')
}

init()
