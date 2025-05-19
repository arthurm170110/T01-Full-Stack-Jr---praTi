const prompt = require('prompt-sync')()

let altura = Number(prompt("Digite a sua altura: "))
let peso = Number(prompt("Digite o seu peso: "))

let imc = peso / (altura ** 2)

if (imc < 18.5) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está abaixo do peso`)
} else if (imc < 25) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com o peso normal`)
} else if (imc < 30) {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com sobrepeso`)
} else {
    console.log(`Seu IMC é ${imc.toFixed(2)}. Você está com obesidade`)
}