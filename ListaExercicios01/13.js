const prompt = require('prompt-sync')()

let valor = Number(prompt('Digite um número decimal: '))
let soma = 0
let contador = 0

while(valor != 0) {
    if (!Number.isInteger(valor)) {
        soma += valor
        contador++
    } else {
        console.error("Este não é um número decimal.")
    }

    valor = Number(prompt('Digite um número decimal: '))
} 

let media = soma / contador


console.log(`Média Aritmética = ${media.toFixed(2)}`)