// condicao aninhada:
var idade = 22
if (idade < 16) {
    console.log('Nao vota')
} else if (idade < 18 || idade > 65){
        console.log('Voto opcional')
} else {
        console.log('Voto obrigatorio.')
}


// outro ex
var agora = new Date
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora < 12) {
        console.log('Bom dia!')
} else if (hora <= 18) {
        console.log('Boa tarde!')
} else {
        console.log('Boa noite')
}


// condicao multipla
var agora = new Date
var diaSemana = agora.getDay()
switch (diaSemana) {
        case 0:
                console.log('Domingo')
                break
        case 1:
                console.log('Segunda')
                break
        case 2: 
                console.log('terca')
                break
        case 3:
                console.log('quarta')
                break
        case 4:
                console.log('quinta')
                break
        case 5:
                console.log('sexta')
                break
        case 6:
                console.log('sabado')
                break
        default:
                console.log('Erro, dia invalido.')
}