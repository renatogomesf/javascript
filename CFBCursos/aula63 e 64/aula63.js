const fnome = document.querySelector("#fnome")
const fportas = document.querySelector("#fportas")

const fblindagem = document.querySelector("#fblindagem")
const fmunição = document.querySelector("#fmunição")

const ftipoMilitar = document.querySelector("#ftipoMilitar")
const ftipoNormal = document.querySelector("#ftipoNormal")

const btn_addCarro = document.querySelector("#btn_addCarro")

const carros = document.querySelector(".carros")

let a_carros = []

const remover = (quem)=>{
    a_carros = a_carros.filter((el)=>{
        return el.nome != quem
    })
}

ftipoMilitar.addEventListener("click",()=>{
    fnome.value = ""
    fportas.value = 0
    fblindagem.value = 0
    fmunição.value = 0
    fblindagem.removeAttribute("disabled")
    fmunição.removeAttribute("disabled")
})

ftipoNormal.addEventListener("click",()=>{
    fnome.value = ""
    fportas.value = 0
    fblindagem.value = 0
    fmunição.value = 0
    fblindagem.setAttribute("disabled","disabled")
    fmunição.setAttribute("disabled","disabled")
})

const gerenciarExibicao = ()=>{
    carros.innerHTML = ""

    a_carros.forEach((c)=>{
        const div = document.createElement("div")
        const btn = document.createElement("button")

        btn.addEventListener("click",(evt)=>{
            const quemRemover = evt.target.parentNode.dataset.nome
            remover(quemRemover)
            gerenciarExibicao()
        })

        div.setAttribute("class","carro")
        div.setAttribute("data-nome",c.nome)

        div.innerHTML = `Nome: ${c.nome} <br> Portas: ${c.portas} <br> Blindagem: ${c.blindagem} <br> Munição: ${c.municao}`
        btn.innerHTML = "Remover"
        
        div.appendChild(btn)
        carros.appendChild(div)
    })
}

btn_addCarro.addEventListener("click",()=>{
    if(ftipoNormal.checked){
        const c = new carro(fnome.value,fportas.value)
        a_carros.push(c)
    }else{
        const c = new militar(fnome.value,fportas.value,fblindagem.value,fmunição.value)
        a_carros.push(c)
    }
    gerenciarExibicao()
})


class carro{ //classe pai / base
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function(){
        this.ligado = true
    }

    desligar = function(){
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }
}

// "extends": define uma herança. a classe militar vai herdar prorpiedades e métodos da classe carro.
class militar extends carro{ //classe filho
    constructor(nome,portas,blindagem,municao){

        //"super("o que quero chamar")": quando eu quiser chamar algo específico da classe pai. neste caso, estou chamando "nome" e "portas".
        super(nome,portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("verde")
    }

    atirar = function(){
        if(this.municao>0){
            this.municao--
        }
    }
}