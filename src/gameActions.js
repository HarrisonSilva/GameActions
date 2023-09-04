const { mage, warrior, dragon  } = require('./gameActionsCharacters')
const { dragonDamage, dragonMonster } = require('./dragon')
const mageAtack = require('./mage')
const warriorAtack = require('./warrior')


const actions = [warriorAtack, mageAtack, dragonMonster]


const whoAttacks = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0 || randomNumber === 1) {
    actions[randomNumber](dragon)
  } else {
    actions[randomNumber](dragonDamage(), warrior, mage)
  }
  
}

const battleMembers = () => {
  while(
     warrior.healthPoints > 0 &&
     mage.healthPoints > 0 &&
     dragon.healthPoints > 0
     ) 
     {
    whoAttacks()
  }
}

battleMembers()