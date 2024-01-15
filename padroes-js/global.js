var globalElement = "hey there!"

console.log('Using variable directly',globalElement)

// console.log('Using variable from window',window.globalElement)

// console.log('Using variable from window array',window['globalElement'])

console.log('Using variable with this',this.globalElement)

// Acima estou usando exemplos para utilização de variaveis globais. 
// O window se trata de uma variavel global do navegador, logo não pode ser acessado diratemente pelo node. 
// O this por padrão será undefined, pois não está dentro de um contexto de objeto.

/* Por padrão, o JavaScript torna as variáveis como globais implicitas, um exemplo abaixo */

function wrongSum(a,b){
    result = a + b
    return result
} 

function rightSum(a,b){
    var result = a + b
    return result
}

const antipadrão = wrongSum(2,3)
const padrão = rightSum(2,3)

console.log('Wrong way to use function',antipadrão)
console.log('Right way to use function',padrão)


/* ----------------------------------- */

// Single Var

function singleVar(){
    var a = 1, 
    b = 2, 
    sum = a + b
    myObject = {},
    i,
    j
}
