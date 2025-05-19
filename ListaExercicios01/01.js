const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número inteiro: "))

if (Number.isInteger(numero)){
    if (numero % 2 === 0) {
        console.log(`${numero} é  um número par.`)
    }
    else {
        console.log(`${numero} é um número ímpar.`)
    }
} else {
    console.error(`${numero} não é um número inteiro. Tente novamente.`)
}

