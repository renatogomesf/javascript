const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")

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

btnCursoSelecionado.addEventListener("click",(evt)=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado = todosRadios.filter((ele)=>{
        return ele.checked
    })

    radioSelecionado = radioSelecionado[0]

    //".parentNode" uma vez pega o pai de "radioSelecionado". duas vezes pega o avô.
    //".firstChild" pega o primeiro filho do avô que é o object text.
    //".textContent" pega o conteúdo em formato de texto ao em vez de object text.
    const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    alert(`Curso selecionado: ${cursoSelecionado}`)

    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(cursoSelecionado)
})