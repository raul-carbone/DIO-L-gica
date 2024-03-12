// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"



function calculateHeroRank(numWin, numLoss){
    let rank = (numWin - numLoss)
    let nivel = ""

    if(rank <= 10){
        nivel = "Ferro"    
    }else if(rank > 10 && rank <= 20){
        nivel = "Bronze"
    }else if(rank > 20 && rank <= 50){
        nivel = "Prata"
    }else if(rank > 50 && rank <= 80){
        nivel = "Ouro"
    }else if(rank > 80 && rank <= 90){
        nivel = "Diamante"
    }else if(rank > 90 && rank <= 100){
        nivel = "Lendário"
    }else{
        nivel = "Imortal"
    }
    
    return console.log(`O Herói tem o saldo de ${rank} está no nível de ${nivel}`)
}


calculateHeroRank(20,10)
calculateHeroRank(21,10)
calculateHeroRank(60,10)
calculateHeroRank(61,10)
calculateHeroRank(100,10)
calculateHeroRank(110,10)
calculateHeroRank(130,10)
