const caixa = document.querySelector("#caixa")

let cursos = ["html","css","javascript","------------"]

//pegando posições específicas.

//mudando o conteúdo de uma posição específica com o uso do índice "[0]". muda o conteúdo da posição zero. pode ser número e texto.
cursos[0] = "c++"

//adicionando mais elementos no FINAL do array com o ".push()". o push adiciona elementos que estão nos parênteses.
cursos.push(2023)
cursos.push("python")

//retirando elementos do FINAL do array com o ".pop()". não é preciso especificar, no parêntese, o que vai ser retirado, pois o pop já retira automaticamente do final. e vai retirando a cada vez que for chamado.
cursos.pop()
cursos.pop()

//adicionando elemetos no INÍCIO do array com ".unshift()". o unshift adiciona elementos que estão no parênteses.
cursos.unshift("react")
cursos.unshift("arroz")
cursos.unshift("arroz")

//retirando elementos do INÍCIO do array com ".shift()". não é preciso especificar, no parêntese, o que vai ser retirado, pois o shift já retira automaticamente do final. e vai retirando a cada vez que for chamado.
cursos.shift()
cursos.shift()

//um array pode receber outro array.
let cores = ["azul","verde","vermelho"]
let curso = ["html","css","javascript",cores]


//mostrando o conteúdo, com o uso do índice, da posição [3]. com isso, irá mostrar uma coleção de dados/array daquela posição. caso eu deseje um dado específico, basta adicionar um novo índice com a posição do elemento desejado. 
//o primeiro índice controla o primeiro nível do array e o segundo índice o segundo nível do array. [3]: mostra o array que foi inserido... [1]: desse array inserido, quero o dado/elemento da posição 1.
console.log(curso[3][1])


cursos.map((e)=>{
    let p = document.createElement("p")
    p.innerHTML = e
    caixa.appendChild(p)
})

curso.map((e)=>{
    let p = document.createElement("p")
    p.innerHTML = e
    caixa.appendChild(p)
})