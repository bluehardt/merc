window.onload = function() {
    const player = new Character(false);
    player.setName('Eckhardt');
    player.setRace(race_human);
    player.rollBaseStats();
    player.setCareer(c_peasant);
    player.setCareer(c_militiaman);
    player.setCareer(c_soldier);

    player.addExp(1000);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.WEAPON_SKILL);
    player.upAttr(stat.STRENGTH);
    player.upAttr(stat.THOUGHNESS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.WOUNDS);
    player.upAttr(stat.ATTACKS);

    console.log(player)
    player.toString();

    const npc1 = new Character();
    npc1.setName('Militiman_1');
    npc1.setRace(race_human);
    npc1.rollBaseStats();
    npc1.setCareer(c_militiaman);
    npc1.addExp(300);
    npc1.upAttr(stat.WEAPON_SKILL);
    npc1.upAttr(stat.STRENGTH);
    npc1.upAttr(stat.AGILITY);
    npc1.toString();

    const npc2 = new Character();
    npc2.setName('Militiman_2');
    npc2.setRace(race_human);
    npc2.rollBaseStats();
    npc2.setCareer(c_militiaman);
    npc2.addExp(200);
    npc2.upAttr(stat.WOUNDS);
    npc2.upAttr(stat.WOUNDS);
    npc2.toString();

    const beastmen1 = new Character();
    beastmen1.setName('Gor_1');
    beastmen1.setRace(race_beastmen_gor);
    beastmen1.rollBaseStats();
    beastmen1.setCareer(c_none);
    beastmen1.toString();

    const beastmen2 = new Character();
    beastmen2.setName('Bestigor_1');
    beastmen2.setRace(race_beastmen_bestigor);
    beastmen2.rollBaseStats();
    beastmen2.setCareer(c_none);
    beastmen2.toString();

    const beastmen3 = new Character();
    beastmen3.setName('Centigor_1');
    beastmen3.setRace(race_beastmen_centigor);
    beastmen3.rollBaseStats();
    beastmen3.setCareer(c_none);
    beastmen3.toString();
}