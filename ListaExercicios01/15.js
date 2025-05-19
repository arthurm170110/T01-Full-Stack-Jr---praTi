const prompt = require('prompt-sync')()

let numero = Number(prompt('Deseja saber quantos números da sequência de fibonacci? '))
let fibonacci = []

if(Number.isInteger(numero) && numero > 0) {
    for (let i = 0; i < numero; i++) {
            if (i == 0) {
                fibonacci.push(0)
            } else if (i == 1) {
                fibonacci.push(1)
            } else {
                fibonacci.push(fibonacci[i-2] + fibonacci[i-1])
            }
    }
    console.log(fibonacci.join(','))
} else {
    console.error("Erro! Digite um valor válido (inteiro, positivo e maior que 0).")
}