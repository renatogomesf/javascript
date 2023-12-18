const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16,12,10,17,15,13,11,19]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener("click",()=>{

    //".some(e,i,a)" chama ou execura uma função e funciona basicamente como o .map(e,i,a), percorre um array, elemento por elemento, retornando o elemento (e), indice (i) e o proprio array (a) que satisfazer a função executada.
    const ret = elementos_array.some((e,i)=>{
        if( e < 18){
            resultado.innerHTML = "Array não conforme na posição " + (i + 1)
        }

        return e >= 18
    })

    if(ret){
        resultado.innerHTML = "tudo ok"
    }

    console.log(ret)
})