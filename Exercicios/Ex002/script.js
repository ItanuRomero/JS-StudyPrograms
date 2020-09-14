function verificar() {
    var data = new Date()
    var ano = data.getFullYear
    var formAno = document.getElementById('anoNasc')
    var resposta = document.querySelector('div#resposta')
    if (formAno.value.length == 0 || Number(formAno.nodeValue) > ano) {
        window.alert('Insira os dados corretamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - formAno
        resposta.innerHTML = `Idade calculada: ${idade}`
    }
}