let num=[10,20,30,40,50]


// "num.length": o ".length" retorna o comprimento do array. ou seja, a quantidade de elementos do array. neste exemplo, tem um comprimento de 5 elementos.

for(let i=0;i<num.length;i++){

    // "num[i]": do array "num" vai mostrar os elementos da posição "i"

    // se por somente "i" no console, irá mostrar as keys/posições (0,1,2,3,4) do array.
    console.log(num[i])
}

console.log("-------------------")

// for in

let num1=[10,20,30,40,50]

for (n in num1){ //trabalha com as posições.

    // "num1[n]": do array "num1" vai mostrar os elementos da posição "n"

    // se por somente "n" no console, irá mostrar as keys/posições (0,1,2,3,4) do array.

    console.log(num1[n])
}

console.log("-------------------")

// for of

let num2=[10,20,30,40,50]

for (n of num2){ //trabalha com os elementos.

    // se por somente "n" no console, irá mostrar as os elementos (10,20,30,40,50) do array.

    //for of trabalha diretamente com os elementos

    console.log(n)
}

console.log("-------------------")

const objs=document.getElementsByTagName("div")

//retorna as keys do array objs.
for (o in objs){
    console.log(o)
}

for (o in objs){
    console.log(objs[o])
}

//retorna os elementos (divs) do array objs.
for (o of objs){
    console.log(o)
}

for (o of objs){

    //com o ".innerHTML=""" você modifica o que está dentro da tag/conjunto de tags que está sendo trabalha. 

    //".innerHTML="o que está aqui vai ser colocado na tag/conjunto de tags trabalhada""
    console.log(o.innerHTML="Curso")
}