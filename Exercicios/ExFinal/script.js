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
    document.getElementById('numero').value = ''
    document.getElementById('numero').focus()
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
    document.getElementById('apresentaAnalise').innerHTML = ''
}
// analisando a lista
function analisaLista() {
    var numerosCadastrados = lista.length
    if (numerosCadastrados == 0) {
        alert('adicione valores antes de fazer a analise!!!')
    } else {
        var maiorNumero = verificaMaiorOuMenor('maior')
        var menorNumero = verificaMaiorOuMenor('menor')
        var somaDosValores = somaOsValores()
        var mediaDosValores = somaDosValores / numerosCadastrados
        var apresentacao = document.getElementById('apresentaAnalise')
        apresentacao.innerHTML = `Analisamos a lista e segue os resultados: <br>`
        apresentacao.innerHTML += `Foram cadastrados ${numerosCadastrados} números. <br>`
        apresentacao.innerHTML += `O maior numero é: ${maiorNumero}, e o menor: ${menorNumero} <br>`
        apresentacao.innerHTML += `A soma dos valores é: ${somaDosValores}, e a média: ${mediaDosValores}`
    }
}

function verificaMaiorOuMenor(qual) {
    let maior = 0
    let menor = 101
    for (var valor in lista) {
        if (lista[valor] > maior) {
            maior = lista[valor]
        }
        if (lista[valor] < menor) {
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