const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

//pego elemento por elemento e montado um array.
const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

//array
console.log(arrayElementos)

//pega todos os elementos com a tag "div" e cria uma HTMLcollection
const colecaoHTML = document.getElementsByTagName("div")

//HTMLcollection
console.log(colecaoHTML)

console.log("---------------------------------------------------")

//pega todos os elementos com a tag "div" ponho numa variável. mas ainda é uma HTMLcollection
let colecaoHTML1 = document.getElementsByTagName("div")

//espalho o HTMLcollection numa variável tornando um array.
colecaoHTMLarray = [...colecaoHTML1]

//array
console.log(colecaoHTMLarray)

console.log("---------------------------------------------------")

//FORMA MAIS SIMPLES

//pego os elementos já usando spread que já transforma em array dentro de colecaoHTML2.
const colecaoHTML2 = [...document.getElementsByTagName("div")]

console.log(colecaoHTML2)