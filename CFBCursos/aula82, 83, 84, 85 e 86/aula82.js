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

        num_bola++
        num_objetos.innerHTML = num_bola
    }

    posiçao = ()=>{
        return this.arrayBolas.indexOf(this)
    }

    remover = ()=>{
        clearInterval(this.controle)

        bolas = bolas.filter((b)=>{
            if(b.id != this.id){
                return b
            }
        })

        this.relaçao.remove()
        num_bola--
        num_objetos.innerHTML = num_bola
    }

    desenhar = ()=>{
        const div = document.createElement("div")
        div.setAttribute("id",this.id)
        div.setAttribute("class","bola")

        div.setAttribute("style",`
        left:${this.posiçao_x}px;
        top:${this.posiçao_y}px;
        width:${this.tamanho}px;
        height:${this.tamanho}px;
        background-color:rgb(${this.r},${this.g},${this.b})`
        )

        this.palco.appendChild(div)
    }

    colisao_bordas = ()=>{
        if(this.posiçao_x + this.tamanho >= largura_palco){
            this.direçao_x = -1
        }else if(this.posiçao_x <= 0){
            this.direçao_x = 1
        }

        if(this.posiçao_y + this.tamanho >= altura_palco){
            this.direçao_y = -1
        }else if(this.posiçao_y <= 0){
            this.direçao_y = 1
        }  
    }

    controlar = ()=>{

        this.colisao_bordas()
        this.posiçao_x += this.direçao_x * this.velocidade_x
        this.posiçao_y += this.direçao_y * this.velocidade_y

        this.relaçao.setAttribute("style",`
        left:${this.posiçao_x}px;
        top:${this.posiçao_y}px;
        width:${this.tamanho}px;
        height:${this.tamanho}px;
        background-color:rgb(${this.r},${this.g},${this.b})`
        )

        if((this.posiçao_x > largura_palco) || (this.posiçao_y > altura_palco)){
            this.remover()
        }
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
        bolas.push(new Bola(bolas,palco))
    }
})

btn_remover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{
        b.remover()
    })
})