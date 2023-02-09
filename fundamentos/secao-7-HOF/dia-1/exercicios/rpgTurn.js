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
  
  const warriorDamage = (warrior) => {
    const minDamage = warrior.strength;
    const damage = Math.floor(Math.random() * (minDamage * warrior.weaponDmg));
    return damage;
  }

  const damageMage = (mage) => {
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

// parte 2;

const gameActions = {
    // Crie as HOFs neste objeto.
    turnWarrior: (warriorDamage) => {
        const warriorDmg = warriorDamage(warrior);
        dragon.healthPoints -= warriorDmg;
        warrior.damage = warriorDmg;
    },

    turnMage: (damageMage) => {
        const mageDmg = damageMage(mage);
        const mageTurn = mageDmg.damages;
        mage.mana -= mageDmg.mana;
        dragon.healthPoints -= mageTurn;
        mage.damage = mageDmg;
    },

    dragonTurn: (dragonDamage) => {
        const dragonDmg = dragonDamage(dragon);
        warrior.healthPoints -= dragonDmg;
        mage.healthPoints -= dragonDmg;
        dragon.damage = dragonDmg;
    },

    turnResults: () => battleMembers,
    
};

gameActions.turnWarrior(warriorDamage);
gameActions.turnMage(damageMage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());

