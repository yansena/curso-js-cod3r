function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado (variaveis criado dentro de funcoes que nao sao instaciadas com o this se tornam privadas ao uso iterno) 
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual + delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())