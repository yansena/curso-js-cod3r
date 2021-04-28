const obj = {
    a: {
        id: 000,
        nome: "a"
    },
    b: {
        id: 001,
        nome: "b" 
    },
    c: {
        id: 002,
        nome: "c"
    },
    soma() {
        return a + b + c
    }
}

// JSON.stringify == converte um obj em JSON
console.log(JSON.stringify(obj))


// JSON.parse == converte um JSON em obj
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))