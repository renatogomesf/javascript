const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

// elemento já criado mais ainda está na memória. falta anexar na página.
const novoElemento = document.createElement("div")

//com o ".setAttribute( "atributo (id ou class)" , "valor/nome do atributo" )" é possível adicionar um atributo num elemento desejado. neste caso, está sendo adicionado um id com nome c7 e uma classe com nomes curso e c1.
novoElemento.setAttribute("id","c7")
novoElemento.setAttribute("class","curso c1")

//com o ".innerHTML" eu modifico o conteúdo do elemento trabalhado.
novoElemento.innerHTML = "ReactNative"

//com o ".appendChild" é feita a adição do filho em caixa1 e o filho que será adicionado está nos parênteses.
caixa1.appendChild(novoElemento)


const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

//o map passa elemento (el) e a key/posição (i) desse elemento.
cursos.map((el,i)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c" + (i + 1))
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el
    caixa1.appendChild(newElement)
})