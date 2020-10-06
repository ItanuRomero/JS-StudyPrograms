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
            if (p == 0) {
                alert('Passo 0 nao pode ser utilizado. Seguindo com passo 1.')
                p = 1
            }
            for (var contador = i; contador <= f; contador += p) {
                if (contador == f) {
                    resultado.innerHTML += `${contador} 🏁`
                } else {
                resultado.innerHTML += `${contador} 👉 `
                }
        }
        } else {
            if (p == 0) {
                alert('Passo 0 nao pode ser utilizado. Seguindo com passo 1.')
                p = 1
            }
            for (var contador1 = i; contador1 >= f; contador1 -= p) {
                if (contador1 == f) {
                    resultado.innerHTML += `${contador1} 🏁`
                } else {
                resultado.innerHTML += `${contador1} 👉 `
                }
            }
        }
    }
}