//pega todos os elementos com a classe "cursos" e cria uma HTMLcollection
//com o spread "...", já passo os elementos espalhados criando assim um array.
const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

// com o uso de "[0]" no final da linha, pego o elemento da posição 1 e , obviamente, com o uso de "[1]" no final da linha, pego o elemento da posição 2. a contagem começa em zero (onde zero é o primeiro da lista) e a aquisição do elemento é feita de cima para baixo.
const cursosEspecial = document.getElementsByClassName("curso")[0]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)
console.log(cursosEspecial)

cursosC1.map((e)=>{
    //pega elemento por elemento e, usando o "classList" e do ".add", adiciona uma classe nas tags. neste caso, está sendo adicionada a classe "destaque".
    e.classList.add("destaque")
})