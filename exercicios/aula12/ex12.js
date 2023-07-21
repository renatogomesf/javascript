//pega informações do sistema do pc
var agora = new Date()

//das informações do sistema fornecidas, foi solicitada a hora.
var hora = agora.getHours()

console.log(`agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('bom dia.')
} else if (hora <= 18 ) {
    console.log('boa tarde.')
} else {
    console.log('boa noite')
}