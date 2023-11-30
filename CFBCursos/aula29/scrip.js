function aluno(nome,nota){
    this.nome = nome
    this.nota = nota

    console.log(nome)
    console.log(nota)
}

aluno("bruno", 100)


console.log("--------------------------------------------------")

function aluno1(nome,nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimo = function(){
        setTimeout(function(){ //setTimeout("função", "tempo"): cria um atraso na execução de algo.
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }

    this.dados_arrow = function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1 =new aluno1("bruno", 100)
al1.dados_anonimo()
al1.dados_arrow()