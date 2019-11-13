let tela = document.getElementById('display')
let valores = ["", ""]
let operadores = ""
let telaCount = 0
let posicao = "primeiro"
function clicar(parametro) {
    switch (parametro) {
        case "ce":
            valores[1] = ""
            tela.innerHTML = "0"
            telaCount = 0
            break;
        case "c":
            valores[0] = valores[1] = ""
            tela.innerHTML = "0"
            telaCount = 0
            posicao = "primeiro"
            break;
        case "x":
            break;
        case "1":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "2":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "3":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "4":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "5":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "6":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "7":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "8":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "9":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case "0":
            armazenagem(parametro)
            printOnDisplay(parametro)
            break;
        case ",":
            armazenagem(".")
            printOnDisplaySinal(parametro)
            break;
        case "/":
            parametrosOperadores(parametro)
            break;
        case "*":
            parametrosOperadores(parametro)
            break;
        case "-":
            parametrosOperadores(parametro)
            break;
        case "+":
            parametrosOperadores(parametro)
            break;
        case "=":
            igual()
            break;
    }
}
function armazenagem(valor) {
    if (posicao == "primeiro") {
        valores[0] += valor
    } else {
        valores[1] += valor
    }
}
function printOnDisplay(valor) {
    if (telaCount == 0) {
        tela.innerHTML = valor
        telaCount++
    }
    else {
        tela.innerHTML += valor
    }
}
function printOnDisplaySinal(valor) {
    if (telaCount > 0) {
        tela.innerHTML += valor
        telaCount++
    }
}
function igual() {
    switch (operadores) {
        case "/":
            valores[0] = Number(valores[0]) / Number(valores[1])
            valores[1] = ''
            tela.innerHTML = valores[0]
            break;
        case "*":
            valores[0] = Number(valores[0]) * Number(valores[1])
            valores[1] = ''
            tela.innerHTML = valores[0]
            break;
        case "-":
            valores[0] = Number(valores[0]) - Number(valores[1])
            valores[1] = ''
            tela.innerHTML = valores[0]
            break;
        case "+":
            valores[0] = Number(valores[0]) + Number(valores[1])
            valores[1] = ''
            tela.innerHTML = valores[0]
            break;
    }
    operadores = ""
}
function parametrosOperadores(parametro) {
    if (operadores != "") {
        igual()
    }
    if (telaCount > 0 || typeof valores[0]== Number) {
        tela.innerHTML += parametro
    }
    operadores = parametro
    posicao = "segundo"
}