const num = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

const dobro = num.map(valor => valor * 2)

// console.log(dobro)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map( value => value.nome )

console.log(nomes.toString())

const idades = pessoas.map( value => ({idade: value.idade}) )
console.log(idades)

const id = pessoas.map((value, indice) => {
    const newObj = {...value};
    newObj.id = ++indice;
    return newObj;
})

// console.log(pessoas)
console.log(id)