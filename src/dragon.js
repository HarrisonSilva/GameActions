const { dragon } = require('./gameActionsCharacters')

const dragonDamage = () => {
    const strength = dragon.strength
    const newdamage = Math.floor(Math.random() * (strength - 15 + 1)) + 15;
    dragon.damage = newdamage
    return dragon.damage
  }

  const dragonMonster = (dragonAtack, warrior, mage) => {
    console.log('=========DRAGON=ATACKED=========');
    warrior.healthPoints -= dragonAtack
    mage.healthPoints -= dragonAtack
  
    const statistic = `🐉Dragon attacked 🗡Warrior and 🔥Mage  
    Damage Dragon: ${dragonAtack}
    healthPoints Warrior: ${warrior.healthPoints}
    healthPoints Mage: ${mage.healthPoints}
    `
    if (warrior.healthPoints <= 0) {
      console.log('💀💀💀💀💀');
      console.log(`The 🐉Dragon Killed 🗡Warrior!
      Damage Dragon: ${dragonAtack}
      healthPoints Mage: ${warrior.healthPoints}`);
      console.log('💀💀💀💀💀');
    } else if (mage.healthPoints <= 0) {
      console.log('💀💀💀💀💀');
      console.log(`The 🐉Dragon Killed 🔥Mage!
      Damage Dragon: ${dragonAtack}
      healthPoints Mage: ${mage.healthPoints}`);
      console.log('💀💀💀💀💀');
    } else {
      console.log(statistic);
    }
  }
  
module.exports = { dragonDamage, dragonMonster }