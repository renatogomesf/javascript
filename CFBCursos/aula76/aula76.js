const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click",()=>{
    
    numero.innerHTML = "processando..."

    promessa()

    // ".then()" e ".cath()" agora ficam associados à função "promessa()", pois a prrpria função faz o retorno poro conta do "return" dentro dela.
    .then((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno)=>{
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })

})

const promessa = ()=>{
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

    // faz com que a função retorne o resultado da "new Promise"
    return promesi
}

numero.innerHTML = "esperando..."