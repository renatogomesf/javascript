function param(p1){ //tudo que estiver em "p1" será usado nos comandos
    console.log(p1)
}

//chamando a função 3 vezes com parâmetros diferentes
param("bruno") //joga "bruno" dentro de "p1"
param(2022) //joga "2022" dentro de "p1"
param(5.2) //joga "5.2" dentro de "p1"

console.log("---------------------------")

function soma1(n1,n2){
    console.log(n1+n2)
}

//transfere os parâmetros e preenche em ordem/sequência, da esquerda pra direita. o 10 vai pra n1 e o 5 vai pra n2.
soma1(10,5)

console.log("---------------------------")

function soma2(n1=0,n2=0){ //n1=10 e n2=0
    console.log(n1+n2)
}

soma2(10) //foi passado somente o valor 10 que vai pra n1. 

console.log("---------------------------")

function soma3(n1=0,n2=0){
    let res
    res = n1+n2
    return res
}

console.log(soma3(10,10))

console.log("---------------------------")

const valor_padrao = 0

function soma4(n1=valor_padrao,n2=valor_padrao){
    let res
    res = n1+n2
    return res
}

let resultado = soma4(10)
console.log(resultado)

console.log("---------------------------")

let valor = 0

console.log(valor)

function add(v){
    valor += v
}

add(10)
console.log(valor)

add(5)
console.log(valor)