let num1 = document.getElementById('fnum1')
let num2 = document.getElementById('fnum2')
let res = document.getElementById('res')
function somar() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 + n2

    let p = document.createElement('p')
    p.innerText = `A soma entre ${n1} e ${n2} é igual a ${s}`
    res.appendChild(p)
}

function subtr() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 - n2

    let p = document.createElement('p')
    p.innerText = `A subtração entre ${n1} e ${n2} é igual a ${s}`
    res.appendChild(p)
}

function mult() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 * n2

    let p = document.createElement('p')
    p.innerText = `A multiplicação entre ${n1} e ${n2} é igual a ${s}`
    res.appendChild(p)
}

function divi() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 / n2

    let p = document.createElement('p')
    p.innerText = `A divisão entre ${n1} e ${n2} é igual a ${s}`
    res.appendChild(p)
}