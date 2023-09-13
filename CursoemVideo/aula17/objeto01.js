let amigo = {nome: 'jose', sexo: 'M', peso: 85.4,
    engordar(p=0) {
        console.log('engordou')
        this.peso += p
    }
}

amigo.engordar(2)

console.log(amigo)
console.log(amigo.nome)
console.log(amigo.sexo)
console.log(amigo.peso)

console.log(`${amigo.nome} pesa ${amigo.peso} e é do sexo ${amigo.sexo}.`)