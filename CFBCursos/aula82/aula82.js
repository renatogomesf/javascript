const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qted = document.getElementById("txt_qted")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

// com ".offsetWidth" e ".offsetHeight" eu posso pegar o tamanho de algum elemento html. neste caso, pego o tamanho da div "palco".
let largura_palco = palco.offsetWidth
let altura_palco = palco.offsetHeight


let bolas = []
let num_bola = 0