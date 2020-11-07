player = null;
enemy1 = null;

team1 = null;
team2 = null;

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
    enemy1.setRace(race_beastmen_gor);
    enemy1.setCareer(c_none);
    enemy1.equipWeapon(wm_sword);
    enemy1.toString();

    enemy2 = new Character();
    enemy2.setName('Johnny the Puppy');
    enemy2.setRace(race_beastmen_ungor);
    enemy2.setCareer(c_none);
    enemy2.equipWeapon(wm_sword);
    enemy2.toString();

    enemy3 = new Character();
    enemy3.setName('Furry the Kitty');
    enemy3.setRace(race_beastmen_ungor);
    enemy3.setCareer(c_none);
    enemy3.equipWeapon(wm_sword);
    enemy3.toString();

    team1 = [player];
    team2 = [enemy1, enemy2, enemy3];
}

function startFight(button) {
    console.clear();

    let turn = 0;

    let interval = setInterval(() => {
        if (turn % 2 === 0) {
            for (let t1 of team1) {
                console.log(attack(t1, team2[0]));
                if (team2[0].curr_hp < 0) team2 = team2.filter(el => el !== team2[0]);
            }
        } else {
            for (let t2 of team2) {
                console.log(attack(t2, team1[0]));
                if (team1[0].curr_hp < 0) team1 = team1.filter(el => el !== team1[0]);
            }
        }

        turn++;

        if (team1.length < 1 || team2.length < 1) {
            clearInterval(interval);
            button.disabled = false;

            player.reset();
            enemy1.reset();
            enemy2.reset();
            enemy3.reset();

            team1 = [player];
            team2 = [enemy1, enemy2, enemy3];
        }
    }, 1000);
}