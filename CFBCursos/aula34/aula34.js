const c1 = document.querySelector("#c1")

const msg = ()=> {
    window.alert("clicou")
}

c1.addEventListener("click",msg)

//----------------------------------------------------------

//é possível colocar uma função anônima / arrow function dentro do addEventListener diminuido o código.
const c2 = document.querySelector("#c2")

c2.addEventListener("click",()=>{
    window.alert("clicou arrow function")
    // msg(): (é possível chamar funções também)
})

//----------------------------------------------------------

//capturando o evento e quem disparou o evento.
const c3 = document.querySelector("#c3")

//com o ".target" retorna exatamente quem disparou o evento. neste caso, retorna a div com id c3.
//com o retorno, é possível trabalhar com a div modificando ela com o ".classList.add" que adiciona uma classe na div e essa classe possui configurações css com o nome ".destaque", mas não é necessário o ponto "." para chamar a classe destaque do css.
c3.addEventListener("click",(evt)=>{
    const el = evt.target
    el.classList.add("destaque")
})

//-------------------------------------------------------------

//pego todos os elementos e espalho com o spread criando um array com nome cursos... com o .map(), mapeio esse array elemento por elemento e passo um por um para a arrow function... dentro do arrow, executa o addEventListener com o evento de "click" no parâmetro "el" e uma arrow function com o parâmetro "evt" onde é capturada a div por div, colocada numa variável "ele" e nessa variável é usada a classList.add que adiciona a classe destaque na div que for clicada... onde essa classe possui configurações na css. 
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const ele = evt.target
        ele.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
    })
})