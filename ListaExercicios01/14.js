const prompt = require('prompt-sync')()

let numero = Number(prompt('Deseja saber o fatorial de qual numero? '))
let fatorial = 1

if(Number.isInteger(numero) && numero >= 0) {
    if (numero == 0) {
        fatorial = 1
    } else {
        for (let i = 1; i <= numero; i++) {
            fatorial *= i
        }
    }
    console.log(`${numero}! = ${fatorial}`)
} else {
    console.error("Erro! Digite um valor válido (inteiro e positivo)")
}