const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)



const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Yan',
        idade: 26,
        endereco: {
            logradouro: 'Rua Ana Bilhar',
            numero: 602,
            apt: 208
        }
    },
    condutores: [{
        nome: 'Ster',
        idade: 25
    }, {
        nome: 'Flora',
        idade: "6 meses"
    }],
    calcularValorSeguro: function(){
        // ...
    }
}
carro.proprietario.endereco.numero = 940;

console.log(carro)