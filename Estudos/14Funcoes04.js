// fatorial
function fatorial(num) {
    let fat = 1
    for (let contador  = num; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}

console.log(fatorial(5))

// tambem se pode chamar uma funcao na propria funcao utilizando a recursividade:
function fatorialAuto(numero) {
    if (numero == 1){
        return 1
    } else {
        return numero * fatorialAuto(numero - 1)
    }
}
// estude mais sobre funcoes recursivas
console.log(fatorialAuto(5))