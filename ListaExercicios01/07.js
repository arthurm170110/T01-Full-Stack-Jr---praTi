const prompt = require('prompt-sync')()

let macas = Number(prompt("Quantas maçãs deseja comprar? "))
let custo = 0

if (Number.isInteger(macas) && (macas >= 0)) {
    if (macas < 12){
        custo = 0.3
    } else {
        custo = 0.25
    }
    let valor_total = macas * custo
    console.log(`Valor total das compras: R$ ${valor_total.toFixed(2)}`)
} else {
    console.error("Esse valor não é válido. Tente novamente.")
}