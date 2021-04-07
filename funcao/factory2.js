

function criarProduto(nome, preco) {
    return {
         nome,
         preco,
         desconto: 0.1

    }
}

console.log(criarProduto('Macbook Pro', 10000))
console.log(criarProduto('Macbook Air', 9000))