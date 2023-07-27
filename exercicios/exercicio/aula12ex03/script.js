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

        //cria uma tag img com id foto
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img. setAttribute('src', 'bebeM.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        }

        //res.innerHTML = `${genero}, ${idade} anos.`
        res.appendChild(img)
    }
}