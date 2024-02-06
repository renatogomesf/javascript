const olhos = [...document.getElementsByClassName("olho")]

let posx_mouse = 0
let posy_mouse = 0

// adiciona um evento na janela do navegador. quando o mouse se move, dispara um evento "MouseEvent".

// do "MouseEvent" disparado, é possível pegar o "clientX" (coordenada X do mouse) e clientY (coordenada Y do mouse).
window.addEventListener("mousemove",(evt)=>{
    console.log(evt)
    posx_mouse = evt.clientX
    posy_mouse = evt.clientY

    // ".atan2" (arco tangente que precisa de coordenadas x e y): pegar valores de Y e X e retorna um valor em radianos. para trasnformar radianos em graus, basta por 180/Pi.
    const rot = (Math.atan2(posy_mouse,posx_mouse)) * 180/Math.PI

    olhos.forEach((o)=>{

        // acesso o css style da tag img e muda o valor da propriedade transform de acordo com o retornado pela constante "rot" em graus.
        o.style.transform = "rotate("+rot+"deg)"
    })
})