const prompt = require('prompt-sync')()

let opcao

do{
    console.log("-------------MENU-------------")
    console.log("1 - Selecione a primeira opção")
    console.log("2 - Selecione a primeira opção")
    console.log("3 - Selecione a primeira opção")
    console.log("4 - Sair")
    opcao = Number(prompt("Selecione uma das opções:"))

    switch (opcao){
        case 1:
            console.log("\nVocê selecionou a primeira opção.\n")
            break
        case 2:
            console.log("\nVocê selecionou a segunda opção.\n")
            break
        case 3:
            console.log("\nVocê selecionou a terceira opção.\n")
            break
        default:
            if (opcao == 4 ){
                console.log("\nObrigado. Volte Sempre!")
                process.exit()
            }else {
                console.error("\nDigite uma opção válida. Tente novamente.\n")
            }
            break
    }

}while (true)
