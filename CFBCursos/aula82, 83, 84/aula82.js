const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qted = document.getElementById("txt_qted")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

// com ".offsetWidth" e ".offsetHeight" eu posso pegar o tamanho de algum elemento html. neste caso, pego o tamanho da div "palco".
let largura_palco = palco.offsetWidth
let altura_palco = palco.offsetHeight


let bolas = []
let num_bola = 0

class Bola{
    constructor(arrayBolas,palco){
        this.tamanho = Math.floor(Math.random()*10)+10

        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)

        this.posiçao_x = Math.floor(Math.random()*(largura_palco-this.tamanho))
        this.posiçao_y = Math.floor(Math.random()*(altura_palco-this.tamanho))

        this.velocidade_x = Math.floor(Math.random()*2)+0.5
        this.velocidade_y = Math.floor(Math.random()*2)+0.5

        this.direçao_x = Math.random()*10 > 5 ? 1 : -1
        this.direçao_y = Math.random()*10 > 5 ? 1 : -1

        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*100000000000000)

        this.desenhar()
        this.controle = setInterval(this.controlar,10)
        this.relaçao = document.getElementById(this.id)
    }

    posiçao = ()=>{

    }

    remover = ()=>{

    }

    desenhar = ()=>{

    }

    controlar = ()=>{

    }
}

// "resize": quando redimencionar a tela... pega o novo tamanho e joga dentro de suas respectivas variáveis.
window.addEventListener("resize",(evt)=>{
    largura_palco = palco.offsetWidth
    altura_palco = palco.offsetHeight
})

btn_add.addEventListener("click",(evt)=>{
    const qted = txt_qted.value

    for(let i=0;i<qted;i++){

    }
})

btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{

    })
})