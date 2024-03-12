//FOR
for (let i = 0; i < 4; i++){
	console.log(i)
	console.log("aumentando o contador")
}

let pontosDeVida = 0

for (let i = 0; i <= 10; i++){
	pontosDeVida += 1
	console.log("tomou poção de vida" + i)
} 

console.logo(pontosDeVida + " totais.")

/***********************************************/

//WHILE
let i = 0

while(i < 3){
	console.log("Olá")
	i++ 
//incrementar a variavel no bloco para nao cair em loop infinito
}

/***********************************************/

//DO{}...WHILE() - AO MENOS UMA VEZ O CÓDIGO VAI SER EXECUTADO;  POIS ELE VERIFICA APÓS O ESCOPO.
let contador = 0

do {
	console.log("Olá")
	contador++
} while (contador < 3)