function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Macbook Pro',
    preco: 11490,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Dessa forma sem passar o objeto pra funcao elas procurara os parametros no contexto global

console.log(produto.getPreco())

const carro = { preco: 40000, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // quando se usa .call os paramentros sao passados ao lado do contexto apos uma virgula
console.log(getPreco.apply(carro, [0.17, '$'])) //e quanso usa-se .apply os paramentros sao passados dentro de um array apos o contexto