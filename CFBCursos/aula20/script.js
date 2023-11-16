
function nome(){ //declaração da função.
    console.log("Renato")
}

nome() //chamada de função. executa a função.

// a quantidade de vezes que eu chamar a função, será a quantidade de vezes que ela será executada.
nome()
nome()
nome()

console.log("--------------------")

//a função pode ser chamada num for/while.

for(let i = 0; i<10; i++){
    nome()
}

console.log("--------------------")

function soma(){ //declaração da função.
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

for(let i = 0; i<10; i++){
    soma()
}

console.log("--------------------")

//HMTL
function mudarTexto(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")

    d1.innerHTML("CFB Cursos")
    d2.innerHTML("CFB Cursos")
    d3.innerHTML("CFB Cursos")
}

