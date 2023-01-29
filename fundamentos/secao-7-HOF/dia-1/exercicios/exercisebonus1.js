const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = (dragon) => {
    const dragonStrenght = 15;
   const damage = Math.floor(Math.random() * dragon.strength);
    if (dragonStrenght < damage) {
        return damage;
    }
    return dragonStrenght;
  }
  console.log(dragonDamage(dragon));