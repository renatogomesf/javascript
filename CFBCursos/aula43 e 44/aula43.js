const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")

cursos.map((el,i)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c" + (i + 1))
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class","comandos")
    
    const rb = document.createElement("input")
    rb.setAttribute("type","radio")
    rb.setAttribute("name","rb_cursos")

    comandos.appendChild(rb)
    newElement.appendChild(comandos)
    caixaCursos.appendChild(newElement)

})

const radioSelecionado = ()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    
    //filter retorna um array.
    const radioSelecionado = todosRadios.filter((ele)=>{
        return ele.checked
    })

    //aqui eu deixo de trabalhar com todo um array e retorno somente um único elemento da posição 0... a tag input.
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click",()=>{
    const rs = radioSelecionado()

    if(rs!=undefined){
        //".parentNode" uma vez pega o pai de "radioSelecionado". duas vezes pega o avô.
        //".firstChild" pega o primeiro filho do avô que é o object text.
        //".textContent" pega o conteúdo em formato de texto ao em vez de object text.
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert(`Curso selecionado: ${cursoSelecionado}`)
    }else{
        alert("Por favor selecione um curso.")
    }

})

btnRemoverCurso.addEventListener("click",()=>{
    const rs = radioSelecionado()

    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode
    
        //".remove()": remove a própria varável assossiada. neste caso, remove "cursoSelecionado"
        cursoSelecionado.remove()
    }else{
        alert("Selecione um curso para poder remover.")
    }
})