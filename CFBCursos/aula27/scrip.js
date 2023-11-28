function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield 'azul'
}
//"itc": iterador de cores
const itc1 = cores() //primeira chamada retorna iterador

//.next(): proxima execução da funçõa
//value: o que eu quero do next. o valor do yield
console.log(itc1.next().value) //segunda chamada entra na função e executa até encontrar um yield

//chamando mais duas vezes, a própria função sabe onde parou e não vai retornar mais o "vermelho".
console.log(itc1.next().value) //retorna "verde"
console.log(itc1.next().value) //retorna "azul"

console.log("--------------------------------------")

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}
//"itp": iterador de perguntas
const itp = perguntas()
console.log(itp.next().value)

//.next('valor que vai pra dentro da variável da constante')
console.log(itp.next('bruno').value)
console.log(itp.next('natação').value)

console.log("--------------------------------------")

function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

//"itc": iterador do contador
const itc = contador()
for(let i = 0; i<10; i++){
    console.log(itc.next().value)
}

console.log("--------------------------------------")

function* contador1(){
    let i=0
    while(true){
        yield i++
        if(i>5){
            break
        }
    }
}

const itc2 = contador1()

for(let c of itc2){
    console.log(c)
}