/**
 * @param {Character} attacker 
 * @param {Character} defendant 
 */
function attack(attacker, defendant) {
    const hit_roll = roll(100);
    let is_hit = hit_roll <= attacker.ws ? true : false;

    if (is_hit) {
        const init_dmg = roll(10);
        
        // check what kind of damage is dealt by weapon
        let attacker_dmg = attacker.weapon.dmg !== null ? attacker.weapon.damage : (attacker.sb + attacker.weapon.damage_mod);

        // calculating dmg
        let dmg = init_dmg + attacker_dmg - (defendant.tb + defendant.armor.bonus);
        if (dmg < 0) dmg = 0;

        // lowering hp of defendant
        defendant.curr_hp -= dmg;
        
        let msg = `${attacker.name} [${attacker.curr_hp}/${attacker.hp}] dealt ${dmg} damage to ${defendant.name} [${defendant.curr_hp}/${defendant.hp}] [${hit_roll}%]`;

        if (defendant.curr_hp < 0) {
            return (msg + `\n${defendant.name} is DEAD!`);
        } else {
            return msg;
        }
    } else {
        return `${attacker.name} missed! [${hit_roll}%]`
    }
}

function rollInitiative() {
    
}