function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`My name is ${this.nome}`)
    }
}

const p1 = new Pessoa('Lucas')
p1.falar()
