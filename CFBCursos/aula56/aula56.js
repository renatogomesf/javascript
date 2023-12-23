const caixa = document.querySelector("#caixa")

const curso = "javascript"
const canal = "cfb curso"

//forma comum de formar textos com variáveis com o uso do "+"
const frase = "este é o curso de " + curso + " do canal " + canal

//forma atualizada (template string) de juntar textos e variáveis com o uso da crase " `` " e do placeholder "${}".
const frase2 = `este é o <br> curso de ${curso} <br> do canal ${canal}`

//caixa.innerHTML = frase2

//------------------------------------------------------------------

const carros = ["polo","golf","t-cross","hrv"]

let ul = `<ul>`
carros.map((el)=>{
    ul += `<li>${el}</li>`
})

caixa.innerHTML = ul