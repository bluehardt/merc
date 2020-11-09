export class Race {
    name: string;
    ws: number;
    bs: number;
    s: number;
    t: number;
    ag: number;
    int: number;
    wp: number;
    cha: number;
    hp: number;
    att: number;

    constructor(
        name: string,
        ws: number,
        bs: number,
        s: number,
        t: number,
        ag: number,
        int: number,
        wp: number,
        cha: number,
        hp: number,
        att: number
    ) {
        this.name = name;
        this.ws = ws;
        this.bs = bs;
        this.s = s;
        this.t = t;
        this.ag = ag;
        this.int = int;
        this.wp = wp;
        this.cha = cha;
        this.hp = hp;
        this.att = att;
    }
}