const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1,2,3,4,5]
let ant = []
let atu = []
let dobro = []

p_array.innerHTML = elementos_array

btnReduzir.addEventListener("click",()=>{

    //".reduce(anterior,atual,posição,array)" chama ou executa uma função e funciona basicamente como o .map(e,i,a), percorre um array, elemento por elemento, retornando o que eu especificar no "return".

    //vou reduzir a função através de uma somatória dos seu elementos... minha função vai retornar o valor anterio + atual... iniciando a operação no primeiro elemento atual que é "1", não há valor anterior, logo, o parâmetro "anterior" se torna zero, faz a soma e retorna "1" e esse valor do return se torna o anterior.
    
    //passa para o próximo número atual, "2", pega o valor anterio que é "1" por conta da ultima iteração, soma e retorna "3". onde 3 passa a ser o valor anterior... e assim em diante.

    resultado.innerHTML = elementos_array.reduce((an,at,i)=>{
        ant.push(an)//valor anterior é o retorno
        atu.push(at)
        dobro.push(at*2)
        return an + at
    })

    resultado.innerHTML += "<br>V. anterior: " + ant + "<br>V. atual: " + atu + "<br>Dobro: " + dobro
})