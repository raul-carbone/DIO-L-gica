// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) 
console.log(resultado)

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let item = "estrela"
let resultadoDois = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultadoDois)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let itemDois = "guarda chuva"
let podeSair = (tempo !== "chuva") || (itemDois === "guarda chuva")
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  ( !) - nega uma afirmação
let tempoDois = "chuva"
let resultadoTres = tempoDois === "chuva"
console.log(!!resultadoTres)

// NOT  ( !) - nega uma afirmação
let tempoTres = "chuva"
let horario = 8
let resultadoQuatro = !((tempoTres !== "chuva") && (horario > 6))
console.log(resultadoQuatro)