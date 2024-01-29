const texto = document.querySelector("#texto")

const btn_copiar = document.querySelector(".btn_copiar")

btn_copiar.addEventListener("click",()=>{

    // para copiar algo para área de transferência:

    // "navigator": acessa o navegador.

    // ".clipboar": chama a área de transferência

    // .write("o que deseja copiar"): "escreve"/copia na a área de transferência algo que NÃO seja texto. ou seja, pega o que está no navegador e poe na área de transferência.

    // .writeText("texto que deseja copiar"): "escreve"/copia na a área de transferência especificamente textos. ou seja, pega o que está no navegador e poe na área de transferência.

    // no mobile pode existe um problema na hora de copiar de um input. então é preciso fazer um "select", para selecionar o texto que estiver dentro do input e um "setSelectionRange" pra garantir que irá selecionar tudo.

    // texto.select()
    // texto.setSelectionRange(0,99999)

    navigator.clipboard.writeText(texto.value)
})