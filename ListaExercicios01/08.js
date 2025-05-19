const prompt = require('prompt-sync')()

let valor1 = Number(prompt("Digite o 1º valor: "))
let valor2 = Number(prompt("Digite o 2º valor: "))

if (valor1 < valor2) {
    console.log(`${valor1} ${valor2}`)
} else {
    console.log(`${valor2} ${valor1}`)
}