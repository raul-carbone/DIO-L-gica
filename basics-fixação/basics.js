//Basics

//declaração de variavel e constante;
console.log("Digite o nome do jogador:")
let nickname = "Raul" //variavel
console.log("Bem vindo, " + nickname)

const notificacao = "Pokemon Go diz:" //constante - não pode ser alterada.
console.log(notificacao + " Tem pokemon novo na região")
console.log(notificacao + " Você perdeu a liderança do ginásio")



//tipos de variaveis
let nomePokemon = "pikachu"
let pokemonSexo = "M"

let nivelPokemon = 20
let pontosDeVidaPokemon = 45

let selecionavel = false



//matrizes
let nomesPokemon = ["Pikachu" , "Chamander", "Bulbassaur"]
//vetores
let timePokemon = [
  ["pikachu", "M", 1],
  ["Chamander", "F", 3]
]

console.log(" O pokemon " + timePokemon[1][0] + " é do sexo " +  timePokemon[1][1] + 
" e está no nível " + timePokemon[1][2] )

console.log(timePokemon[0])//colocando uma unica posição eu retorno a primeira linha desse vetor. " ["pikachu", "M", 1] "

console.log(timePokemon.length)//propriedade das matrizes e vetores.
