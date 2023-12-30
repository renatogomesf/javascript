const pessoa = {
    nome:"",
    
    idade:"",

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
        this.idade = idade
    }
}

// //todos apontam para a mesma constante e retornam a mesma coisa.
// const p2 = pessoa
// const p3 = pessoa

// //modifica o conteúdo/valor do atributo "nome" com o uso de sintax diferentes.
// p3.nome = "renato"
// p3["nome"] = "renato"
// pessoa.setNome("gomes")

// console.log(pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")


const adicionar = ()=>{
    const f_nome = document.querySelector("#f_nome")
    const f_idade = document.querySelector("#f_idade")
    
    pessoa.setNome(f_nome.value)
    pessoa.setIdade(f_idade.value)

    const div = document.createElement("div")
    div.setAttribute("class","pessoa")
    div.innerHTML = `Nome: ${pessoa.getNome()} <br> Idade: ${pessoa.getIdade()}`
    res.appendChild(div)
}

btn_add.addEventListener("click",()=>{
    adicionar()
})