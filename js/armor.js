const arm_cover = {
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

    constructor(name, type, defence, covered, cost, weigth, rarity) {
        this.name = name;
        this.type = type;
        this.defence = defence;
        this.cost = cost;
        this.weight = weigth;
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

// LEATHER
const arm_leather_skullcap = new Armor(
    'Leather Skullcap',
    armor_type.LIGHT,
    1,
    [arm_cover.HEAD],
    3, 10, eq_rarity.COMMON
)

const arm_leather_jerkin = new Armor(
    'Leather Jerkin',
    armor_type.LIGHT,
    1,
    [arm_cover.BODY],
    6, 40, eq_rarity.COMMON
)

const arm_leather_jacket = new Armor(
    'Leather Jacket',
    armor_type.LIGHT,
    1,
    [arm_cover.BODY, arm_cover.ARMS],
    12, 50, eq_rarity.COMMON
)

const arm_leather_leggins = new Armor(
    'Leather Leggins',
    armor_type.LIGHT,
    1,
    [arm_cover.LEGS],
    10, 20, eq_rarity.COMMON
)

// CHAIN
const arm_mail_coif = new Armor(
    'Mail Coif',
    armor_type.MEDIUM,
    3,
    [arm_cover.HEAD],
    3+20, 10+30, eq_rarity.AVERAGE
)

const arm_mail_shirt = new Armor(
    'Mail Shirt',
    armor_type.MEDIUM,
    3,
    [arm_cover.BODY],
    6+60, 40+60, eq_rarity.AVERAGE
)

const arm_sleeved_mail_shirt = new Armor(
    'Sleeved Mail Shirt',
    armor_type.MEDIUM,
    3,
    [arm_cover.BODY, arm_cover.ARMS],
    12+95, 50+80, eq_rarity.AVERAGE
)

const arm_mail_coat = new Armor(
    'Mail Coat',
    armor_type.MEDIUM,
    3,
    [arm_cover.BODY, arm_cover.LEGS],
    6+10+75, 40+20+80, eq_rarity.AVERAGE
)

const arm_sleeved_mail_coat = new Armor(
    'Sleeved Mail Coat',
    armor_type.MEDIUM,
    3,
    [arm_cover.BODY, arm_cover.ARMS, arm_cover.LEGS],
    12+10+130, 50+20+100, eq_rarity.AVERAGE
)

const arm_mail_leggins = new Armor(
    'Mail Leggins',
    armor_type.MEDIUM,
    3,
    [arm_cover.LEGS],
    10+20, 20+40, eq_rarity.SCARCE
)

// PLATE
const arm_plate_helmet = new Armor(
    'Helmet',
    armor_type.HEAVY,
    5,
    [arm_cover.HEAD],
    3+20+30, 10+30+40, eq_rarity.SCARCE
)

const arm_breastplate = new Armor(
    'Breastplate',
    armor_type.HEAVY,
    5,
    [arm_cover.BODY],
    6+60+70, 40+60+75, eq_rarity.SCARCE
)

const arm_plate_bracers = new Armor(
    'Plate Bracers',
    armor_type.HEAVY,
    5,
    [arm_cover.ARMS],
    6+35+60, 10+20+30, eq_rarity.SCARCE
)

const arm_plate_leggins = new Armor(
    'Plate Leggins',
    armor_type.HEAVY,
    5,
    [arm_cover.LEGS],
    10+20+70, 20+40+40, eq_rarity.SCARCE
)