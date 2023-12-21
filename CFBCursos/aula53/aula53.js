let valores2 = [1,2,3,4,5]

let op = [
    (val)=>{
        let res = 0
        for(v of val){
            res += v
        }
        return res
    },

    (val)=>{
        let res = 1
        for(v of val){
            res *= v
        }
        return res
    },

    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

// chamando as funções do array "op" com o uso do índice "[0],[1],... " e para poder passar os valores desejados, basta usar parênteses com a variável dentro.
console.log(op[0](valores2))

//---------------------------------------------------------------------------

const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const resultado = document.querySelector(".resultado")

const somar = document.querySelector(".somar")
const subtr = document.querySelector(".subtr")
const multp = document.querySelector(".multp")
const divid = document.querySelector(".divid")

let operar = [
    ()=>{
        const valores = [Number(valor1.value),Number(valor2.value)]
        resultado.innerHTML = (valores[0]+valores[1])
    },

    ()=>{
        const valores = [Number(valor1.value),Number(valor2.value)]
        resultado.innerHTML = (valores[0]-valores[1])
    },

    ()=>{
        const valores = [Number(valor1.value),Number(valor2.value)]
        resultado.innerHTML = (valores[0]*valores[1])
    },

    ()=>{
        const valores = [Number(valor1.value),Number(valor2.value)]
        resultado.innerHTML = (valores[0]/valores[1])
    }
]

somar.addEventListener("click",operar[0])
subtr.addEventListener("click",operar[1])
multp.addEventListener("click",operar[2])
divid.addEventListener("click",operar[3])
