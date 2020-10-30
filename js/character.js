const stat = {
    WEAPON_SKILL: 'ws',
    BALLISTIC_SKILL: 'bs',
    STRENGTH: 's',
    THOUGHNESS: 't',
    AGILITY: 'ag',
    INTELIGENCE: 'int',
    WILL_POWER: 'wp',
    CHARISMA: 'cha',
    WOUNDS: 'hp',
    ATTACKS: 'att',
};

function roll(dice) {
    min = 1;
    max = Math.floor(dice);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Character {
    constructor(is_npc = true) {
        this.name = 'Nameless';
        this.race = null;
        this.past_career = [];
        this.curr_career = null;
        this.exp = 0;
        this.is_npc = is_npc;

        this.setCareer(c_none);

    }

    setId() {
        this.id = `char_${this.name.replace(/\s/g, '').toLowerCase()}_${this.base_ws}${this.base_s}${this.base_t}${this.base_ag}`;
    }

    rollBaseStats() {
        this.base_ws += roll(10) + roll(10);
        this.base_bs += roll(10) + roll(10);
        this.base_s += roll(10) + roll(10);
        this.base_t += roll(10) + roll(10);
        this.base_ag += roll(10) + roll(10);
        this.base_int += roll(10) + roll(10);
        this.base_wp += roll(10) + roll(10);
        this.base_cha += roll(10) + roll(10);
        this.base_hp += roll(4);

        this.up_ws = 0;
        this.up_bs = 0;
        this.up_s = 0;
        this.up_t = 0;
        this.up_ag = 0;
        this.up_int = 0;
        this.up_wp = 0;
        this.up_cha = 0;
        this.up_hp = 0;
        this.up_att = 0;

        this.calcStats();
        this.setId();
    }

    calcStats() {
        this.ws = this.base_ws + this.up_ws;
        this.bs = this.base_bs + this.up_bs;
        this.s = this.base_s + this.up_s;
        this.t = this.base_t + this.up_t;
        this.ag = this.base_ag + this.up_ag;
        this.int = this.base_int + this.up_int;
        this.wp = this.base_wp + this.up_wp;
        this.cha = this.base_cha + this.up_cha;
        this.hp = this.base_hp + this.up_hp;
        this.att = this.base_att + this.up_att;
        this.sb = Math.floor(this.s / 10);
        this.tb = Math.floor(this.t / 10);
    }

    setName(name) {
        this.name = name;
    }

    setRace(race) {
        this.race = race.name;
        this.base_ws = race.ws;
        this.base_bs = race.bs;
        this.base_s = race.s;
        this.base_t = race.t;
        this.base_ag = race.ag;
        this.base_int = race.int;
        this.base_wp = race.wp;
        this.base_cha = race.cha;
        this.base_hp = race.hp;
        this.base_att = race.att;

        this.calcStats();
    }

    setCareer(career) {
        if (this.curr_career !== null) {
            this.past_career.push(this.curr_career);
        }
        this.curr_career = career.name;

        this.c_ws = Math.max(this.c_ws ?? 0, career.ws);
        this.c_bs = Math.max(this.c_bs ?? 0, career.bs);
        this.c_s = Math.max(this.c_s ?? 0, career.s);
        this.c_t = Math.max(this.c_t ?? 0, career.t);
        this.c_ag = Math.max(this.c_ag ?? 0, career.ag);
        this.c_int = Math.max(this.c_int ?? 0, career.int);
        this.c_wp = Math.max(this.c_wp ?? 0, career.wp);
        this.c_cha = Math.max(this.c_cha ?? 0, career.cha);
        this.c_hp = Math.max(this.c_hp ?? 0, career.hp);
        this.c_att = Math.max(this.c_att ?? 0, career.att);
    }

    // TODO: make more generic?
    upAttr(attr) {
        if (this.exp > 100) {
            let stat_improved = false;

            switch (attr) {
                case stat.WEAPON_SKILL:
                    if (this.up_ws < this.c_ws) {
                        this.up_ws += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.BALLISTIC_SKILL:
                    if (this.up_bs < this.c_bs) {
                        this.up_bs += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.STRENGTH:
                    if (this.up_s < this.c_s) {
                        this.up_s += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.THOUGHNESS:
                    if (this.up_t < this.c_t) {
                        this.up_t += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.AGILITY:
                    if (this.up_ag < this.c_ag) {
                        this.up_ag += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.INTELIGENCE:
                    if (this.up_int < this.c_int) {
                        this.up_int += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.WILL_POWER:
                    if (this.up_wp < this.c_wp) {
                        this.up_wp += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.CHARISMA:
                    if (this.up_cha < this.c_cha) {
                        this.up_cha += 5;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.WOUNDS:
                    if (this.up_hp < this.c_hp) {
                        this.up_hp += 1;
                        stat_improved = !stat_improved;
                    }
                    break;
                case stat.ATTACKS:
                    if (this.up_att < this.c_att) {
                        this.up_att += 1;
                        stat_improved = !stat_improved;
                    }
                    break;
            }

            if (stat_improved) this.addExp(-100);

            this.calcStats();
        }
    }

    addExp(value) {
        this.exp += value;
    }

    toString() {
        let target = document.getElementsByClassName('char')[0];

        let char_div = document.createElement('div');
        char_div.setAttribute('id', this.id);
        target.appendChild(char_div);

        let table = document.createElement('table');
        // ta
        let row, cell;

        row = table.insertRow();
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.name));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(`(${this.race})`));
        if (!this.is_npc) {
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`[${this.exp} exp]`));
        }

        if (!this.is_npc) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.curr_career));
        }

        char_div.appendChild(table);
        table = document.createElement('table');

        row = table.insertRow();
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('ws'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('bs'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('s'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('t'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('ag'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('int'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('wp'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('cha'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('hp'));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode('att'));

        if (!this.is_npc) {
            row = table.insertRow();
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_ws));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_bs));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_s));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_t));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_ag));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_int));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_wp));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_cha));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_hp));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(this.base_att));

        
            row = table.insertRow();
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_ws}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_bs}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_s}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_t}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_ag}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_int}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_wp}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_cha}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_hp}`));
            cell = row.insertCell();
            cell.appendChild(document.createTextNode(`+${this.c_att}`));
        }

        row = table.insertRow();
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.ws));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.bs));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.s));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.t));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.ag));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.int));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.wp));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.cha));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.hp));
        cell = row.insertCell();
        cell.appendChild(document.createTextNode(this.att));

        char_div.appendChild(table);
    }
}