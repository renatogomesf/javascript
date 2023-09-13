var idade = 15

console.log(`você tem ${idade} anos.`)

if (idade < 16) {
    console.log('não vota')

} else if (idade < 18 || idade > 65) { //"else if": senão se
    console.log('voto opcional')
    
} else {
    console.log('voto obrigatório')
}