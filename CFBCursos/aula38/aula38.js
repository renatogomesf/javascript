const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

//".children": da caixa1 retorne os filhos/elementos e com o valor entre colchetes "[]" podemos selecionar o filho de uma posição específica. a contagem começa em zero que se refere ao primeiro da lista de cima para baixo.
console.log(caixa1.children)
console.log(caixa1.children[2])

//retorna o primeiro filho
console.log(caixa1.firstElementChild)

//retorna o último filho
console.log(caixa1.lastElementChild)

//retorna o nó raiz e sempre será o próprio document/DOM
console.log(document.getRootNode())