function contar() {
    
var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var resultado = document.getElementById('resultado')

if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
    alert('Preencha todos os dados')
}
for (var contador = inicio.value; contador <= fim.value; contador + passo.value) {
    resultado.innerHTML = `${contador} ->`
}

}