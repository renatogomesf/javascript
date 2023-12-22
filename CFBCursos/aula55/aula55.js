const caixa = document.querySelector("#caixa")

//diferente da coleção map, é possível inicializar a coleção com elementos usando colchetes "[]" dentro do parênteses (não precisa iniciar vazia e ir adicionando depois).
let musicas = new Set(["musica1","musica boa","musica10"])

//".add()": adiciona elementos na coleção.
musicas.add("musica muito legal")

//como esses elementos já existem na coleção, eles não serão adicionados.
musicas.add("musica1")
musicas.add("musica1")
musicas.add("musica10")

//".delete("nome do elemento")": deleta o elemento desejado através do nome dele.
musicas.delete("musica1")

//".clear()": limpa toda a coleção.
musicas.clear()

console.log(musicas)

//".forEach(el,i,a)": percorre o array/coleção, elemento por elemento, retornando o elemento, índice/chave ou o proprio array/coleção.
musicas.forEach((el)=>{
    caixa.innerHTML += el + "<br>"
})