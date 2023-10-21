//HTMLcolection (só recebe elementos HTML) (quantidade de funções pra operar são menores)
const objs1 = document.getElementsByTagName("div")

//trasformou o HTMLcolection em array com "[]"

//Array (recebe todo tipo de dado/elemento) (quantidade de funções pra operar são maiores)
const objs2 = [...document.getElementsByTagName("div")]

//forEach só funciona no array

objs2.forEach(element => {
    console.log(element)
    element.innerHTML = "curso"
})

console.log(objs1)
console.log(objs2)