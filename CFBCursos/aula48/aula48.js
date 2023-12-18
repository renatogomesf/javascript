const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21,25,19,20,16,18,22]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener("click",()=>{

    //".every(e,i,a)" chama ou execura uma função e funciona basicamente como o .map(e,i,a), percorre um array, elemento por elemento, retornando o elemento (e), indice (i) e o proprio array (a) que satisfazer a função executada.
    const ret = elementos_array.every((e,i)=>{
        if( e < 18){
            resultado.innerHTML = "Array não conforme na posição " + (i + 1)
        }else{
            return e >= 18
        }
    })

    if(ret){
        resultado.innerHTML = "tudo ok"
    }

    console.log(ret)
})