const { warrior } = require('./gameActionsCharacters') 

const warriorDamage = () => {
    const strength = warrior.strength
    const weaponDmg = warrior.weaponDmg
    const buffDamage = strength * weaponDmg
    const newdamage = Math.floor(Math.random() * (strength - buffDamage + 1)) + buffDamage;
    warrior.damage = newdamage
    return warrior.damage
  }

  const warriorAtack = (dragon) => {
    console.log('=========WARRIOR=ATACKED=========');
    const valueAtackWarrior = warriorDamage(dragon)
    dragon.healthPoints -= valueAtackWarrior
    const statistic = `🗡Warrior attacked 🐉Dragon
    Damage Warrior: ${valueAtackWarrior}
    healthPoints Dragon: ${dragon.healthPoints}`
    if (dragon.healthPoints <= 0) {
    console.log('💀💀💀💀💀');
    console.log(`The 🗡Warrior Killed Dragon🐉!
    Damage Warrior: ${valueAtackWarrior}
    healthPoints Dragon: ${dragon.healthPoints}`);
    console.log('💀💀💀💀💀');
    } else {
      console.log(statistic);
    }
  }

module.exports = warriorAtack
