// Cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0' //nao faca esse tipo de manipulacao
const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__:pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

// /////////////////////////////////////////////////////////////////////////////

const carro = {
    velAtual: 0,
    velMaxima: 200,
    acelarMais(delta){
        if (this.velAtual + delta <= this.velMaxima){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

console.log(carro.status())

const ferrari = {
    modelo: 'F40',
    velMaxima: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) //Estabelece uma relacao de prototipos entre objetos tornando o segundo prototipo do primeiro
Object.setPrototypeOf(volvo, carro)

volvo.acelarMais(100)

console.log(volvo.status())

ferrari.acelarMais(300)

console.log(ferrari.status())