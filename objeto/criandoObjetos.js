// Usando anotacao litearal
const obj1 = {}
console.log(obj1)

//Object em Js
const obj2 = new Object
console.log(obj2)

//Funcoes contrutoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Macbook', 10000, 0.15)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Yan', 5000, 1)
const f2 = criarFuncionario('Gabnriel', 2000, 25)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))