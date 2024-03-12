//OPERADORES ARITMETICOS
// sinal de + usado para concatenar string
let idade = 30
console.log("valor da minha variavel " + idade)

// '+' realizando somas
idade = 30 + 6
console.log("operação de adição " + idade)

// '-' realizando subtrações
let primeiroNumero = 1023
let secundoNumero = 23
console.log(primeiroNumero - secundoNumero)

// '*' realizando multiplicações
let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

multiplicador = 8
produto = multiplicador * multiplicando
console.log("resultado da multiplicação é " + produto)

// '/' realizando divisões
let notaDoMercado = 50
let pessoasParaDividir = 2
console.log("operação de divisão :" + notaDoMercado / pessoasParaDividir)

// '%' pegando o resto de uma divisão
let calculo = 10 % 3
console.log("operação de módulo " + calculo)


//OPERADORES DE INCREMENTO E DECREMENTO
let contador = 1
// '++' incremento
contador++
contador++

// '--' decremento
contador--
contador--
contador--

console.log(contador)



//OPERADORES DE ATRIBUIÇÃO
let preco = 10
preco += 5  // preco = preco + 5
preco -= 5 // preco = preco -5
console.log(preco)



//OPERADORES RELACIONAIS OU DE COMPARAÇÃO
//guardar o valor em uma variável de resultado TRUE?FALSE
let marca = "Apple"
let resultado = marca === "Samsung"

console.log(resultado)

//guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)

let CPFPermitido = "222.555.333-02"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log("é um usuario invalido ? " + ehBloqueado)

let idadeMinima = 18
let idadeUsuario = 18
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)

let idadeDeCorte = 50
idadeUsuario = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log(resultadoEhTerceiraIdade)