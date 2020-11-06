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
    name: string;
    type: string;
    bonus: number;
    cost: number;
    weight: number;
    rarity: string;
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

        // if (covered.length > 0) {
        //     for (const el of covered) {
        //         for (const key of Object.keys(this.covered)) {
        //             if (key === el) {
        //                 this.covered[key] = true;
        //             }
        //         }
        //     }
        // }
    }
}