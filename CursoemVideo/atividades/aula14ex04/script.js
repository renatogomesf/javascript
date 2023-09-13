
function contar() {
    //coleta informações do form
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.querySelector('.res')

    //checa se o input está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('Preencha o campo vazio')

    } else {
        res.innerHTML = `Contando: `

        //transforma a string do form em number
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)

        //resultado atraves do while
        /*
        while (i <= f) {
            res.innerHTML = res.innerHTML + `${i}`
            i = i + p
        }
        */

        if (p <= 0) {
            window.alert('Passo com valor 0 (zero) inválido. Considerando passo de valor 1')
            p = 1
        }

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }

        } else {
            for (var c = i; f <= c; c -= p) {
                res.innerHTML += `${c} `
            }

        }
        res.innerHTML += 'FIM!'
    }
    
}