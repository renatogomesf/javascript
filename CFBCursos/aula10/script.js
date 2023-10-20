let num = 13

let ress = num % 2

res = (!(num % 2) ? `${num} é Par` : `${num} é Impar`)

console.log(`o resto da divisão é ${ress}`)

console.log(res)

// "num % 2": resto da divisão de 10 por 2. neste caso, o resto é 0 (zero).

// 0 é o mesmo que False
// 1 é o mesmo que True

//mas como 10 é par, para resolver basta negar o testo lógico.
console.log("-----------------------")

let num1 = 13
let num2 = 10

resp = (num1 > num2 ? "Verdadeiro" : "Falso")

console.log(resp)