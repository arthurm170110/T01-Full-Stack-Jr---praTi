const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número: "))
let i = 0

while (i < 10) {
    console.log(numero)
    i++
}