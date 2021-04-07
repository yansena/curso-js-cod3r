class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    
    falar(){
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new Pessoa('Joao')
p1.falar()



const criarPessoa = nome => {
    return {
        falar: () => console.log(`My name is ${nome}`)
    }
}

const p2 = criarPessoa('Caetano')
p2.falar()