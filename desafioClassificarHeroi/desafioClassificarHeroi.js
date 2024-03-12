//# 1️⃣ Desafio Classificador de nível de Herói
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "jonas"
let qntdExp = 11000
let nivelHeroi = ""


if(qntdExp <= 1000){
    nivelHeroi = "Ferro"
} else if(qntdExp > 1000 && qntdExp <= 2000){
    nivelHeroi = "Bronze"
} else if(qntdExp > 2000 && qntdExp <= 5000){
    nivelHeroi = "Prata"
} else if(qntdExp > 5000 && qntdExp <= 7000){
    nivelHeroi = "Ouro"
} else if(qntdExp > 7000 && qntdExp <= 8000){
    nivelHeroi = "Platina"
} else if(qntdExp > 8000 && qntdExp <= 9000){
    nivelHeroi = "Ascendente"
} else if(qntdExp > 9000 && qntdExp <= 10000){
    nivelHeroi = "Imortal"
} else if(qntdExp >= 10001){
    nivelHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi)