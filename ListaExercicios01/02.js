const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite a sua idade: "))

if (Number.isInteger(idade) && idade > 0){
    if (idade <= 11) {
        console.log(`Você se classifica como CRIANÇA.`)
    } else if (idade <= 17) {
        console.log(`Você se classifica como ADOLESCENTE.`)
    } else if (idade <= 59) {
        console.log(`Você se classifica como ADULTO.`)
    } else {
        console.log(`Você se classifica como IDOSO.`)
    }
} else {
    console.error(`Digite uma idade válida. Tente novamente.`)
}