let  n = 0
let max = 100

while(n<max){
    console.log(n)
    if(n>=10){
        break
    }
    n++
}

console.log("fim do programa")

console.log("----------------------------")

let  n1 = 0
let max1 = 100
let pares = 0

for(let i = n1; i < max1; i++){
    if(i % 2 != 0){
        continue
    }
    pares++
}

console.log("Quantidade de pares: " + pares)
console.log("fim do programa")

console.log("----------------------------")