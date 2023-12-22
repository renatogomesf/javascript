const caixa = document.querySelector("#caixa")

// "new" reserva na memória/deixa salvo. agora tem salvo uma coleção chamada mapa do tipo map.
let mapa = new Map()

//".set("chave","valor")": adiciona elementos na coleção definindo uma chave e o elemento desta chave.
mapa.set("curso","JavaScript")
mapa.set(10,"cfb cursos")
mapa.set(1,100)
mapa.set("canal",1000)

//".delete("chave")": deleta um elemento da coleção através da chave.
mapa.delete("canal")

console.log(mapa)

//".get("chave")": obtem um elemento da coleção através da chave definida para ele.
caixa.innerHTML = mapa.get("curso")

let pes = 1

//".has("chave")": verifica se uma chave existe ou não na coleção.
if(mapa.has(pes)){
    caixa.innerHTML = "a chave existe na coleção com valor: " + mapa.get(pes)
}else{
    caixa.innerHTML = "a chave não está na coleção"
}

//".size": diz o tamanho da coleção.
caixa.innerHTML += "<br/> o tamanho da coleção é " + mapa.size

//".forEach(el,i,a)": percorre o array/coleção, elemento por elemento, retornando o elemento, índice/chave ou o proprio array/coleção.
mapa.forEach((el,i)=>{
    console.log(el)
    console.log(i)
})