
//função anônima
const f = function(v1,v2){
    return v1 + v2
}

console.log(f(10,5))

console.log("---------------------------")

const fu = function(...valores){
    let res = 0

    for(let v of valores){
        res += v
    }

    return res
}

console.log(fu(10,10,10,10,10))

console.log("--------------------------")

const fun = new Function("v1", "v2", "v3", "return v1+v2+v3") //Função construtor e anônima

console.log(fun(10,5,5))