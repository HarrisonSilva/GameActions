Game Actions - Simulador de Turno de Batalha em JavaScript 🎮

Ações do Jogo 🚀

Função de Cálculo de Dano do Dragão 🐉
Crie uma função que calcule e retorne um número aleatório entre 15 (dano mínimo) e o valor do atributo "strength" (dano máximo) do dragão.

Função de Cálculo de Dano do Guerreiro ⚔️
Crie uma função que calcule e retorne um número aleatório entre o valor do atributo "strength" (dano mínimo) e o valor de "strength * weaponDmg" (dano máximo) do guerreiro.

Função de Cálculo de Dano e Gasto de Mana do Mago 🧙‍♂️
Crie uma função que calcule e retorne um objeto com duas chaves: "damage" (dano) e "mana" (mana gasta) pelo mago em um turno. O dano será um número aleatório entre o valor do atributo "intelligence" (dano mínimo) e "intelligence * 2" (dano máximo). A mana consumida por turno é 15. Se o mago tiver menos de 15 de mana, a chave "damage" deve receber a mensagem "Não possui mana suficiente", e a mana gasta é 0.

Funções de Turno dos Personagens ⚙️
Crie três HOFs que irão compor o objeto "gameActions":

A primeira HOF deve simular o turno do personagem guerreiro. Ela receberá como parâmetro a função que calcula o dano do guerreiro e atualizará os "healthPoints" do dragão. Além disso, atualizará o valor da chave "damage" do guerreiro.

A segunda HOF deve simular o turno do personagem mago. Ela receberá como parâmetro a função que calcula o dano e gasto de mana do mago, atualizando os "healthPoints" do dragão e o valor das chaves "damage" e "mana" do mago.

A terceira HOF deve simular o turno do monstro dragão. Ela receberá como parâmetro a função que calcula o dano do dragão e atualizará os "healthPoints" dos personagens guerreiro e mago. Além disso, atualizará o valor da chave "damage" do dragão.

Função de Exibição dos Resultados 📊
Adicione uma última função de primeira classe ao objeto "gameActions". Essa função deverá retornar o objeto "battleMembers" (personagens e seus status atualizados) e, em seguida, utilize um "console.log" para exibir o resultado final do turno.