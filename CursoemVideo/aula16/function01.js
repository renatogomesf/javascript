let res = parimp(11)

function parimp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(res)
console.log(parimp(10)) //mostra o resultado sem precisasr criar uma variável