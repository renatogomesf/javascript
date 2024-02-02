
const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tpm_alarme = document.getElementById("tpm_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

// "new Audio()": puxa/carrega um arquivo de áudio de uma pasta bastando apontar para ele colocando o nome.

// como há um atraso na busca do áudio, é interessante trabalhar com promise, para que o áudio seja executado quando a página for executada... pois o js pode passar e não dar tempo de "achar" o áudio e ele não ser executado posteriormente.

// como o áudio será linkado a um evento de botão, não precisa tanto de promesi.
const som_alarme = new Audio("audio/Zé Felipe  - Vacilão.mp3")

// ".loop": definie um valor que será a quantodade de vezes que irá executar algo. para execuções infinitas, basta por um valor negativo de "-1".
som_alarme.loop = 1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click",()=>{
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tpm_alarme.value * 1000)
    alarme_ativado = true

    // quando se fornece um timestemp, em milisegundos, dentro de um "new Date()", ele retorna a data formatada do timestemp fornecido.
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = `Hora do Alarme: ${dt_alarme.toLocaleTimeString()}`
})

btn_parar.addEventListener("click",()=>{
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do Alarme:"
    tpm_alarme.value = 0
    timer.classList.remove("alarme")
    som_alarme.pause()
    som_alarme.currentTime = 0
})

const data = new Date()

div_data.innerHTML = data.toLocaleDateString()

const relogio = ()=>{
    const data = new Date()
    div_relogio.innerHTML = data.toLocaleTimeString()

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando = true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000)