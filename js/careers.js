class Career {
    constructor(name, ws, bs, s, t, ag, int, wp, cha, att, hp, exit) {
        this.name = name;
        this.ws = ws;
        this.bs = bs;
        this.s = s;
        this.t = t;
        this.ag = ag;
        this.int = int;
        this.wp = wp;
        this.cha = cha;
        this.hp = hp;
        this.att = att;
        this.exit = exit;
    }
}

const c_none = new Career(
    null,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    []
)

// tier 1
const c_peasant = new Career(
    'Peasant',
    5, 5, 5, 10, 5, 0, 5, 0, 0, 2,
    ['Militiaman']
);

const c_woodsman = new Career(
    'Woodsman',
    10, 0, 10, 0, 5, 0, 10, 0, 0, 3,
    ['Militiaman']
);

const c_fisherman = new Career(
    'Fisherman',
    0, 5, 10, 5, 10, 5, 0, 0, 0, 2,
    ['Militiaman']
);

const c_militiaman = new Career(
    'Militiaman',
    10, 5, 5, 5, 10, 0, 0, 0, 0, 2,
    ['Mercenary', 'Soldier']
);

// tier 2
const c_mercenary = new Career(
    'Mercenary',
    10, 10, 5, 5, 5, 0, 5, 0, 1, 2,
    ['Bounty Hunter', 'Veteran']
);

const c_soldier = new Career(
    'Soldier',
    10, 10, 0, 0, 10, 0, 5, 0, 1, 2,
    ['Sergeant', 'Veteran']
);

const c_squire = new Career(
    'Squire',
    10, 5, 5, 5, 5, 0, 0, 5, 1, 2,
    ['Knight', 'Veteran']
);

const c_thug = new Career(
    'Thug',
    10, 0, 5, 5, 0, 0, 5, 5, 1, 2,
    ['Racketeer']
);

// tier 3
const c_duellist = new Career(
    'Duellist',
    20, 20, 10, 20, 20, 15, 15, 10, 1, 4,
    ['']
);

const c_explorer = new Career(
    'Explorer',
    20, 20, 10, 15, 15, 25, 20, 15, 1, 6,
    ['']
);

const c_knight = new Career(
    'Knight',
    25, 0, 15, 15, 15, 5, 15, 5, 1, 4,
    ['']
);

const c_racketeer = new Career(
    'Racketeer',
    20, 15, 15, 10, 10, 0, 15, 10, 1, 5,
    ['']
);

const c_sergeant = new Career(
    'Sergeant',
    20, 15, 10, 10, 10, 10, 10, 20, 1, 4,
    ['']
);

const c_veteran = new Career(
    'Veteran',
    20, 20, 10, 10, 15, 0, 15, 0, 1, 6,
    ['']
);

// tier 4
const c_captain = new Career(
    'Captain',
    30, 20, 20, 20, 20, 15, 15, 25, 2, 7,
    ['']
);

const c_champion = new Career(
    'Champion',
    35, 0, 15, 15, 20, 10, 15, 0, 2, 6,
    ['']
);

const c_grand_knight = new Career(
    'Grand Knight',
    35, 10, 20, 20, 20, 15, 25, 15, 2, 8,
    ['']
);

// tier 5
const c_weaponmaster = new Career(
    'Weaponmaster',
    40, 40, 25, 25, 30, 0, 20, 0, 2, 8,
    ['']
);