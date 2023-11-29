    //AULA

// const cursos = ['html', 'css', 'javascript', 'php', 'react']

// cursos.map((el,i)=>{
//     console.log(`Curso: ${el} - posição do curso: ${i}`)
// })

// console.log("----------------------------------------")

// const cursos1 = ['html', 'css', 'javascript', 'php', 'react']

// let c = cursos1.map((el,i)=>{
//     return "<div>" + el + "</div>" //não é um elemento "div"
// })

// console.log(c)

//--------------------------------------------------------------------------------------------

    //TRABALHANDO COM HTML

// let el = document.getElementsByTagName("div") //"el" não é uma coleção iterável. não é array.

// el = [...el] //el recebe o espalhamento do próprio el. deixando ele iterável. tornando um array.

// el.map((e,i)=>{
//     //com o innerHTML, retorna o que está dentro da html div. sem o inner, retorna a própria div completa.
//     console.log(e.innerHTML)

//     //muda o que está dentro do elemento selecionado "e" pelo que está em áspas "cfb cursos"
//     e.innerHTML = "cfb cursos"
// })


// const el = document.getElementsByTagName("div")
// const val  = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
// console.log(val)

//------------------------------------------------------------------------------------

const converterInt = (e)=>parseInt(e)
let num = ['1','2','3','4','5'].map(converterInt) //map recebe o proprio array
console.log(num)

const dobrar = (e)=>e*2
let num2 = ['1','2','3','4','5'].map(dobrar) //map recebe o proprio array
console.log(num2)