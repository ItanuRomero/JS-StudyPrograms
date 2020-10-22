let num = [4, 3, 2, 7, 5, 8, 9]
num[0] = 10
num[1] = 6
num.push(3) // envia dados
console.log(num.length) // verifica o tamanho (quantos elementos)
console.log(`Nosso vetor eh o ${num}`)
num.sort()

for (let contador in num) {
    console.log(`Na posicao ${contador} temos o valor ${num[contador]}`)
}

console.log(`E o indice do numero 7 eh: ${num.indexOf(7)}`)
// caso ele nao encontre, retorna o valor -1