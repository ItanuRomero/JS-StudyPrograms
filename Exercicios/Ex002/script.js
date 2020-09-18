function verificar() {
    var data = new Date()
    var ano = data.getFullYear
    var formAno = document.getElementById('anoNasc')
    var resposta = document.querySelector('div#resposta')

    //criando um elemento
    var imagem = document.createElement('img')

    //mexendo no css pelo javascript
    imagem.setAttribute('id', 'foto')
    imagem.style.maxWidth = '300px'
    imagem.style.textAlign = 'center'
    imagem.style.borderRadius = '50%'
    imagem.style.marginTop = '1.4rem'

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('Insira os dados corretamente.')
    } else {
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        if (formSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', './images/menino.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', './images/moco.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', './images/homem.jpg')
            } else {
                imagem.setAttribute('src', './images/senhor.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                imagem.setAttribute('src', './images/menina.jpg')
            } else if (idade < 21) {
                imagem.setAttribute('src', './images/moca.jpg')
            } else if (idade < 50) {
                imagem.setAttribute('src', './images/mulher.jpg')
            } else {
                imagem.setAttribute('src', './images/senhora.jpg')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `Detectamos ${genero} com ${idade} anos <br>`
        resposta.appendChild(imagem)
    }
}