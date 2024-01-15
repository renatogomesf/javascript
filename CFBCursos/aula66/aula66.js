class npc{

    //"static" (estatico): torna uma propriedade comum para todas as instâncias. ou seja, a propriedade "alerta se torna da classe e não de cada instância criada"
    static alerta = false

    constructor(energia){
        this.energia = energia
    }

    info = function(){
        console.log(this.energia)
        console.log(npc.alerta?"sim":"não")
        console.log("-----------------------")
    }

    static alertar = function(){
        npc.alerta = true
    }
}

const npc1 = new npc(100)
const npc2 = new npc(80)
const npc3 = new npc(30)

//como a propriedade alerta foi definida como static, agora, para mudar seu valor, é preciso se referenciar à classe e não mais a variável que possui a instância (new).
npc.alerta = false

//é possível colocar uma função/método como static. e, como agora ela está static. é preciso chamar a classe para poder chamar a funçõa. diferente de quando não está como static... que precisa chamar a variável e a função é executada somente para aquela variável.
npc.alertar()

npc1.info()
npc2.info()
npc3.info()