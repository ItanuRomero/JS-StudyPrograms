function parOuImpar(numero) {
    if (numero % 2 == 0) {
        return `o numero ${numero} eh par!`
    } else {
        return `o numero ${numero} eh impar!`
    }
}

let resultado = parOuImpar(6)
console.log(resultado)
// de forma direta
console.log(parOuImpar(7))