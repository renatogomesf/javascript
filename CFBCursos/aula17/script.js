let n = 0
        
while (n <= 10){
    console.log(`N°: ${n}`)
    n++ // é preciso fazer encremento pois a condição seria sempre verdadeira e se tornaria um loop infinito. com o encremento o valor de "n" aumenta e em algum momento se torna falso e sai do loop.
}

console.log('-------------------')

//fatorial

let n1 = 3
let fat = 1

while (n1 >= 1){
    fat *= n1
    n1-- //neste caso, foi preciso fazer um decremento.
}

console.log(fat)
