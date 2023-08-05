function gerar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        
        //antes de gerar a tabuada, ela é limpa.
        tab.innerHTML = ''

        while (c <= 10) {

            //define a tag que vai ser criada no HTML
            let item = document.createElement('option')

            //"escreve" dentro da tag criada.
            item.text = `${n} x ${c} = ${n*c}`

            //cria a tag efetivamente
            tab.appendChild(item)

            //incremento: c = c + 1
            c++
        }
    }
}