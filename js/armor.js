const armor_cover = {
    HEAD: 'head',
    BODY: 'body',
    ARMS: 'arms',
    LEGS: 'legs'
}

const armor_type = {
    LIGHT: 'light',
    MEDIUM: 'medium',
    HEAVY: 'heavy'
}

class Armor {
    covered = {
        head: false,
        body: false,
        arms: false,
        legs: false
    }

    /**
     * @param {string} name 
     * @param {string} type 
     * @param {number} bonus 
     * @param {string[]} covered 
     * @param {number} cost 
     * @param {number} weight 
     * @param {string} rarity 
     */
    constructor(name, type, bonus, covered, cost, weight, rarity) {
        this.name = name;
        this.type = type;
        this.bonus = bonus;
        this.cost = cost;
        this.weight = weight;
        this.rarity = rarity;

        if (covered.length > 0) {
            for (const el of covered) {
                for (const key of Object.keys(this.covered)) {
                    if (key === el) {
                        this.covered[key] = true;
                    }
                }
            }
        }
    }
}

// BASIC ARMORS
const arm_leather_full = new Armor(
    'leather armor',
    armor_type.LIGHT,
    1,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    30, 80, eq_rarity.COMMON
)

const arm_leather_2_full = new Armor(
    'strenghtened leather armor',
    armor_type.LIGHT,
    2,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    50, 120, eq_rarity.AVERAGE

    )
const arm_mail_full = new Armor(
    'mail armor',
    armor_type.LIGHT,
    3,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    120, 300, eq_rarity.SCARCE
)

// LEATHER
const arm_leather_skullcap = new Armor(
    'leather skullcap',
    armor_type.LIGHT,
    1,
    [armor_cover.HEAD],
    3, 10, eq_rarity.COMMON
)

const arm_leather_jerkin = new Armor(
    'leather jerkin',
    armor_type.LIGHT,
    1,
    [armor_cover.BODY],
    6, 40, eq_rarity.COMMON
)

const arm_leather_jacket = new Armor(
    'leather jacket',
    armor_type.LIGHT,
    1,
    [armor_cover.BODY, armor_cover.ARMS],
    12, 50, eq_rarity.COMMON
)

const arm_leather_leggins = new Armor(
    'leather leggins',
    armor_type.LIGHT,
    1,
    [armor_cover.LEGS],
    10, 20, eq_rarity.COMMON
)

// CHAIN
const arm_mail_coif = new Armor(
    'mail coif',
    armor_type.MEDIUM,
    2,
    [armor_cover.HEAD],
    20, 30, eq_rarity.AVERAGE
)

const arm_mail_shirt = new Armor(
    'mail shirt',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY],
    60, 60, eq_rarity.AVERAGE
)

const arm_sleeved_mail_shirt = new Armor(
    'sleeved mail shirt',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.ARMS],
    95, 80, eq_rarity.AVERAGE
)

const arm_mail_coat = new Armor(
    'mail coat',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.LEGS],
    75, 80, eq_rarity.AVERAGE
)

const arm_sleeved_mail_coat = new Armor(
    'sleeved mail coat',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    130, 100, eq_rarity.AVERAGE
)

const arm_mail_leggins = new Armor(
    'mail leggins',
    armor_type.MEDIUM,
    2,
    [armor_cover.LEGS],
    20, 40, eq_rarity.SCARCE
)

// PLATE
const arm_plate_helmet = new Armor(
    'helmet',
    armor_type.HEAVY,
    2,
    [armor_cover.HEAD],
    30, 40, eq_rarity.SCARCE
)

const arm_breastplate = new Armor(
    'breastplate',
    armor_type.HEAVY,
    2,
    [armor_cover.BODY],
    70, 75, eq_rarity.SCARCE
)

const arm_plate_bracers = new Armor(
    'plate bracers',
    armor_type.HEAVY,
    2,
    [armor_cover.ARMS],
    60, 30, eq_rarity.SCARCE
)

const arm_plate_leggins = new Armor(
    'plate leggins',
    armor_type.HEAVY,
    2,
    [armor_cover.LEGS],
    70, 40, eq_rarity.SCARCE
)