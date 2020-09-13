function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var foto = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src = './fotos/manha.jpg'
        document.body.style.background = '#F2D852'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        foto.src = './fotos/tarde.jpg'
        document.body.style.background = '#F25C05'
    } else {
        //boa noite
        foto.src = './fotos/noite.jpg'
        document.body.style.background = '#405F73'
    }

}