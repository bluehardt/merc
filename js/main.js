player = null;
enemy1 = null;

window.onload = function() {
    player = new Character(false);
    player.setName('Eckhardt');
    player.setRace(race_human);
    player.setCareer(c_peasant);
    player.setCareer(c_militiaman);
    player.setCareer(c_soldier);
    player.setCareer(c_sergeant);

    player.addExp(1500);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.STRENGTH);
    player.upAttr(stat.STRENGTH);
    player.upAttr(stat.THOUGHNESS);
    player.upAttr(stat.THOUGHNESS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.ATTACKS);

    player.equipArmorPiece(arm_mail_full);
    player.equipWeapon(wm_sword);

    console.log(player)
    player.toString();

    enemy1 = new Character();
    enemy1.setName('Joe the Beast');
    enemy1.setRace(race_beastmen_bestigor);
    enemy1.setCareer(c_none);
    enemy1.equipWeapon(wm_sword);
    enemy1.toString();

    console.log(enemy1);
}

function startFight(button) {
    console.clear();

    let turn = 0;

    let interval = setInterval(() => {
        if (turn % 2 === 0) {
            console.log(attack(player, enemy1));
        } else {
            console.log(attack(enemy1, player));
        }

        turn++;

        if(player.curr_hp < 0 || enemy1.curr_hp < 0) {
            clearInterval(interval);
            button.disabled = false;

            player.curr_hp = player.hp;
            enemy1.curr_hp = enemy1.hp;
        }
    }, 1000);
}