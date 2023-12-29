class pessoa{

    constructor(pnome,pidade){
        this.nome = pnome
        this.idade = pidade
    }

    getNome(){
        return this.nome
    }

    getIdade(){
        return this.idade
    }

    setNome(nome){
        this.nome = nome
    }

    setIdade(idade){
        this.idade = idade
    }

    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`idade: ${this.idade}`)
        console.log("--------------------------")
    }
}

let pessoas = []

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

const addPessoa = ()=>{

    res.innerHTML = ""

    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class","pessoa")
        div.innerHTML = `Nome: ${p.getNome()} <br> Idade: ${p.getIdade()}`

        res.appendChild(div)
    })
}

btn_add.addEventListener("click",()=>{

    //pega as informações dos inputs
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")

    //passa os valores dos inputs para a classe retornando a propriedade nome e seu valor e a propriedade idade e seu valor.
    const p = new pessoa(nome.value,idade.value)

    //adiciona o retorno da classe no array
    pessoas.push(p)

    //apos o click, apaga as informações dos campos
    nome.value = ""
    idade.value = ""

    //apos apagar as informações dos campos, seleciona/foca automaticamente no input "nome".
    nome.focus()

    addPessoa()
})