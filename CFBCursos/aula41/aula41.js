const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")

const cursos = ["HTML","CSS","Javascript","PHP","React","MySQL","ReactNative"]

//o map passa elemento (el) e a key/posição (i) desse elemento.
cursos.map((el,i)=>{
    const newElement = document.createElement("div")
    newElement.setAttribute("id","c" + (i + 1))
    newElement.setAttribute("class","curso c1")
    newElement.innerHTML = el

    const btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src","imagens/lixeira.png")
    btn_lixeira.setAttribute("class","btn_lixeira")
    
    btn_lixeira.addEventListener("click",()=>{
        
        // ".removeChild" remove o filho do elemento seleciondo. neste caso remove o filho, que está entre parênteses, de caixa1.
        caixa1.removeChild(newElement)
    })
    
    newElement.appendChild(btn_lixeira)
    caixa1.appendChild(newElement)
})