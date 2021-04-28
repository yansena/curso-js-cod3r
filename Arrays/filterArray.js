// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menor.

// Rertonar os numeros maiores que 10
/* const num = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const filt = num.filter((numeros) => {
    return numeros > 10;
});

console.log(filt);
*/

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const pessoas1 = pessoas.filter((obj) => {
    return obj.nome.length >= 5
})

console.log(pessoas1)

const pessoas50 = pessoas.filter((obj) => {
    return obj.idade > 50
})

console.log(pessoas50)

const pessoasA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a')
})

console.log(pessoasA)