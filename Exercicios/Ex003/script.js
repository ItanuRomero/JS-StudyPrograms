function contar() {
    
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Preencha todos os dados')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f){
        for (var contador = i; contador <= f; contador += p) {
            resultado.innerHTML += ` ${contador} ->`
        }
        } else {
            for (var contador1 = i; contador1 >= f; contador1 -= p) {
                resultado.innerHTML += ` ${contador1} -> `
            }
        }
        
    }
    

}