const lista = []
// recebe o numero
function adicionaNumero() {
    var numero = document.getElementById('numero')
    numero = Number(numero.value)
    if (numero > 100 || numero < 1) {
        alert('Coloque numeros de 1 a 100!')
    } else {
        adcionaNaLista(numero)
    }
}
// adiciona o numero na lista
function adcionaNaLista(numeroAnalise) {
    if (lista.includes(numeroAnalise)) {
        alert('numero ja na lista')
    } else {
        lista.push(numeroAnalise)
        console.log('numero adicionado')
        adcionaNoSelect(numeroAnalise)
    }
}
// mostra o numero no select
function adcionaNoSelect(numeroParaMostrar) {
    var select = document.getElementById('selectLista')
    let item = document.createElement('option')
    if (lista.length == 1) {
        select.innerHTML = ''
    }
    item.text = `O numero ${numeroParaMostrar} foi adicionado a lista`
    select.appendChild(item)
}
// analisando a lista
function analisaLista() {
    var numerosCadastrados = lista.length
    var maiorNumero = verificaMaiorOuMenor('maior')
    var menorNumero = verificaMaiorOuMenor('menor')
    var somaDosValores = somaOsValores()
    var mediaDosValores = somaDosValores / numerosCadastrados
    console.log(menorNumero)
}

function verificaMaiorOuMenor(qual) {
    let maior = 0
    let menor = 0
    for (var valor in lista) {
        if (lista[valor] > maior) {
            maior = lista[valor]
        }
        if (lista[valor] < menor || lista[valor] == 0) {
            menor = lista[valor]
        }
    }
    if (qual == 'maior') {
        return maior
    }
    return menor
}

function somaOsValores() {
    let soma = 0
    for (var valor in lista) {
        soma += lista[valor]
    }
    return soma
}