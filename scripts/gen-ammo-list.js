'use strict'

// Ammo factory (mirrors renderer.js)
const A = {
  std:    (p=0)   => ({ key:'standard',    label:'Standard',       pts:p }),
  spit:   (p=-5)  => ({ key:'spitzer',     label:'Spitzer',        pts:p }),
  fmj:    (p=-5)  => ({ key:'fmj',         label:'FMJ',            pts:p }),
  dum:    (p=-10) => ({ key:'dumdum',       label:'Dumdum',         pts:p }),
  hv:     (p=-5)  => ({ key:'hv',          label:'High Velocity',  pts:p }),
  poi:    (p=20)  => ({ key:'poison',       label:'Poison',         pts:p }),
  exp:    (p=30)  => ({ key:'explosive',    label:'Explosive',      pts:p }),
  inc:    (p=15)  => ({ key:'incendiary',   label:'Incendiary',     pts:p }),
  slug:   (p=10)  => ({ key:'slug',         label:'Slug',           pts:p }),
  sub:    (p=10)  => ({ key:'subsonic',     label:'Subsonic',       pts:p }),
  fle:    (p=5)   => ({ key:'flechette',    label:'Flechette',      pts:p }),
  star:   (p=20)  => ({ key:'starshell',    label:'Starshell',      pts:p }),
  pen:    (p=5)   => ({ key:'pennyshot',    label:'Penny Shot',     pts:p }),
  db:     (p=15)  => ({ key:'dragonsbreath',label:'Dragonsbreath',  pts:p }),
  bolt:   (p=0)   => ({ key:'bolt',         label:'Bolt',           pts:p }),
  ebolt:  (p=30)  => ({ key:'expbolt',      label:'Exp. Bolt',      pts:p }),
  sbolt:  (p=5)   => ({ key:'shotbolt',     label:'Shot Bolt',      pts:p }),
  stbolt: (p=5)   => ({ key:'steelbolt',    label:'Steel Bolt',     pts:p }),
  cbolt:  (p=0)   => ({ key:'cbolt',        label:'Comp. Bolt',     pts:p }),
  cebolt: (p=30)  => ({ key:'cexpbolt',     label:'C.Exp. Bolt',    pts:p }),
  cibolt: (p=15)  => ({ key:'cibolt',       label:'C.Inc. Bolt',    pts:p }),
  chkblt: (p=10)  => ({ key:'chokebolt',    label:'Choke Bolt',     pts:p }),
  poicbt: (p=20)  => ({ key:'poisoncbolt',  label:'Poison C.Bolt',  pts:p }),
  dbcbt:  (p=20)  => ({ key:'dbcbolt',      label:'DB Comp.Bolt',   pts:p }),
  arr:    (p=0)   => ({ key:'arrow',        label:'Arrow',          pts:p }),
  parr:   (p=20)  => ({ key:'poisonarr',    label:'Poison Arrow',   pts:p }),
  farr:   (p=25)  => ({ key:'fragarr',      label:'Frag Arrow',     pts:p }),
  concarr:(p=15)  => ({ key:'concarr',      label:'Conc. Arrow',    pts:p }),
  lance:  (p=0)   => ({ key:'lance',        label:'Lance Bolt',     pts:p }),
  harp:   (p=20)  => ({ key:'harpoon',      label:'Harpoon',        pts:p }),
  stball: (p=10)  => ({ key:'steelball',    label:'Steel Ball',     pts:p }),
  wfrag:  (p=25)  => ({ key:'waxedfrag',    label:'Waxed Frag',     pts:p }),
  dbch:   (p=20)  => ({ key:'dbcharge',     label:'DB Charge',      pts:p }),
  dolch:  (p=0)   => ({ key:'dolchammo',    label:'Dolch Ammo',     pts:p }),
  nitro:  (p=0)   => ({ key:'nitro',        label:'Nitro Ammo',     pts:p }),
}

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
  SH2ND:    () => [A.std(), A.inc(), A.slug()],
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

