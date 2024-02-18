const objetos = document.getElementById("objetos")

const computador = {
    cpu:"",
    ram:"",
    hd:"",
    info:function(){
        console.log(`cpu: ${this.cpu}`)
        console.log(`ram: ${this.ram}`)
        console.log(`hd: ${this.hd}`)
    }
}

computador["monitor"] = "22pol"
computador.PlacaVideo = "rtx"



// "Object.assign({},computador)": clona o objeto desejado, neste caso, está sendo clonado o objeto "computador" e feita a associação com a constante "c1". ou seja, pega todo o valor da constante "computador" e clona pra constante "c1". desta forma, o c1 se torna um objeto e pode usar métodos e propriedades de um objeto.
const c1 = Object.assign(computador)

// "delete": deleta uma propriedade de um objeto selecionado. neste caso, do objeto "computador" está sendo deletado o hd.
delete(computador.hd)

console.log(computador)

c1.info()


const c2 = Object.create(computador)
c2.cpu = "i9"
c2.ram = "32gb"
c2.hd = "2tb"
c2.info()
console.log(c2)



// é possível fazer um "merge"/mesclar/juntar varios objetos em um só. neste caso, os objetos 01, 02 e 03 estão sendo mesclados no objeto 04.
const o1 = {obj1:"1"}
const o2 = {obj2:"2"}
const o3 = {obj3:"3"}
const o4 = Object.assign(o1,o2,o3)

console.log(o4)


const computadores = [
    {
        cpu:"i9",
        ram:"64gb",
        hd:"2tb"
    },

    {
        cpu:"i7",
        ram:"32gb",
        hd:"2tb"
    },

    {
        cpu:"i5",
        ram:"16gb",
        hd:"2tb"
    }    
]

// computador.info()

// console.log(computadores)

// objetos.innerHTML = JSON.stringify(computadores)

computadores.forEach((c)=>{
    // console.log(c)

    const div = document.createElement("div")
    div.innerHTML = `${c.cpu} <br> ${c.ram} <br> ${c.hd}`
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})

