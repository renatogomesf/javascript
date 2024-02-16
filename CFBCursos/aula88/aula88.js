const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click",()=>{
    window.alert("olá, como você está?")

})

btn_confirm.addEventListener("click",()=>{
    const retorno = window.confirm("você está aprendendo muito?")
    console.log(retorno)

    if(retorno){
        console.log('botão "ok" pressionado')
    }else{
        console.log('botão "cancelar" pressionado')
    }
})

btn_prompt.addEventListener("click",()=>{
    const nome = window.prompt("qual seu nome?","digite seu nome aqui")
    console.log(nome)

    if(nome == null){
        console.log('botão "cancelar" pressionado')
    }else{
        console.log(`nome digitado: ${nome}`)
    }
})