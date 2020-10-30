class Race {
    constructor(name, ws, bs, s, t, ag, int, wp, cha, hp, att) {
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
    }
}

const race_human = new Race(
    'Human',
    20, 20, 20, 20, 20, 20, 20, 20, 9, 1
)

const race_dwarf = new Race(
    'Dwarf',
    30, 20, 20, 30, 10, 20, 20, 10, 10, 1
)

const race_elf = new Race(
    'Elf',
    20, 30, 20, 20, 30, 20, 20, 20, 8, 1
)

// BEASTMEN
const race_beastmen_gor = new Race(
    'Beastmen - Gor',
    30, 15, 25, 30, 25, 15, 15, 15, 10, 1
)

const race_beastmen_bestigor = new Race(
    'Beastmen - Bestigor',
    35, 15, 30, 35, 25, 15, 25, 15, 12, 1
)

const race_beastmen_centigor = new Race(
    'Beastmen - Centigor',
    30, 20, 35, 35, 15, 15, 20, 15, 12, 2
)

const race_beastmen_ungor = new Race(
    'Beastmen - Ungor',
    30, 10, 35, 35, 15, 15, 15, 10, 12, 2
)