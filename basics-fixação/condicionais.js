let possuiOvos =  false
let itensComprados = ""

if (possuiOvos) { 
	itensComprados = "leite" 
} 
else { 
	console.log("passou na sessão de congelados")
	itensComprados = "lasanha congelada" 
}

console.log("item comprado: " + itensComprados)

/*******************************************************/

let nivelDeFome = 10

if (nivelDeFome === 1){
	console.log("você esta com pouca fome")
} else if (nivelDeFome === 2){
	console.log("você esta com muita fome")
} else {
	console.log("você esta morrendo de fome!")
}