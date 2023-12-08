const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target

        //toggle: quando o elemento for clicado, ele verifica se possui ou não a classe "selecionado". caso não tenha a classe, ele adiciona... caso o elemento TENHA a classe, ele remove.
        curso.classList.toggle("selecionado")
    })
})

btn.addEventListener("click", ()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]

    //.curso:not(.selecionado): dos elementos com a classe ".curso", retorne para mim os que NÃO possuam a classe ".selecionado"
    //.curso:not(.selecionado): o ":not()" é uma negação. desconsidera o que estiver no parênteses.
    const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]

    
    //appendChild: adicionar filho... adiciona na variável selecionada o que estiver em parênteses.
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })

    cursosNaoSelecionados.map((ele)=>{
        caixa1.appendChild(ele)
    })
})