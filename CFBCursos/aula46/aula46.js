//DECLARAÇÃO DE CONSTANTES
const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarAntes = document.getElementById("btnAdicionarAntes")
const btnAdicionarDepois = document.getElementById("btnAdicionarDepois")

const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao = ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    cursoSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

// FUNÇÃO DE CRIAR NOVO CURSO
const criarNovoCurso = (curso)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c" + (indice + 1))
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = curso

    newElement.addEventListener("click",(evt)=>{

        //chamando a função
        tirarSelecao()

        //".toggle()" (alternar): verifica se o elemento selecionado possui ou não uma determinada classe. caso o elemento não possua, ele adiciona. caso possua, ele remove. neste caso, ele está adicionando e removendo a classe css "selecionado" em "evt.target" que é uma div.
        evt.target.classList.toggle("selecionado")
    })
    
    return newElement
}

// MAPEIA O ARRAY CURSO
cursos.map((el)=>{
    const newElement = criarNovoCurso(el)
    caixaCursos.appendChild(newElement)
    indice++
})

// FUNÇÃO QUE RETORNA O CURSO SELECIONADO
const cursoSelecionado = ()=>{
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
    
    //aqui eu deixo de trabalhar com todo um array e retorno somente um único elemento da posição 0... a tag input.
    return cursoSelecionado[0]
}

// BOTÃO DE CURSO SELECIONADO
btnCursoSelecionado.addEventListener("click",()=>{
    const cs = cursoSelecionado()
    
    if(cs!=undefined){
        alert(`Curso selecionado: ${cs.innerHTML}`)
    }else{
        alert("Por favor selecione um curso.")
    }
})

// BOTÃO DE REMOVER CURSO
btnRemoverCurso.addEventListener("click",()=>{
    const cs = cursoSelecionado()
    
    if(cs!=undefined){
        //".remove()": remove a própria varável assossiada. neste caso, remove "cs"
        cs.remove()
    }else{
        alert("Selecione um curso para poder remover.")
    }
})

//BOTÃO DE ADICIONAR CURSO ANTES
btnAdicionarAntes.addEventListener("click",()=>{
    const valor = nomeCurso.value
    const cs = cursoSelecionado()
    
    if(cs!=undefined){
        if(nomeCurso.value != ""){
            const cursoSelecionado = cs
            const novoCurso = criarNovoCurso(valor)
    
            //".insertBefore": adicionar antes. dentro do parenteses precisa de dois parâmetros... o que quer adicionar e antes de quem. neste caso, adicionar novoCurso antes de cursoSelecionado.
            caixaCursos.insertBefore(novoCurso,cursoSelecionado)
        }else{
            alert("Digite um curso para poder ser adicionado")
        }
    }else{
        alert("Selecione um curso para poder adicionar antes.")
    }
})

//BOTÃO DE ADICIONAR CURSO DEPOIS
btnAdicionarDepois.addEventListener("click",()=>{
    const valor = nomeCurso.value
    const cs = cursoSelecionado()
    
    if(cs!=undefined){
        if(nomeCurso.value != ""){
            const cursoSelecionado = cs
            const novoCurso = criarNovoCurso(valor)
    
            //não existe o insertAfter. porém, é possível adicionar antes do próximo irmão de cursoSelecionado.
            caixaCursos.insertBefore(novoCurso,cursoSelecionado.nextSibling)
        }else{
            alert("Digite um curso para poder ser adicionado")
        }
    }else{
        alert("Selecione um curso para poder adicionar depois.")
    }
})