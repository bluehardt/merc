import { eq_quality, eq_rarity } from "../../enums/equipment";
import { wpn_group, wpn_qualities, wpn_type } from "../../enums/weapon";
import { Weapon } from "../../models/weapon";

export const wm_no_weapon = new Weapon(
    'unarmed',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -4,
    null, null,
    [],
    eq_quality.COMMON, 0, 0, eq_rarity.COMMON
);

export const wm_sword = new Weapon(
    'sword',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, 0,
    null, null,
    [],
    eq_quality.COMMON, 10, 50, eq_rarity.COMMON
);

export const wm_knife = new Weapon(
    'knife',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -3,
    null, null,
    [],
    eq_quality.COMMON, 1, 10, eq_rarity.COMMON
);

export const wm_great_sword = new Weapon(
    'great sword',
    wpn_group.TWO_HANDED, wpn_type.TWO_HANDED,
    null, 0,
    null, null,
    [wpn_qualities.IMPACT, wpn_qualities.SLOW],
    eq_quality.COMMON, 20, 200, eq_rarity.AVERAGE
);

export const wm_table_leg = new Weapon(
    'table leg',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -4,
    null, null,
    [],
    eq_quality.GOOD, 0, 35, eq_rarity.ABUNDANT
);

export const wm_buckler = new Weapon(
    'buckler',
    wpn_group.PARRYING, wpn_type.ONE_HANDED,
    null, -4,
    null, null,
    [wpn_qualities.BALANCED, wpn_qualities.DEFENSIVE, wpn_qualities.PUMMELING],
    eq_quality.COMMON, 2, 10, eq_rarity.AVERAGE
);

export const wm_shield = new Weapon(
    'shield',
    wpn_group.ORDINARY, wpn_type.ONE_HANDED,
    null, -2,
    null, null,
    [wpn_qualities.DEFENSIVE, wpn_qualities.SPECIAL],
    eq_quality.POOR, 10, 50, eq_rarity.COMMON
);