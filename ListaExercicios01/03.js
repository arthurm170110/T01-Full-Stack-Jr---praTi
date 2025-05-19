const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite a sua nota: "))

if (nota >= 0 && nota <= 10){
    if (nota < 5) { // menor que 5, reprovado
        console.log(`REPROVADO`)
    } else if (nota < 7) { // entre 5 e 7, recuperação
        console.log(`RECUPERAÇÃO`)
    } else { // maior ou igual a 7, aprovado
        console.log(`APROVADO`)
    }
} else {
    console.error(`Digite uma nota válida. Tente novamente.`)
}