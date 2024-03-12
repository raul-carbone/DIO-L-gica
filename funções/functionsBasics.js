function torrar() {
	//posso colocar chamada de funções dentro de uma função
	injetarPao()
	
	//ação
	console.log("torrando pão")
	
}

function injetarPao() {
	console.log("preparando para injetar o pão")
	console.log("Finalizado!")
}

//a função deve ser chamada, posso chamar várias vezes
torrar()

/******************************************************************/

//função q pega os dados.
function getData(){
	console.log("buscando dados do usuario")
}

//função para chegar valores
function checkValues(){
	console.log("validando dados do usuario")
}

//função para enviar os valores
function sendToDataBase(){
	console.log("cadastrando dados do usuario")
}

//é comum também ter uma função que engloba essas ações de uma vez.
//FUNÇÃO PAI
function mainSaveData(){
	getData()
	checkValues()
	sendToDataBase()
}

mainSaveData()