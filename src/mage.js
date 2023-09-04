const { mage } = require('./gameActionsCharacters')

const mageDamage = () => {
    const manaValue = mage.mana
    if (manaValue < 15) {
        return 'Não possui mana suficiente'
    } else {
        mage.mana -= 15
    const intelligence = mage.intelligence
    const buffIntelligence = intelligence * 2
    const newdamage = Math.floor(Math.random() * (intelligence - buffIntelligence + 1)) + buffIntelligence;
    mage.damage = newdamage
    console.log(mage.damage);
    console.log(mage.damage);
    return mage.damage
  }
}

const mageAtack = (dragon) => {
    console.log('=========MAGE=ATACKED=========');
    const valueAtackMage = mageDamage(dragon)
    dragon.healthPoints -= valueAtackMage
    const statistic = `🔥Mage attacked 🐉Dragon
    Damage Mage: ${valueAtackMage}
    healthPoints Dragon: ${dragon.healthPoints}`
    if (dragon.healthPoints <= 0) {
      console.log('💀💀💀💀💀');
      console.log(`The 🔥Mage Killed Dragon🐉!
      Damage Mage: ${valueAtackMage}
      healthPoints Dragon: ${dragon.healthPoints}`);
      console.log('💀💀💀💀💀');
    } else {
      console.log(statistic);
    }
  }

module.exports = mageAtack