const prompt = require('prompt-sync')()

let soma = 0
let numero = 0

for (let i = 0; i < 5; i++){
    numero = Number(prompt("Digite um número: "))
    soma += numero
}

console.log(`Soma total = ${soma}`)