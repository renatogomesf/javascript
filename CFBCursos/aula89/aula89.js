const btn_imp = document.getElementById("btn_imp")

btn_imp.addEventListener("click",()=>{

    // ".print()": funciona como o "ctrl + p"... ou seja, imprime a tela completa com botões e tudo. mas, caso exista um estilo css voltado para impressão " midea="print" " e nele seja feita a estilização para impressão e removendo os botões, por exemplo, o "window.print()" abre a janela de impressão já com as configurações da css voltada pra impressão.
    window.print()
})