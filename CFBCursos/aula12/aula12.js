let n1 = [10, 20, 30]
let n2 = [11, 22, 33, 44, 55]
let n3 = [n1, n2]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)

console.log("-------------------")

const jogador1 = {nome: "bruno", energia: 100, vidas: 3, magia: 150}
const jogador2 = {nome: "bruce", energia: 100, vidas: 5, velocidade: 80}
const jogador3 = {...jogador1,...jogador2}

//como as keys são as mesmas (nome, energia, vida), irá mostrar os dados do jogardor dois. mas, caso haja diferença de keys/dados, o spread irá fazer a concatenação.

console.log(jogador3)

console.log("-------------------")

const soma=(v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [1, 5, 4, 10]

console.log(soma(...valores))