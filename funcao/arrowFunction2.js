function Pessoa() {
    this.idade = 0

    setInterval(() => {
       this.idade++
       console.log(this.idade) 
    }, 1000)
}

new Pessoa

// Dentro de uma arrow function o this nao varia.