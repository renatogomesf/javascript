//const soma = function(v1,v2){return v1+v2}

//arrow function
const soma=(v1,v2) => {return v1+v2}

console.log(soma(10,5))

console.log("-----------------------------")

//quando só tem 1 parâmetro
const nome=n => {return n}

console.log(nome("bruno"))

console.log("-----------------------------")

//sem o uso do "return"
const add=n => n+10

console.log(add(10))

//------------------------------------

const soma1=(v1,v2) => v1+v2

console.log(soma1(10,5))

//------------------------------------

const nome1=n => n

console.log(nome1("bruno"))

//------------------------------------

//função mais complexa
const soma2=(v1,v2) => {
    let res = v1+v2
    return res
}

console.log(soma2(20,5))