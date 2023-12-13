const filtroMior18 = (valor)=>{
    if(valor >= 18){
        return valor
    }
}

const idades = [15,21,30,17,18,44,12,50]

//o ".filter()" funciona basicamente como o ".map()", percorre o array retorando o elemento/valor, a posição/indice e o próprio array em si. podendo também chamar ou executar funções.

//neste caso, filter está chamando uma função.
const maior = idades.filter(filtroMior18)

console.log(idades)
console.log(maior)

console.log("--------------------------------------------")

const idadess = [15,21,30,17,18,44,12,50]

//neste caso, filter está executadando uma arrow function.
const maiorr = idades.filter((valor)=>{
    if(valor >= 18){
        return valor
    }
})

const menor = idades.filter((valor)=>{
    if(valor < 18){
        return valor
    }
})

console.log(idadess)
console.log(maiorr)
console.log(menor)
