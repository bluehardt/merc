import { armor_cover, armor_type } from "../../enums/armor"
import { eq_rarity } from "../../enums/equipment"
import { Armor } from "../../models/armor"


// BASIC
export const arm_mail_full = new Armor(
    'mail armor',
    armor_type.LIGHT,
    3,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    120, 300, eq_rarity.SCARCE
)

// MEDIUM ADVANCED
export const arm_mail_coif = new Armor(
    'mail coif',
    armor_type.MEDIUM,
    2,
    [armor_cover.HEAD],
    20, 30, eq_rarity.AVERAGE
)

export const arm_mail_shirt = new Armor(
    'mail shirt',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY],
    60, 60, eq_rarity.AVERAGE
)

export const arm_sleeved_mail_shirt = new Armor(
    'sleeved mail shirt',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.ARMS],
    95, 80, eq_rarity.AVERAGE
)

export const arm_mail_coat = new Armor(
    'mail coat',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.LEGS],
    75, 80, eq_rarity.AVERAGE
)

export const arm_sleeved_mail_coat = new Armor(
    'sleeved mail coat',
    armor_type.MEDIUM,
    2,
    [armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    130, 100, eq_rarity.AVERAGE
)

export const arm_mail_leggins = new Armor(
    'mail leggins',
    armor_type.MEDIUM,
    2,
    [armor_cover.LEGS],
    20, 40, eq_rarity.SCARCE
)