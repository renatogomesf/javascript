const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = ["HTML","CSS","JavaScript"]

p_array.innerHTML = elementos_array

btnPesquisar.addEventListener("click",()=>{
    resultado.innerHTML = "Valor não encontrado."

    //".find(e,i,a)" chama ou execura uma função e funciona basicamente como o .map(e,i,a), percorre um array, elemento por elemento, retornando o elemento (e), indice (i) e o proprio array (a) que satisfazer a função executada.
    elementos_array.find((e,i)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado " + e + " na posição " + (i + 1)
            return e
        }
    })
})