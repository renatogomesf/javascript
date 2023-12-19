//ietera valor por valor.
const valores = [10,8,9,2]
const it_valores = valores[Symbol.iterator]()

console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log("-----------------------------------")

//itera letra por letra.
const texto = "youtube"
const it_texto = texto[Symbol.iterator]()

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
