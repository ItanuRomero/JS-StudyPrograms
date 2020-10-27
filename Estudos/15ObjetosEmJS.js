let pessoa = {
    nome: 'itanu',
    idade: 19,
    namora: true,
    hobbies: ['estudar', 'musica'],
    aumentaIdade(){
        //conteudo da funcao
        this.idade += 1
        console.log('Mais um ano se passou')
    }
}
pessoa.aumentaIdade()
// console.log(typeof pessoa)
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos`)