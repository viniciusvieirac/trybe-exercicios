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

  const damageMage = () => {
    let result = {
        mana: 0,
        damages: 'Sem mana'
    };
    const strength = mage.intelligence;
    const damage = strength * 2;
    const mana = mage.mana;
    if (mana > 15) {
        result.mana = 15;
        result.damages = damage;
    return result ;
  }
}
console.log(damageMage());