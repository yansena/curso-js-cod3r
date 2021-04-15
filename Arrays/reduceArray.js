//Some todos os numeros (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, value) => {
    // console.log(acumulador)
    return value += acumulador;
})

console.log(total);

// Retorne um array com os valores pares (Best apply with Filter)

const pares = numeros.reduce((acumulador, value) => {
    if ( value % 2 === 0) {
        acumulador.push(value)
    }
    return acumulador
}, [] )

console.log(pares)


// Retorne um array com o dobro dos valores (Filter)

const pares = numeros.reduce((acumulador, value) => {
    if ( value % 2 === 0) {
        acumulador.push(value)
    }
    return acumulador
}, [] )

console.log(pares)