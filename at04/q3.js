/*3) Faça um programa que leia os dados de 10 alunos (Nome, matricula, Media Final),
armazenando em um vetor. Uma vez lidos os dados, divida estes dados em 2 novos
vetores, o vetor dos aprovados e o vetor dos reprovados, considerando a média
mínima para a aprovação como sendo 5.0. Exibir na tela os dados do vetor de
aprovados, seguido dos dados do vetor de reprovados.
*/

class Aluno{
    constructor(){
        this.nome = []
        this.matricula = []
        this.media = []
        this.aprovado = []
        this.reprovado = []
    }
    inserirAluno(nome, matricula,media){
        this.nome.push(nome)
        this.matricula.push(matricula)
        this.media.push(media)
    }

    situacao(){
        for(let i=0;i<this.nome.length;i++){
            if(this.media[i]<5){
                this.reprovado.push([this.nome[i],this.matricula[i],this.media[i]])
            }else{
                this.aprovado.push([this.nome[i],this.matricula[i],this.media[i]])
            }
        }
    }
    
}

cond = 0
aluno = new Aluno()
while(cond<10){
    console.log("Insira os dados dos alunos")
    
    nome = prompt('Qual o nome desse aluno? ')
    matricula = prompt('Qual o matricula desse aluno? ')
    media = parseFloat(prompt('Qual a media desse aluno? '))

    aluno.inserirAluno(nome, matricula,media)
    cond++
}

aluno.situacao()
console.log(aluno.aprovado)
console.log(aluno.reprovado)