const weapons = [
  // LONG 3
  { id:'sparks_lrr',            name:'Sparks LRR',                      slots:3, ammo:'long',   ammoFn:LA.SPARKS,   fm:'Einzelschuss' },
  { id:'sparks_lrr_sniper',     name:'Sparks LRR Sniper',               slots:3, ammo:'long',   ammoFn:LA.SPARKS,   fm:'Einzelschuss' },
  { id:'sparks_lrr_silencer',   name:'Sparks LRR Silencer',             slots:3, ammo:'long',   ammoFn:LA.SPARKS,   fm:'Einzelschuss' },
  { id:'martini_ic1',           name:'Martini Henry IC1',               slots:3, ammo:'long',   ammoFn:LA.MARTINI,  fm:'Einzelschuss' },
  { id:'martini_ironside',      name:'Martini Henry IC1 Ironside',      slots:3, ammo:'long',   ammoFn:LA.MARTINI,  fm:'Einzelschuss' },
  { id:'martini_deadeye',       name:'Martini Henry IC1 Deadeye',       slots:3, ammo:'long',   ammoFn:LA.MARTINI,  fm:'Einzelschuss' },
  { id:'martini_marksman',      name:'Martini Henry IC1 Marksman',      slots:3, ammo:'long',   ammoFn:LA.MARTINI,  fm:'Einzelschuss' },
  { id:'martini_riposte',       name:'Martini Henry IC1 Riposte',       slots:3, ammo:'long',   ammoFn:LA.MARTINI,  fm:'Einzelschuss' },
  { id:'mosin_m1891',           name:'Mosin-Nagant M1891',              slots:3, ammo:'long',   ammoFn:LA.MOSIN,    fm:'Repetier' },
  { id:'mosin_m1891_bay',       name:'Mosin-Nagant M1891 Bayonet',      slots:3, ammo:'long',   ammoFn:LA.MOSIN,    fm:'Repetier' },
  { id:'mosin_m1891_sniper',    name:'Mosin-Nagant M1891 Sniper',       slots:3, ammo:'long',   ammoFn:LA.MOSIN,    fm:'Repetier' },
  { id:'mosin_m1891_avtom',     name:'Mosin-Nagant M1891 Avtomat',      slots:3, ammo:'long',   ammoFn:LA.MOSIN,    fm:'Vollautomat' },
  { id:'krag',                  name:'Springfield M1892 Krag',          slots:3, ammo:'long',   ammoFn:LA.KRAG,     fm:'Repetier' },
  { id:'krag_bayonet',          name:'Springfield M1892 Krag Bayonet',  slots:3, ammo:'long',   ammoFn:LA.KRAG,     fm:'Repetier' },
  { id:'krag_sniper',           name:'Springfield M1892 Krag Sniper',   slots:3, ammo:'long',   ammoFn:LA.KRAG,     fm:'Repetier' },
  { id:'krag_silencer',         name:'Springfield M1892 Krag Silencer', slots:3, ammo:'long',   ammoFn:LA.KRAG,     fm:'Repetier' },
  { id:'lebel_1886',            name:'Lebel 1886',                      slots:3, ammo:'long',   ammoFn:LA.LEBEL,    fm:'Repetier' },
  { id:'lebel_talon',           name:'Lebel 1886 Talon',                slots:3, ammo:'long',   ammoFn:LA.LEBEL,    fm:'Repetier' },
  { id:'lebel_marksman',        name:'Lebel 1886 Marksman',             slots:3, ammo:'long',   ammoFn:LA.LEBEL,    fm:'Repetier' },
  { id:'lebel_aperture',        name:'Lebel 1886 Aperture',             slots:3, ammo:'long',   ammoFn:LA.LEBEL,    fm:'Repetier' },
  { id:'mako_1895',             name:'Mako 1895',                       slots:3, ammo:'long',   ammoFn:LA.MAKO,     fm:'Hebel-Repetier' },
  { id:'mako_aperture',         name:'Mako 1895 Aperture',              slots:3, ammo:'long',   ammoFn:LA.MAKO,     fm:'Hebel-Repetier' },
  { id:'mako_claw',             name:'Mako 1895 Claw',                  slots:3, ammo:'long',   ammoFn:LA.MAKO,     fm:'Hebel-Repetier' },
  { id:'berthier_1892',         name:'Berthier Mle 1892',               slots:3, ammo:'long',   ammoFn:LA.BERTHIER, fm:'Repetier' },
  { id:'berthier_deadeye',      name:'Berthier Mle 1892 Deadeye',       slots:3, ammo:'long',   ammoFn:LA.BERTHIER, fm:'Repetier' },
  { id:'berthier_marksman',     name:'Berthier Mle 1892 Marksman',      slots:3, ammo:'long',   ammoFn:LA.BERTHIER, fm:'Repetier' },
  { id:'berthier_riposte',      name:'Berthier Mle 1892 Riposte',       slots:3, ammo:'long',   ammoFn:LA.BERTHIER, fm:'Repetier' },
  { id:'mosin_obrez_match',     name:'Mosin Obrez Match',               slots:3, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  { id:'mosin_obrez_sharpeye',  name:'Mosin Obrez Sharpeye',            slots:3, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  // MEDIUM 3
  { id:'c1865',                 name:'1865 Carbine',                    slots:3, ammo:'medium', ammoFn:MA.C1865,    fm:'Hebel-Repetier' },
  { id:'c1865_silencer',        name:'1865 Carbine Silencer',           slots:3, ammo:'medium', ammoFn:MA.C1865,    fm:'Hebel-Repetier' },
  { id:'c1865_aperture',        name:'1865 Carbine Aperture',           slots:3, ammo:'medium', ammoFn:MA.C1865,    fm:'Hebel-Repetier' },
  { id:'centennial',            name:'Centennial',                      slots:3, ammo:'medium', ammoFn:MA.CENT,     fm:'Hebel-Repetier' },
  { id:'centennial_sniper',     name:'Centennial Sniper',               slots:3, ammo:'medium', ammoFn:MA.CENT,     fm:'Hebel-Repetier' },
  { id:'centennial_trauma',     name:'Centennial Trauma',               slots:3, ammo:'medium', ammoFn:MA.CENT,     fm:'Hebel-Repetier' },
  { id:'drilling',              name:'Drilling',                        slots:3, ammo:'medium', ammoFn:MA.DRILL,    fm:'Einzelschuss',  note:'⚠ fehlt: Schrotlauf (Schrot-Munition)' },
  { id:'maynard_sniper',        name:'Maynard Sniper',                  slots:3, ammo:'medium', ammoFn:MA.MAYNARD,  fm:'Repetier' },
  { id:'maynard_sniper_sil',    name:'Maynard Sniper Silencer',         slots:3, ammo:'medium', ammoFn:MA.MAYNARD,  fm:'Repetier' },
  { id:'springfield_1866',      name:'Springfield 1866',                slots:3, ammo:'medium', ammoFn:MA.SPR66,    fm:'Einzelschuss' },
  { id:'springfield_1866_mark', name:'Springfield 1866 Marksman',       slots:3, ammo:'medium', ammoFn:MA.SPR66,    fm:'Einzelschuss' },
  { id:'springfield_1866_bay',  name:'Springfield 1866 Bayonet',        slots:3, ammo:'medium', ammoFn:MA.SPR66,    fm:'Einzelschuss' },
  { id:'vetterli_71',           name:'Vetterli 71',                     slots:3, ammo:'medium', ammoFn:MA.VETT,     fm:'Hebel-Repetier' },
  { id:'vetterli_71_bay',       name:'Vetterli 71 Bayonet',             slots:3, ammo:'medium', ammoFn:MA.VETT,     fm:'Hebel-Repetier' },
  { id:'vetterli_71_deadeye',   name:'Vetterli 71 Deadeye',             slots:3, ammo:'medium', ammoFn:MA.VETT,     fm:'Hebel-Repetier' },
  { id:'vetterli_71_marksman',  name:'Vetterli 71 Marksman',            slots:3, ammo:'medium', ammoFn:MA.VETT,     fm:'Hebel-Repetier' },
  { id:'vetterli_71_silencer',  name:'Vetterli 71 Silencer',            slots:3, ammo:'medium', ammoFn:MA.VETT,     fm:'Hebel-Repetier' },
  { id:'wildland',              name:'Wildland',                        slots:3, ammo:'medium', ammoFn:MA.WILDLAND, fm:'Repetier' },
  // SMALL 3
  { id:'marathon',              name:'Marathon',                        slots:3, ammo:'small',  ammoFn:SA.MARATHON, fm:'Hebel-Repetier' },
  { id:'marathon_swift',        name:'Marathon Swift',                  slots:3, ammo:'small',  ammoFn:SA.MARATHON, fm:'Hebel-Repetier' },
  { id:'infantry_73l',          name:'Infantry 73L',                    slots:3, ammo:'small',  ammoFn:SA.INF73,    fm:'Hebel-Repetier' },
  { id:'infantry_73l_bay',      name:'Infantry 73L Bayonet',            slots:3, ammo:'small',  ammoFn:SA.INF73,    fm:'Hebel-Repetier' },
  { id:'infantry_73l_sniper',   name:'Infantry 73L Sniper',             slots:3, ammo:'small',  ammoFn:SA.INF73,    fm:'Hebel-Repetier' },
  { id:'ranger_73',             name:'Ranger 73',                       slots:3, ammo:'small',  ammoFn:SA.RANGER,   fm:'Hebel-Repetier' },
  { id:'ranger_73_aperture',    name:'Ranger 73 Aperture',              slots:3, ammo:'small',  ammoFn:SA.RANGER,   fm:'Hebel-Repetier' },
  { id:'ranger_73_talon',       name:'Ranger 73 Talon',                 slots:3, ammo:'small',  ammoFn:SA.RANGER,   fm:'Hebel-Repetier' },
  { id:'ranger_73_swift',       name:'Ranger 73 Swift',                 slots:3, ammo:'small',  ammoFn:SA.RANGER,   fm:'Hebel-Repetier' },
  { id:'lemat_carbine',         name:'LeMat Carbine',                   slots:3, ammo:'small',  ammoFn:SA.LEMAT_C,  fm:'Hebel-Repetier', dual:'Schrotlauf: Standard, Incendiary(+15), Slug(+10)' },
  { id:'lemat_carbine_mark',    name:'LeMat Carbine Marksman',          slots:3, ammo:'small',  ammoFn:SA.LEMAT_C,  fm:'Hebel-Repetier', dual:'Schrotlauf: Standard, Incendiary(+15), Slug(+10)' },
  { id:'officer_carbine',       name:'Officer Carbine',                 slots:3, ammo:'small',  ammoFn:SA.OFF_C,    fm:'Hebel-Repetier' },
  { id:'officer_carbine_de',    name:'Officer Carbine Deadeye',         slots:3, ammo:'small',  ammoFn:SA.OFF_C,    fm:'Hebel-Repetier' },
  { id:'frontier_73c',          name:'Frontier 73C',                    slots:3, ammo:'small',  ammoFn:SA.FRONT73,  fm:'Hebel-Repetier' },
  { id:'frontier_73c_sil',      name:'Frontier 73C Silencer',           slots:3, ammo:'small',  ammoFn:SA.FRONT73,  fm:'Hebel-Repetier' },
  { id:'frontier_73c_mark',     name:'Frontier 73C Marksman',           slots:3, ammo:'small',  ammoFn:SA.FRONT73,  fm:'Hebel-Repetier' },
  // LONG 2
  { id:'haymaker',              name:'Haymaker',                        slots:2, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  { id:'mosin_obrez',           name:'Mosin Obrez',                     slots:2, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  { id:'mosin_obrez_mace',      name:'Mosin Obrez Mace',                slots:2, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  { id:'mosin_obrez_ext',       name:'Mosin Obrez Extended',            slots:2, ammo:'long',   ammoFn:LA.OBREZ,    fm:'Einzelschuss' },
  { id:'uppercut_precision',    name:'Uppercut Precision',              slots:2, ammo:'long',   ammoFn:LA.UPPERCUT, fm:'Einzelschuss' },
  { id:'uppercut_deadeye',      name:'Uppercut Deadeye',                slots:2, ammo:'long',   ammoFn:LA.UPPERCUT, fm:'Einzelschuss' },
  // MEDIUM 2
  { id:'scottfield_prec',       name:'Scottfield Precision',            slots:2, ammo:'medium', ammoFn:MA.SCOTTFP,  fm:'Revolver' },
  { id:'drilling_shorty',       name:'Drilling Shorty',                 slots:2, ammo:'medium', ammoFn:MA.DRILLS,   fm:'Einzelschuss', note:'⚠ Schrotlauf?' },
  { id:'drilling_hatchet',      name:'Drilling Hatchet',                slots:2, ammo:'medium', ammoFn:MA.DRILLS,   fm:'Einzelschuss', note:'⚠ Schrotlauf?' },
  { id:'springfield_1866_sh',   name:'Springfield 1866 Shorty',         slots:2, ammo:'medium', ammoFn:MA.SPR66S,   fm:'Einzelschuss' },
  { id:'springfield_1866_str',  name:'Springfield 1866 Striker',        slots:2, ammo:'medium', ammoFn:MA.SPR66S,   fm:'Einzelschuss' },
  { id:'springfield_1866_bull', name:'Springfield 1866 Bullseye',       slots:2, ammo:'medium', ammoFn:MA.SPR66S,   fm:'Einzelschuss' },
  { id:'centennial_shorty',     name:'Centennial Shorty',               slots:2, ammo:'medium', ammoFn:MA.CENTS,    fm:'Hebel-Repetier' },
  { id:'centennial_shorty_sil', name:'Centennial Shorty Silencer',      slots:2, ammo:'medium', ammoFn:MA.CENTS,    fm:'Hebel-Repetier' },
  // SMALL 2
  { id:'bornheim_match',        name:'Bornheim No. 3 Match',            slots:2, ammo:'small',  ammoFn:SA.BORNHEIM, fm:'Vollautomat' },
  { id:'nagant_prec',           name:'Nagant M1895 Precision',          slots:2, ammo:'small',  ammoFn:SA.NAGANT,   fm:'Revolver' },
  { id:'nagant_deadeye',        name:'Nagant M1895 Deadeye',            slots:2, ammo:'small',  ammoFn:SA.NAGANT_D, fm:'Revolver' },
  { id:'vandal_73c',            name:'Vandal 73C',                      slots:2, ammo:'small',  ammoFn:SA.VANDAL,   fm:'Hebel-Repetier' },
  { id:'vandal_73c_striker',    name:'Vandal 73C Striker',              slots:2, ammo:'small',  ammoFn:SA.VANDAL,   fm:'Hebel-Repetier' },
  { id:'vandal_73c_bullseye',   name:'Vandal 73C Bullseye',             slots:2, ammo:'small',  ammoFn:SA.VANDAL,   fm:'Hebel-Repetier' },
  // LONG 1
  { id:'sparks_pistol',         name:'Sparks Pistol',                   slots:1, ammo:'long',   ammoFn:LA.SPARKS_P, fm:'Einzelschuss' },
  { id:'sparks_pistol_sil',     name:'Sparks Pistol Silencer',          slots:1, ammo:'long',   ammoFn:LA.SPARKS_P, fm:'Einzelschuss' },
  { id:'uppercut',              name:'Uppercut',                        slots:1, ammo:'long',   ammoFn:LA.UPPERCUT, fm:'Einzelschuss' },
  // MEDIUM 1
  { id:'pax',                   name:'Pax',                             slots:1, ammo:'medium', ammoFn:MA.PAX,      fm:'Revolver' },
  { id:'pax_claw',              name:'Pax Claw',                        slots:1, ammo:'medium', ammoFn:MA.PAX,      fm:'Revolver' },
  { id:'pax_trueshot',          name:'Pax Trueshot',                    slots:1, ammo:'medium', ammoFn:MA.PAX,      fm:'Revolver' },
  { id:'scottfield',            name:'Scottfield',                      slots:1, ammo:'medium', ammoFn:MA.SCOTTF,   fm:'Revolver' },
  { id:'scottfield_brawler',    name:'Scottfield Brawler',              slots:1, ammo:'medium', ammoFn:MA.SCOTTF,   fm:'Revolver' },
  { id:'scottfield_spitfire',   name:'Scottfield Spitfire',             slots:1, ammo:'medium', ammoFn:MA.SCOTTF,   fm:'Revolver' },
  { id:'scottfield_swift',      name:'Scottfield Swift',                slots:1, ammo:'medium', ammoFn:MA.SCOTTF,   fm:'Revolver' },
  // SMALL 1
  { id:'bornheim_no3',          name:'Bornheim No. 3',                  slots:1, ammo:'small',  ammoFn:SA.BORNHEIM, fm:'Vollautomat' },
  { id:'bornheim_no3_sil',      name:'Bornheim No. 3 Silencer',         slots:1, ammo:'small',  ammoFn:SA.BORNHEIM, fm:'Vollautomat' },
  { id:'bornheim_no3_ext',      name:'Bornheim No. 3 Extended',         slots:1, ammo:'small',  ammoFn:SA.BORNHEIM, fm:'Vollautomat' },
  { id:'conversion',            name:'Conversion',                      slots:1, ammo:'small',  ammoFn:SA.CONV,     fm:'Einzelschuss' },
  { id:'conversion_chain',      name:'Conversion Chain Pistol',         slots:1, ammo:'small',  ammoFn:SA.CONV,     fm:'Einzelschuss' },
  { id:'lemat',                 name:'LeMat',                           slots:1, ammo:'small',  ammoFn:SA.LEMAT,    fm:'Revolver', dual:'Schrotlauf: Standard, Incendiary(+15), Slug(+10)' },
  { id:'nagant_m1895',          name:'Nagant M1895',                    slots:1, ammo:'small',  ammoFn:SA.NAGANT,   fm:'Revolver' },
  { id:'nagant_m1895_sil',      name:'Nagant M1895 Silencer',           slots:1, ammo:'small',  ammoFn:SA.NAGANT,   fm:'Revolver' },
  { id:'new_army',              name:'New Army',                        slots:1, ammo:'small',  ammoFn:SA.NEW_ARMY, fm:'Revolver' },
  { id:'new_army_swift',        name:'New Army Swift',                  slots:1, ammo:'small',  ammoFn:SA.NEW_ARMY, fm:'Revolver' },
  { id:'officer',               name:'Officer',                         slots:1, ammo:'small',  ammoFn:SA.OFFICER,  fm:'Revolver' },
  { id:'officer_brawler',       name:'Officer Brawler',                 slots:1, ammo:'small',  ammoFn:SA.OFFICER,  fm:'Revolver' },
  // SHOTGUNS
  { id:'auto_5',                name:'Auto 5',                          slots:3, ammo:'medium', ammoFn:SH.AUTO5,    fm:'Halbautomatik' },
  { id:'auto4_shorty',          name:'Auto-4 Shorty',                   slots:2, ammo:'medium', ammoFn:SH.AUTO5,    fm:'Halbautomatik' },
  { id:'homestead_78',          name:'Homestead 78',                    slots:3, ammo:'medium', ammoFn:SH.HOME78,   fm:'Einzelschuss' },
  { id:'rival_78',              name:'Rival 78',                        slots:3, ammo:'medium', ammoFn:SH.RIVAL,    fm:'Einzelschuss' },
  { id:'rival_78_shorty',       name:'Rival 78 Shorty',                 slots:2, ammo:'medium', ammoFn:SH.RIVAL,    fm:'Einzelschuss' },
  { id:'rival_78_trauma',       name:'Rival 78 Trauma',                 slots:3, ammo:'medium', ammoFn:SH.RIVAL,    fm:'Einzelschuss' },
  { id:'rival_78_mace',         name:'Rival 78 Mace',                   slots:2, ammo:'medium', ammoFn:SH.RIVAL,    fm:'Einzelschuss' },
  { id:'romero_77',             name:'Romero 77',                       slots:3, ammo:'medium', ammoFn:SH.ROMERO,   fm:'Einzelschuss' },
  { id:'romero_77_shorty',      name:'Romero 77 Shorty',                slots:2, ammo:'medium', ammoFn:SH.ROMERO,   fm:'Einzelschuss' },
  { id:'romero_77_talon',       name:'Romero 77 Talon',                 slots:3, ammo:'medium', ammoFn:SH.ROMERO,   fm:'Einzelschuss' },
  { id:'romero_77_hatchet',     name:'Romero 77 Hatchet',               slots:2, ammo:'medium', ammoFn:SH.ROMERO,   fm:'Einzelschuss' },
  { id:'romero_77_alamo',       name:'Romero 77 Alamo',                 slots:3, ammo:'medium', ammoFn:SH.ROMERO,   fm:'Einzelschuss' },
  { id:'slate',                 name:'Slate',                           slots:3, ammo:'medium', ammoFn:SH.SLATE,    fm:'Pump-Action' },
  { id:'slate_riposte',         name:'Slate Riposte',                   slots:3, ammo:'medium', ammoFn:SH.SLATE,    fm:'Pump-Action' },
  { id:'specter_1882',          name:'Specter 1882',                    slots:3, ammo:'medium', ammoFn:SH.SPECTER,  fm:'Pump-Action' },
  { id:'specter_1882_shorty',   name:'Specter 1882 Shorty',             slots:2, ammo:'medium', ammoFn:SH.SPECTER,  fm:'Pump-Action' },
  { id:'specter_1882_bay',      name:'Specter 1882 Bayonet',            slots:3, ammo:'medium', ammoFn:SH.SPECTER,  fm:'Pump-Action' },
  { id:'terminus',              name:'Terminus',                        slots:3, ammo:'medium', ammoFn:SH.TERMINUS, fm:'Hebel-Repetier' },
  { id:'terminus_shorty',       name:'Terminus Shorty',                 slots:2, ammo:'medium', ammoFn:SH.TERMINUS, fm:'Hebel-Repetier' },
  // SPECIAL
  { id:'bomb_lance',            name:'Bomb Lance',                      slots:3, ammo:'special', ammoFn:SP.LANCE,   fm:'Einzelschuss' },
  { id:'bomb_launcher',         name:'Bomb Launcher',                   slots:2, ammo:'special', ammoFn:SP.LANCE,   fm:'Einzelschuss' },
  { id:'chu_ko_nu',             name:'Chu Ko Nu',                       slots:2, ammo:'special', ammoFn:SP.CHUKONU, fm:'Repetier' },
  { id:'crossbow',              name:'Crossbow',                        slots:3, ammo:'special', ammoFn:SP.CROSS,   fm:'Einzelschuss' },
  { id:'crossbow_deadeye',      name:'Crossbow Deadeye',                slots:3, ammo:'special', ammoFn:SP.CROSS,   fm:'Einzelschuss' },
  { id:'dolch_96',              name:'Dolch 96',                        slots:1, ammo:'special', ammoFn:SP.DOLCH,   fm:'Vollautomat' },
  { id:'dolch_96_claw',         name:'Dolch 96 Claw',                   slots:1, ammo:'special', ammoFn:SP.DOLCH,   fm:'Vollautomat' },
  { id:'dolch_96_bullseye',     name:'Dolch 96 Bullseye',               slots:1, ammo:'special', ammoFn:SP.DOLCH,   fm:'Vollautomat' },
  { id:'dolch_96_precision',    name:'Dolch 96 Precision',              slots:2, ammo:'special', ammoFn:SP.DOLCH,   fm:'Vollautomat' },
  { id:'handcrossbow',          name:'Handcrossbow',                    slots:1, ammo:'special', ammoFn:SP.HBOW,    fm:'Einzelschuss' },
  { id:'hunting_bow',           name:'Hunting Bow',                     slots:2, ammo:'special', ammoFn:SP.BOW,     fm:'Einzelschuss' },
  { id:'nitro_express',         name:'Nitro Express',                   slots:3, ammo:'special', ammoFn:SP.NITRO,   fm:'Einzelschuss' },
  // EVENT
  { id:'shredder',              name:'Shredder (Event)',                 slots:3, ammo:'special', ammoFn:SP.DOLCH,   fm:'Halbautomatik' },
  { id:'flame_rifle',           name:'Flame Rifle (Event)',              slots:2, ammo:'special', ammoFn:() => [A.std()], fm:'Halbautomatik' },
]

function fmt(ammoArr) {
  return ammoArr.map(a => {
    const pts = a.pts > 0 ? `(+${a.pts})` : a.pts < 0 ? `(${a.pts})` : ''
    return a.label + pts
  }).join(', ')
}

let out = ''
out += '='.repeat(80) + '\n'
out += 'HUNT: SHOWDOWN WAFFENLISTE — Munition & Feuermodus\n'
out += 'Format: ID | Name [Slots, Munitionstyp] | Feuermodus | Aktuelle Munition\n'
out += 'Bitte korrigiere/ergänze Feuermodus und Munition und sende die Liste zurück.\n'
out += '='.repeat(80) + '\n\n'

for (const w of weapons) {
  const ammoStr = fmt(w.ammoFn())
  const line = `${w.id.padEnd(28)} | ${w.name.padEnd(40)} | ${(w.slots+'S '+w.ammo).padEnd(10)} | ${w.fm.padEnd(18)} | ${ammoStr}`
  out += line + '\n'
  if (w.dual)  out += ' '.repeat(28) + '   ++ ' + w.dual + '\n'
  if (w.note)  out += ' '.repeat(28) + '   !! ' + w.note + '\n'
}

out += '\n' + '='.repeat(80) + '\n'
out += `Gesamt: ${weapons.length} Waffen\n`

process.stdout.write(out)
