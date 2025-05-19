const prompt = require('prompt-sync')()

let valor = Number(prompt("Deseja ver a tabuada de qual número? "))

let resultado = 0
let i = 1

while(i <= 10){
    resultado = i * valor
    console.log(`${valor} * ${i} = ${resultado}`)
    i++
}