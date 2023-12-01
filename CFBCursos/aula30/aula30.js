const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

console.log(dc1) //mostra o elemento por completo. com div, id, e conteúdo
console.log(dc1.id) //mostra somente o id do elemento
console.log(dc1.innerHTML) //mostra somente o conteúdo do elemento

dc1.innerHTML = "cfb cursos" //altera o que está dentro de "dc1" pelo que estiver entre áspas após o "=".

const arrayElementos = [dc1,dc2,dc3,dc4,dc5,dc6]

// for(let d of arrayElementos){
//     d.innerHTML = "cfb cursos"
// }

// sempre quando for percorrer e iterar todos os elementos do array é bom dar preferência ao .map(). é mais simples e mais moderna.
arrayElementos.map((e)=>{
    e.innerHTML = "cfb cursos"
    console.log(e)
})

console.log(arrayElementos)