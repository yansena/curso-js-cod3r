// Retorne a soma do dobro de todos os pares
// -> Filtrar os pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* const pair = numeros.filter((value) => {
    if (value % 2 === 0) {
        let mult = value * 2;
        console.log(mult)
        return mult
    }
}) */

const pair = numeros
    .filter(value => value % 2 === 0)
    .map(value =>  value * 2)
    .reduce((acumulador, value) => {
    return acumulador + value
}, 0) 


console.log(pair)