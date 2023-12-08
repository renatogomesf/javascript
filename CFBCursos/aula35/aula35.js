const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
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
    cursosSelecionados.map((el)=>{

    //appendChild: adicionar filho... adiciona na variável selecionada o que estiver em parênteses.
    caixa2.appendChild(el)
    })
})