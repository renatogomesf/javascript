

function adicionar() {
    var numero = document.getElementById('num')
    var resultado = document.getElementById('res')

    if (numero.value.length == 0) {
        window.alert('Porfavor digite um número')
    } else {
        var n = Number(numero.value)
        let op = document.createElement('option')
        op.text = `O número ${n} foi adicionado! `
        resultado.appendChild(op)
    }
}

function finalizar() {
    let memo = [2,2,2,2]
    let des = document.getElementById('des')
    let p = document.createElement('p')
    p.innerText = `Ao todo, temos ${memo.length} números cadastrados.`
    des.appendChild(p)
}
