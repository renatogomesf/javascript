let num = [5, 8, 2, 9, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`primeiro valor do array: ${num[0]}`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('valor não encontrado')
} else {
    console.log(`o valor 8 está na posição ${pos}`)
}