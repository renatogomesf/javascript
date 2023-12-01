//em uma mesma linha podem ter mais de uma variável
let num1 = 0, num2 = 0, res = 0

num1 = 2
num2 = 15

res = (num1 + num2)*2

console.log("---SOMA---")

console.log(res)

console.log("---DIVISÃO E RESTO---")

res = num2 / num1
res2 = num2 % num1

console.log(res)
console.log(res2)

console.log("---INCREMENTO E DECREMENTO---")

let num3 = 0, num4 = 0
let num5 = 3, num6 = 5 

num3 ++ //incrementa de 1 em 1
num4 -- //decrementa de 1 em 1

num5 *= 5 //incrementa de acordo com o valor que eu definir. neste caso, 5.

num6 /= 5 //decrementa de acordo com o valor que eu definir. neste caso, 5.

console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)