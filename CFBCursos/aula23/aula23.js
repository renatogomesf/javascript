function soma(...valores){
    let tam = valores.length
    let res = 0

    for(i=0;i<tam;i++){
        res += valores[i]
    }

    return res
}

console.log(soma(10,5,2,15,8))
console.log("--------------------------------")

function soma(...valores){
    let res = 0

    for(let v of valores){
        res += v
    }
    
    return res
}

console.log(soma(10,5,2,15))