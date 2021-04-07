// Funcoes anonimas basicamente sao funcoes sem nome

const soma= function(x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { /* como nao foi definido a operacao, ele vai pegar a funcao soma la em cima
    e executala atribuindo a ela os valores que foram atribuidos para " a " e " b " */
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) //podendo assim chamar a funcao direto na chamada dos parametros
imprimirResultado(3, 4, function (x, y) { //chamando uma funcao dentro da outra 
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) //usando uma arrow function que e sempre uma funcao anonima

const pessoa = {
    falar: () => {
        console.log('Opaaa')    //funcao anonima dentro do conceito de obj
    }
}

pessoa.falar()