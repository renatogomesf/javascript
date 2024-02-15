const url = document.getElementById("url")
const btn_url = document.getElementById("btn_url")

btn_url.addEventListener("click",()=>{

    // "window.location": redireciona para um local especificado entre áspas. pode ser um URL ou arquivo presente na pasta do projeto.
    // window.location = "https://www.google.com.br/"


    // ".replace()": redireciona e remove a url atual do histórico e poe a url especificada. ou seja, não permite "retornar" para a página anterior. é só de ida.
    // window.location.replace("https://www.google.com.br/")


    // ".assign()": redireciona e mantem a url atual no histórico. ou seja, permite "retornar" para a página anterior.
    // window.location.assign("https://www.google.com.br/")


    // ".reload()": recarrega a página.
    // window.location.reload()


    // ".back()": volta uma página no navegador que esteja salva no histórico. é como clicar na setinha da página do navegador.
    // window.history.back()


    // ".forward()": avança uma página no navegar que esteja salva no histórico. é como clicar na setinha da página do navegador.
    // window.history.forward()


    // ".go()": navega para a página especificada. primeira página, terceira, quinta... basta por o número/posição da página.
    // window.history.go(1)


    // ".length": diz o tamanho/quantas coisas estão no histórico.
    // console.log(window.history.length)

    window.location = url.value
})