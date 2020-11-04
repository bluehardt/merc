import { eq_quality, eq_rarity } from "../enums/equipment";
import { wpn_group, wpn_qualities, wpn_reload, wpn_type } from "../enums/weapon";

class Weapon {
    name: string;
    group: wpn_group;
    type: wpn_type;
    damage: number | null;
    damage_mod: number | null;
    reload: wpn_reload | null;
    quality: eq_quality;
    cost: number;
    weight: number;
    rarity: eq_rarity;

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

    constructor(
        name: string,
        group: wpn_group,
        type: wpn_type,
        damage: number | null,
        damage_mod: number | null,
        range: any,
        reload: wpn_reload | null,
        qualities: wpn_qualities[],
        quality: eq_quality,
        cost: number,
        weight: number,
        rarity: eq_rarity) {
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
