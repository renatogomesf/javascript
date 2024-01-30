const numero = document.getElementById("numero")

// let resultado = false

// let tempo = 3000 // 3000 = 3 segundos.

// numero.innerHTML = "processando..."

// // "setTimeout("o que fazer","depois de quanto tempo")": cria um temporisador que executa algo depois de um tempo estabelecido.
// setTimeout(()=>{resultado = true},tempo)


// // o JS não esperou o setTimeout e caiu dentro do else direto.
// if(resultado){
//     numero.innerHTML = "deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// }else{
//     numero.innerHTML = "deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }

// -------------------------------------------------------------------------

// aqui se cria a "promessa"

// dependendo do retorno, o retorno é alocado em uma posição de parâmetro específica. caso dê tudo certo, o resultado será alocado na primeira posição (como resolv/resolvido)(DEU OK), caso contrário, se der errado, ele resultado cai na segunda posição (como reject/rejeitado)(NÃO DEU OK).
let promesi = new Promise((resolve,reject)=>{
    let resultado = true
    let tempo = 3000

    setTimeout(()=>{
        if(resultado){
            resolve("deu tudo certo")
        }else{
            reject("deu tudo errado")
        }
    },tempo)
})

// para verificar o resultado da new Promise usa-se ".then()", caso o resultado seja OK e ".catch()", caso o resultado NÃO SEJA OK.

// "resolve" cai aqui dentro do parâmetro de ".then()".
promesi.then((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})

// "reject" cai aqui dentro do parâmetro de ".catch()".
promesi.catch((retorno)=>{
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})

numero.innerHTML = "processando..."