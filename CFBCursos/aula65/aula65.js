const pessoa = {
    nome:"bruno",
    canal:"cfb cursos",
    curso:"javascript",
    aulas:{
        aula01:"introdução",
        aula02:"variáveis",
        aula03:"condicional"
    }
}

//para trasnformar um objeto literal em uma string JSON, utiliza-se a interface "JSON" para liberar o método ".stringfy()". o que irá transformar o objeto em uma string json é o "stringfy", colocando o que deseja transformar no parênteses.
const s_json = JSON.stringify(pessoa)
const string_json = '{"nome":"bruno","canal":"cfb cursos","curso":"javascript","aulas":{"aula01":"introdução","aula02":"variáveis","aula03":"condicional"}}'

//para transoformar uma string JSON em um objeto literal, utiliza-se a interface "JSON" para liberar o método ".parse()". o que irá trasnformar a string json em objeto literal é o "parse", colocando o que deseja transformar no parênteses.
const o_json = JSON.parse(s_json)


console.log(pessoa)
console.log("------------------")
console.log(s_json)
console.log("------------------")
console.log(o_json)
