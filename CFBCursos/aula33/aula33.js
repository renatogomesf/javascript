
//colocando uma tag em querySelector, ele retorna a primeira tag que encontrar com o nome especificado.
const query_div = document.querySelector("div")
console.log(query_div)


//usando o querySelectorAll, sem o spread (...), retorna todas tags que possuirem o nome especificado num formato de "NodeList" (que é basicamente uma HTMLcollection)
const query_divTodas = [...document.querySelectorAll("div")]
console.log(query_divTodas)


//usando o querySelectorAll, retorna todas tags com as classes que possuirem o nome especificado.
//para usar um seletor de classe, basta usar o ponto ".", como é feito na css pra selecionar uma classe específica. ou todas as tags que possuam essa classe.
const query_cursoTodos = [...document.querySelectorAll(".curso")]
console.log(query_cursoTodos)

const query_cursosC1 = [...document.querySelectorAll(".c1")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
console.log(query_cursosC1)
console.log(query_cursosC2)


//usando o querySelectorAll, retornaria todas tags com os id's que possuirem o nome especificado. mas o id é único então, basicamente, só retorna uma tag que possua o id especificado.
//para usar um seletor de id, basta usar a hashtag "#", como é feito na css pra selecionar um id específico.
const query_cursosEspecial = document.querySelectorAll("#c1")
console.log(query_cursosEspecial)


//para selecionar mais de uma tag, basta colocar, nas mesmas áspas e separando por vírgula, as tags que desejar. neste caso, imprime todas div's e todos os p's que existirem.
const query_divTodas2 = [...document.querySelectorAll("div,p")]
console.log(query_divTodas2)


//é possível, também, misturar tags com classes ou id. basta adicionar nas áspas e separando por vírgula os seletores desejados.
const query_cursosC12 = [...document.querySelectorAll(".c1,p")]
console.log(query_cursosC12)


//pega todas as div's mas que possuam o atributo "class". o atributo desejado fica entre colchetes do lado da tag desejada.
const query_divTodas3 = [...document.querySelectorAll("div[class]")]
console.log(query_divTodas3)


//pega todos os elementos "p" que estão dentro do elemento "div". os "p" que não estão dentro de uma div, não serão selecionados.
const query_divTodas4 = [...document.querySelectorAll("div > p")]
console.log(query_divTodas4)