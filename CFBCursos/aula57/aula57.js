
// crio uma classe que é a base que vai conter/instruir tudo do objeto como métodos e propriedades. 
class pessoa{

    //cada objeto que for instanciado em "pessoa" irá seguir o que foi construido na classe pessoa.
    //quando a instancia passa um parâmetro, o construtor precisa de um parâmetro para receber.
    constructor(pnome){

        //foi construida uma propriedade "nome" que irá receber os parâmetros inseridos em "new pessoa("parâme.")"
        this.nome = pnome
    }
}

//"new": vai na memória e cria/instancia um espço do tipo "pessoa" com o nome da variável. chama/executa automaticamente o constructor da classe criada.
//"new pessoa" faz referência a classe criada e tudo o que estiver no parâmetro será passado para o constructor desta classe e irá seguir o que foi criado dentro ddo constructor.
//"passa o parâmetro "bruno" para dentro do constructor da classe "pessoa" chamada."
let p1 = new pessoa("bruno")

//a cada novo "new" é uma nova instancia e não afeta as outras instancias criadas.
let p2 = new pessoa("renato")
let p3 = new pessoa("gomes")

//chamando só a variável p1, irá retornar a variável nome criada na classe e o valor dela que foi passado na instancia criada. neste caso, irá retornar "nome = "bruno"". mas, como possui o ".nome", retorna só o valor.
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)