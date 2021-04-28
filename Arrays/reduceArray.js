//Some todos os numeros (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, value) => {
    // console.log(acumulador)
    return value += acumulador;
})

console.log(total);

// Retorne um array com os valores pares (Better apply with Filter)

const pares = numeros.reduce((acumulador, value) => {
    if ( value % 2 === 0) {
        acumulador.push(value)
    }
    return acumulador
}, [] )

console.log(pares)


// Retorne um array com o dobro dos valores (Better apply this with Map)

const dobro = numeros.reduce((acumulador, value) => {
    acumulador.push(value * 2);
    return acumulador
}, [])

console.log(dobro)


// Retorne a pessoa mais velha

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 }
];

const old = pessoas.reduce((acumulador, value) => {
    if(acumulador.idade > value.idade ) return acumulador;
    return value;
});

console.log(old)
