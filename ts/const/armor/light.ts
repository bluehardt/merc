import { eq_rarity } from "../../enums/equipment"

export const arm_no_armor = new Armor(
    'naked',
    armor_type.LIGHT,
    0,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    0, 0, eq_rarity.COMMON
)

// BASIC
export const arm_leather_full = new Armor(
    'leather armor',
    armor_type.LIGHT,
    1,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    30, 80, eq_rarity.COMMON
)

export const arm_leather_2_full = new Armor(
    'strenghtened leather armor',
    armor_type.LIGHT,
    2,
    [armor_cover.HEAD, armor_cover.BODY, armor_cover.ARMS, armor_cover.LEGS],
    50, 120, eq_rarity.AVERAGE

    )

// LIGHT ADVANCED
export const arm_leather_skullcap = new Armor(
    'leather skullcap',
    armor_type.LIGHT,
    1,
    [armor_cover.HEAD],
    3, 10, eq_rarity.COMMON
)

export const arm_leather_jerkin = new Armor(
    'leather jerkin',
    armor_type.LIGHT,
    1,
    [armor_cover.BODY],
    6, 40, eq_rarity.COMMON
)

export const arm_leather_jacket = new Armor(
    'leather jacket',
    armor_type.LIGHT,
    1,
    [armor_cover.BODY, armor_cover.ARMS],
    12, 50, eq_rarity.COMMON
)

export const arm_leather_leggins = new Armor(
    'leather leggins',
    armor_type.LIGHT,
    1,
    [armor_cover.LEGS],
    10, 20, eq_rarity.COMMON
)
