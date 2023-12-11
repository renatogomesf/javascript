const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

// ".hasChildNodes()": verifica sem tem filhos retornando true ou false
console.log(caixa1.hasChildNodes())

// ".childNodes": também verifica se tem filhos, mas retorna tudo o que for filho da tag, como: html e textos
console.log(btn_c[1].childNodes)

// ".children": retorna TODOS os filhos em forma de elementos (HTMLCollection)
console.log(btn_c[1].children)

//verificando se possui ou não filhos através do operador ternário.
console.log(btn_c[1].children.length > 0 ? "possui filhos" : "não possui filhos")

//verificando se possui ou não filhos através do if.
if(caixa1.children.length > 0){
    console.log("possui filhos")
}else{
    console.log("não possui filhos")
}

// //mudando o conteúdo do primeiro filho
// caixa1.firstElementChild.innerHTML = "teste"

// //depois de retornar todos os elementos de caixa1 com o children, é selecionado o da posição 2 com o uso de colchetes "[]".
// caixa1.children[2].innerHTML = "TESTE"

//--------------------------------------------------------------------------------------

const c1_2 = document.querySelector("#c1_2")

// ".parentElement" e ".parentNode": retorna o pai do elemento selecionado em forma de html. nesse caso, foi selecionado o filho c1_2 e retornado o pai c1_1.
console.log(c1_2.parentElement)

// colocando o ".parentElement" ou "parentNode" mais uma vez, retorna o "avô" do elemento filho selecionado.
console.log(c1_2.parentElement.parentElement)