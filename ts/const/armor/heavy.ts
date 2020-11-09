import { armor_cover, armor_type } from "../../enums/armor"
import { eq_rarity } from "../../enums/equipment"
import { Armor } from "../../models/armor"

//BASIC

// HEAVY ADVANCED
export const arm_plate_helmet = new Armor(
    'helmet',
    armor_type.HEAVY,
    2,
    [armor_cover.HEAD],
    30, 40, eq_rarity.SCARCE
)

export const arm_breastplate = new Armor(
    'breastplate',
    armor_type.HEAVY,
    2,
    [armor_cover.BODY],
    70, 75, eq_rarity.SCARCE
)

export const arm_plate_bracers = new Armor(
    'plate bracers',
    armor_type.HEAVY,
    2,
    [armor_cover.ARMS],
    60, 30, eq_rarity.SCARCE
)

export const arm_plate_leggins = new Armor(
    'plate leggins',
    armor_type.HEAVY,
    2,
    [armor_cover.LEGS],
    70, 40, eq_rarity.SCARCE
)