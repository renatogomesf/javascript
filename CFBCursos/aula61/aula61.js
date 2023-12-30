const pessoa = {
    nome,
    
    idade,

    getNome:function(){
        return this.nome
    },

    getIdade:function(){
        return this.idade
    },

    setNome:function(nome){
        this.nome = nome
    },

    setIdade:function(idade){
        this.nome = idade
    }
}

//todos apontam para a mesma constante e retornam a mesma coisa.
const p2 = pessoa
const p3 = pessoa

//modifica o conteúdo/valor do atributo "nome" com o uso de sintax diferentes.
p3.nome = "renato"
p3["nome"] = "renato"
pessoa.setNome("gomes")

console.log(pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)