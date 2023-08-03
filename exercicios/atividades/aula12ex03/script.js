function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('.res')

    //"fano.value.length": checa se a caixa está vazia.
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Ano incorreto')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''

        //cria tag img no html
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeM.jpg')

            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imagens/jovemM.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoM.jpg')

            } else {
                img.setAttribute('src', 'imagens/idosoM.jpg')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeF.jpg')

            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'imagens/jovemF.jpg')

            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoF.jpg')

            } else {
                img.setAttribute('src', 'imagens/idosoF.jpg')

            }
        }

        res.innerHTML = `${genero}, ${idade} anos.`
        res.appendChild(img)
    }
}