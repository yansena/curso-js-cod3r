// Quando criamos objetos com constantes podemos modificar os dados desse objeto, mas nao poderemos fazer uma atribuicao de um novo
// objeto para essa constante

// pessoa -> 123 --> {...}
const pessoa = {nome: 'Yan'}
pessoa.nome = 'Pedro'
console.log(pessoa)


Object.freeze(pessoa)
// Serve para congelar o objeto e suas informacoes barrando modificacoes e tornando-o 100% constante
