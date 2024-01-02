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

const c1 = new carro("normal",4)
c1.ligar()
c1.setCor("preto")

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?"sim":"não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("----------------------")



const c2 = new militar("lutador",1,100,50)
c2.setCor("azul")
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?"sim":"não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log("----------------------")