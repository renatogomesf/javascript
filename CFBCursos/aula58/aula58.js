class carro{

    //fora do construtor não precisa do "this" e se torna uma propriedade padrão para a classe carro.
    canal = "cfb curso"

    constructor(pnome,ptipo){

        //dentro do construtor precisa do uso do "this" para criar a propriedade.
        this.nome = pnome

        if(ptipo == 1){
            this.tipo = "esportivo"
            this.velmax = 300

        }else if(ptipo == 2){
            this.tipo = "utilitário"
            this.velmax = 100

        }else if(ptipo == 3){
            this.tipo = "passeio"
            this.velmax = 160

        }else{
            this.tipo = "militar"
            this.velmax = 180
        }
    }

    //métodos (get(obter) ,set(setar/cololar) ,info)

    //trabalhando com as propriedades.
    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelmax(){
        return this.velmax
    }

    //posso retornar um array com todas as informações.
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }

    //coloca/altera propriedades da classe.
    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelmax(velmax){
        this.velmax = velmax
    }

    info(){
        console.log(`nome: ${this.nome}`)
        console.log(`tipo: ${this.tipo}`)
        console.log(`v.max: ${this.velmax}`)
        console.log(`canal: ${this.canal}`)
        console.log("--------------------------")
    }
}

//passa para o constructor da classe carro os parâmetros em parênteses.
let c1 = new carro("rapidão",1)
let c2 = new carro("super luxo",2)
let c3 = new carro("bombadão",4)
let c4 = new carro("carrego tudo",3)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

//chama o método "setNome" passando o valor em parênteses que modifica o valor da propriedade "this.nome" que originalmente era "rapidão".
c1.setNome("super veloz")
c1.setVelmax(500)

//chama o método "info()", executando tudo o que estiver nele e passando os parâmetros de "c1" para o constructor.
c1.info()

//chama o método "getNome()", executando o que estiver nele e passando os parâmetros de "c4" para o constructor.
console.log(c4.getNome())
console.log("----------------------")

//retorna um array. e, por ser um array, é possível usar o índice "[1]" para poder retornar um elemento específico do array.
console.log(c1.getInfo())
