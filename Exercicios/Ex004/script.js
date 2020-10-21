function gerarTabuada() {
    const numero = document.getElementById('numero')
    let tabuada = document.getElementById('selectTabuada')
    if (numero.value.length == 0) {
        alert('Por favor, insira um numero')
    } else {
        let num = Number(numero.value)
        let contador = 1
        tabuada.innerHTML = ''
        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${contador} = ${num * contador}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }
}