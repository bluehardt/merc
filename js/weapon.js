const wpn_qualities = {
    ARMOR_PIERCING: 'armor_piercing',
    BALANCED: 'balanced',
    DEFENSIVE: 'defensive',
    EXPERIMENTAL: 'experimental',
    FAST: 'fast',
    IMPACT: 'impact',
    PRECISE: 'precise',
    PUMMELING: 'pummeling',
    SHRAPNEL: 'shrapnel',
    SLOW: 'slow',
    SNARE: 'snare',
    SPECIAL: 'special',
    TIRING: 'tiring',
    UNRELIABLE: 'unreliable'
}

const eq_quality = {
    BEST: 'best',
    GOOD: 'good',
    COMMON: 'common',
    POOR: 'poor'
}

const wpn_group = {
    ORDINARY: 'ordinary',
    CAVALRY: 'cavalry',
    CROSSBOW: 'crossbow',
    ENGINEER: 'engineer',
    ENTANGLING: 'entangling',
    FENCING: 'fencing',
    FLAIL: 'flail',
    GUNPOWDER: 'gunpowder',
    LONGBOW: 'longbow',
    PARRYING: 'parrying',
    SLING: 'sling',
    THROWING: 'throwing',
    TWO_HANDED: 'two_handed'
}

const eq_rarity = {
    VERY_RARE: 'very_rare',
    RARE: 'rare',
    SCARCE: 'scarce',
    AVERAGE: 'average',
    COMMON: 'common',
    PLENTIFUL: 'plentiful',
    ABUNDANT: 'abundant'
}

const wpn_type = {
    ONE_HANDED: 'one_handed',
    TWO_HANDED: 'two_handed',
}

const wpn_reload = {
    FREE: 'free',
    HALF: 'half',
    FULL: 'full',
    FULL_2: 'full_2',
    FULL_3: 'full_3',
    FULL_6: 'full_6',
}

class Weapon {
    qualities = {
        armor_piercing: false,
        balanced: false,
        defensive: false,
        experimental: false,
        fast: false,
        impact: false,
        precise: false,
        pummeling: false,
        shrapnel: false,
        slow: false,
        snare: false,
        special: false,
        tiring: false,
        unreliable: false
    }

    range = {
        optimal: null,
        penalty: null
    }

    constructor(name, group, type, damage, damage_mod, range, reload, qualities, quality, cost, weight, rarity) {
        this.name = name;
        this.group = group;
        this.type = type;
        this.damage = damage;
        this.damage_mod = damage_mod;
        this.reload = reload;
        this.quality = quality;
        this.cost = cost;
        this.weight = weight;
        this.rarity = rarity;

        if (qualities.length > 0) {
            for (const el of qualities) {
                for (const key of Object.keys(this.qualities)) {
                    if (key === el) {
                        this.qualities[key] = true;
                    }
                }
            }
        }

        if (range !== null) {
            this.range['optimal'] = range[0];
            if (range.length === 2) this.range['penalty'] = range[1];
        }
    }
}

const wm_sword = new Weapon(
    'Sword',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, 0,
    null, null,
    [],
    eq_quality.COMMON, 10, 50, eq_rarity.COMMON
);

const wm_great_sword = new Weapon(
    'Great sword',
    wpn_group.TWO_HANDED, wpn_type.TWO_HANDED,
    null, 0,
    null, null,
    [wpn_qualities.IMPACT, wpn_qualities.SLOW],
    eq_quality.COMMON, 20, 200, eq_rarity.AVERAGE
);

const wm_table_leg = new Weapon(
    'Table leg',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -4,
    null, null,
    [],
    eq_quality.GOOD, 0, 35, eq_rarity.ABUNDANT
);

const wm_buckler = new Weapon(
    'Buckler',
    wpn_group.PARRYING, wpn_type.ONE_HANDED,
    null, -4,
    null, null,
    [wpn_qualities.BALANCED, wpn_qualities.DEFENSIVE, wpn_qualities.PUMMELING],
    eq_quality.COMMON, 2, 10, eq_rarity.AVERAGE
);

const wm_shield = new Weapon(
    'Shield',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -2,
    null, null,
    [wpn_qualities.DEFENSIVE, wpn_qualities.SPECIAL],
    eq_quality.POOR, 10, 50, eq_rarity.COMMON
);

const wr_crossbow = new Weapon(
    'Crossbow',
    wpn_group.ORDINARY, wpn_type.TWO_HANDED,
    4, null,
    [30, 60], wpn_reload.FULL,
    [],
    eq_quality.COMMON, 25, 120, eq_rarity.AVERAGE
);

const wr_bow = new Weapon(
    'Bow',
    wpn_group.ORDINARY, wpn_type.TWO_HANDED,
    3, null,
    [24, 48], wpn_reload.HALF,
    [],
    eq_quality.COMMON, 10, 80, eq_rarity.COMMON
);

const wr_longbow = new Weapon(
    'Longbow',
    wpn_group.LONGBOW, wpn_type.TWO_HANDED,
    3, null,
    [30, 60], wpn_reload.HALF,
    [wpn_qualities.ARMOR_PIERCING],
    eq_quality.COMMON, 15, 90, eq_rarity.AVERAGE
);