// 1 )
console.log("Questao 1.")
function calc(a, b) {
    const soma = a + b
    const sub = a - b
    const mult = a * b
    const div =  a / b
    console.log("Soma: " + soma + ", Subtracao: " + sub + ", Multiplicacao: " + mult + ", Divisao: " + div)
}
calc(4,5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2 )
console.log("Questao 2.")

function ladosTriangulo(lado_a, lado_b, lado_c) {

    if (lado_a == lado_b && lado_a == lado_c && lado_b == lado_c){
        console.log("Triangulo Equilátero")

    } else if (lado_a == lado_b && lado_a != lado_c && lado_b != lado_c || lado_b == lado_c && lado_a != lado_c && lado_a != lado_b || lado_a == lado_c && lado_b != lado_a && lado_b != lado_c){
        console.log("Triangulo Isósceles")

    }else if (lado_a != lado_b && lado_a != lado_c && lado_b != lado_c) {
        console.log("Triangulo Escaleno")
    }
}

ladosTriangulo(6,4,6)
ladosTriangulo(5,5,5)
ladosTriangulo(2,4,5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3 )
console.log("Questao 3.")

function calcArea(base, expoente) {
    let calc = base ** expoente
    return calc
}

console.log(calcArea(5,2))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4 )
console.log("Questao 4.")


const divi = function( dividendo, divisor) {
    return dividendo / divisor
}

console.log(divi(4,2))
