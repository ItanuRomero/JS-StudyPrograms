function contar() {
    

var inicio = document.getElementById('inicio').value
var fim = document.getElementById('fim').value
var passo = document.getElementById('passo').value
if (inicio == 0 || fim == 0 || passo == 0) {
    alert('Preencha todos os dados')
} else {


    var resultado = document.getElementById('resultado')
    for (var contador = inicio; contador <= fim; contador + passo) {
        resultado.innerHTML = `${contador} ->`
    }

    }

}

contar()