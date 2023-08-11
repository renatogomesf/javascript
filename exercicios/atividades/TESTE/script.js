let num1 = document.getElementById('fnum1')
let num2 = document.getElementById('fnum2')
let res = document.getElementById('res')
function somar() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let s = n1 + n2

    let p = document.createElement('p')
    p.innerText = `A soma entre ${n1} e ${n2} é ${s}`
    res.appendChild(p)
}