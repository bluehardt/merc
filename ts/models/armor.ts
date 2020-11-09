export class Armor {
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


    constructor(
        name: string,
        type: string,
        bonus: number,
        covered: string[],
        cost: number,
        weight: number,
        rarity: string    
    ) {
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