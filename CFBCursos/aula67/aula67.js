const nave = function(energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new nave(100)

//foi adicionado a propriedade vidas na classe nave. mas ele aparece no prototype e não dentro do proprio objeto. porém, pode ser usado/chamado normalmente como todas as outras propriedades.
nave.prototype.vidas = 3

//foi adicionado o método disparar na classe nave. mas ele aparece no prototype e não dentro do proprio objeto. porém, pode ser usado/chamado normalmente como todos os outros métodos.
nave.prototype.disparar = function(){
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()

console.log(nave)
console.log(n1)
console.log(n1.energia)
console.log(n1.vidas)
console.log(n1.disparos)