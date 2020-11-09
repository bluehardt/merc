import { eq_quality, eq_rarity } from "../../enums/equipment";
import { wpn_group, wpn_qualities, wpn_reload, wpn_type } from "../../enums/weapon";
import { Weapon } from "../../models/weapon";

export const wr_crossbow = new Weapon(
    'crossbow',
    wpn_group.ORDINARY, wpn_type.TWO_HANDED,
    4, null,
    [30, 60], wpn_reload.FULL,
    [],
    eq_quality.COMMON, 25, 120, eq_rarity.AVERAGE
);

export const wr_bow = new Weapon(
    'bow',
    wpn_group.ORDINARY, wpn_type.TWO_HANDED,
    3, null,
    [24, 48], wpn_reload.HALF,
    [],
    eq_quality.COMMON, 10, 80, eq_rarity.COMMON
);

export const wr_longbow = new Weapon(
    'longbow',
    wpn_group.LONGBOW, wpn_type.TWO_HANDED,
    3, null,
    [30, 60], wpn_reload.HALF,
    [wpn_qualities.ARMOR_PIERCING],
    eq_quality.COMMON, 15, 90, eq_rarity.AVERAGE
);