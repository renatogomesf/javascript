class carroPadrao{ //classe abstrata
    constructor(){

        //este é o pequeno ajuste para transfomra essa classe em uma classe abstrata. quando o construtor desta classe for chamado/instanciado, ele irá disparar o erro "TypeErro" com sua mensagem.
        if(this.constructor === carroPadrao){
            //dispara a exessão do tipo erro com a mensagem em parênteses.
            throw new TypeError("Esta classe não pode ser instanciada")
        }

        //torna obrigatório o uso da propriedade/métodos "ligar ou desligar" para todos que herdarem a classe "carroPadrao"
        if(this.ligar === undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        if(this.desligar === undefined){
            throw new TypeError("É obrigatório implementar o método desligar")
        }

        this.rodas = 4
        this.porta = 4
        this.ligado = false
    }
}

class carro extends carroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo = new turbo(estagioTurbo)
        if(tipo==1){
            this.velmax = 120
            this.nome = "normal"
        }else if(tipo==2){
            this.velmax = 160
            this.nome = "esportivo"
        }else if(tipo==3){
            this.velmax = 200
            this.nome = "super esportivo"
        }

        this.velmax += this.turbo.potencia
    }

    info(){
        console.log(this.nome)
        console.log(this.velmax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.porta)
        console.log(this.ligado)
        console.log("-----------------------")
    }

    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

class turbo{
    constructor(e){
        if(e==0){
            this.potencia = 0
        }else if(e==1){
            this.potencia = 50
        }else if(e==2){
            this.potencia = 75
        }else if(e==3){
            this.potencia = 100
        }
    }
}

class carroEspecial extends carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo = 1
        this.velmax = 300 + this.turbo.potencia
        this.nome = "carro especial"
    }

    //este info sobrepoe o info da classe pai. mas, para chamar o info da classe pai, basta usar o "super"
    info(){
        if(this.tipoInfo == 1){
            super.info()
        }else{
            console.log(`nome: ${this.nome}`)
            console.log(`vel.max: ${this.velmax}`)
            console.log(`turbo: ${this.turbo.potencia}`)
            console.log("-----------------------")
        }
    }
}

const c1 = new carro(1,0)
const c2 = new carro(1,1)
const c3 = new carroEspecial(3)
// const c4 = new carroPadrao()

c1.info()
c2.info()
c3.info()