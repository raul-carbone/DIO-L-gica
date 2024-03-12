//recebe uma variavel como parâmetro
function torrar(pao, valor, nome = "cliente") {
    //interpolação de strings
	console.log(`torrada feita com  ${pao}`)
	console.log(`ela é um pedido de: ${nome}`)
	console.log(`o valor total é: R$ ${valor}`)
}

torrar("pão de forma", 30.90, "Raul")
torrar("pão integral", 41.99, "Rubens")
torrar("pão francês" , 21.99, "Pedro")
torrar("pão na chapa", 10.19)