const prompt = require('prompt-sync')()

let lado1 = Number(prompt("Digite a medida do 1º lado do triângulo (em cm): "))
let lado2 = Number(prompt("Digite a medida do 2º lado do triângulo (em cm): "))
let lado3 = Number(prompt("Digite a medida do 3º lado do triângulo (em cm): "))

if ((lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)){

    if (((lado1 == lado2) && (lado1 != lado3)) || ((lado1 == lado3) && (lado1 != lado2)) || ((lado2 == lado3) && (lado2 != lado1))) {
        console.log("Triangulo ISÓSCELES")
    } else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) {
        console.log("Triangulo ESCALENO")
    } else if ((lado1 == lado2) && (lado1 == lado3)) {
        console.log("Triangulo EQUILÁTERO")
    }

} else {
    console.error("Os valores fornecidos não formam um triângulo. Tente novamente.")
}