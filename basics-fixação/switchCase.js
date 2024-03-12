let fruta = "banana"

switch (fruta) {
	case "laranja": 
	console.log("suco de laranja")
	break
	
	//as duas condições vao cair no mesmo bloco.
	case "banana":
	case "morango":
	console.log("vitamina " + fruta)
	break
	
	case "maça":
	console.log("suco de maçã")
	break
	
	default:
	console.log("suco genérico")
}
