function soma(n1, n2) {
    return n1 + n2
}

//os parâmetros são distribuidos em sequência, da esquerda pra direita. 2 irá pro n1 e 5 pro n2.
console.log(soma(2, 5))

//caso tenha mais de um parâmetro na function e um dos parâmetros não seja preenchido:

//"n1=0": se o n1 não possuir valor, será considerado 0 (zero)
//"n2=0": se o n2 não possuir valor, será considerado 0 (zero)

//caso todos os parâmetros possuam valores, eles serão considerados normalmente em vez de considerar 0 (zero)
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))