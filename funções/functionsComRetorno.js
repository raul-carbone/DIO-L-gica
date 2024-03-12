function soma(numA, numB){
	let somatorio = numA + numB

    //retorna apenas um valor de uma função que pode ser atribuida a uma variável
	return somatorio
}

//atribuindo o valor do return para uma variavel.
let resultado = soma(5, 10)

console.log(`O resultado dessa função é ${resultado}`)

/*******************************************************************************************/

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar)[0]
    return firstName
}

let userName = getFirstName("Raul Santana Gonçalves Carbone", " ")
let userName2 = getFirstName("Rubens-Alves-Neto","-")

console.log(`Seja bem vindo ${userName}`)
console.log(`Seja bem vindo ${userName2}`)