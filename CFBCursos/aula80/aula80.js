const mat = document.getElementById("mat")
const mate = document.getElementById("mate")

// ".random()": gera um número aleatório entre 0 e 1. caso deseje um número maior que 1, basta multiplicar a função com o número até onde deseja randomizar. neste caso, multipliquei por 10, então, irá randomizar de 0 a 10. se multiplicasse por 100, iría randomizar de 0 a 100 e assim por diante.



const num = Math.random()*10

// ".floor()": precisa informar um número qualquer e ele retorna o maior número inteiro igual ou superior ao seu argumento numérico fonecido. ou seja, sempre pega somente o número inteiro do valor fornecido e desconsidera as casas decimais... ex: 1.1 = retorna 1, 1.5 = retorna 1, 1.9 = retorna 1

// o random vai até 10 mas o floor não arredonda pra 10. só vai até 9.
mat.innerHTML = Math.floor(num)

// ".round()": precisa informar um número qualquer e ele retorna um número arredondado para o número inteiro mais próximo. ou seja, esse sim considera as casas decimais e retorna o valor inteiro mais próximo. ex: 1.1 = retorna 1, 1.4 = retorna 1, 1.5 = retorna 2, 1.9 = retorna 2

// neste pode sim ir até 10.
mate.innerHTML = Math.round(num)

// .sqrt("valor numérico"): retorna a raiz quadrada do número informado.
// .pow("número", "expoente"): retorna o resultado de um número elevendo a outro
