
const div_data = document.querySelector(".div_data")
const div_relogio = document.querySelector(".div_relogio")

// classe "new Date()" na qual puxa informações de data e hora completas do computador.
const data = new Date()
console.log(data)

div_data.innerHTML = data.toLocaleDateString()



// CRIANDO RELOGIO EM TEMPO REAL.
const relogio = ()=>{
    const data = new Date()
    div_relogio.innerHTML = data.toLocaleTimeString()
}

// "setInterval()": função que chama outra função de acordo com o tempo definido. neste caso, chama a função relogio() a cada 1 segundo. o tempo deve ser cololado em milisegundo... 1000 milisegundos = 1 segundo
const intervalo = setInterval(relogio,1000)




//-----------------------------------------------------------------------

// timestemp - "Date.now()": retorna uma contagem, em milisegundos, que é feita desde 01 de janeiro de 1970 atá os dias atuais. ou seja, diz quanto tempo se passou, em milisegundos, desde 1970.

// com o timestemp, é possível extrair data e hora. ou transformar data e hora em timestemp
console.log(Date.now())

// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// getFullYear() = Ano com 4 digitos
// getHours() = Horas
// getMiliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (contagem, em milisegundos, desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (contagem, em milisegundos, desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define segundos
// setMilisegundos() = Define milisegundos
// toDateString() = Retorna dia da semana e data (dia da semana, mês, dia e ano).
// toLocaleDateString() = Retorna somente data (dia, mês e ano)
// toLocaleTimeString() = Retorna somente horário (hora, minuto e segundo)