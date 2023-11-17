function canal(){
    let n1 = 10
    let n2 = 2
    let res = n1 * n2
    if(res % 2 == 0){
        return "par"
    } else {
        return "ímpar" //"return" joga uma variável/string dentro de "canal()"
    }
}

let num = canal() //"num" recebe o que estiver em "canal()"

console.log(num) //imprime o que estiver em "num"