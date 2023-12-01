// somente "if"
let num = 100

if (num > 10) {
    console.log("Número maior que 10")
}

console.log("Fim do programa")

console.log("-----------------------")

// "if e else"
let num1 = 10

if (num1 > 10) {
    console.log("Número maior que 10")
} else {
    console.log("Número menor ou igual que 10")
}

console.log("Fim do programa")

console.log("-----------------------")

// "if e else if"
let num2 = 4

if (num2 > 10) {
    console.log("Número maior que 10")
} else if (num2 > 5) {
    console.log("Número entre 6 e 10")
} else {
    console.log("Número menor ou igual a 5")
}

console.log("Fim do programa")

console.log("-----------------------")

// "if e else if" com if dentro do if
let num3 = 60

if (num3 > 10) {
    console.log("Número maior que 10")
    if (num3 > 50) {
        console.log("Número maior que 50")
    }
} else if (num3 > 5) {
    console.log("Número entre 6 e 10")
} else {
    console.log("Número menor ou igual a 5")
}

console.log("Fim do programa")

console.log("-----------------------")

// Teste lógico mais comprexo
let energia = 100
let clima = "chovendo"

if (energia > 70 && clima == "sol") {
    console.log("Vou a praia")
} else {
    console.log("Vou ao cinema")
}

console.log("Fim do programa")