console.log(soma(3, 4))

// function declaration -> 
// usando function declaration a funcao pode ser chamada mesmo antes de ser declarada no codigo pois o navegador carrega previamente todas elas
function soma(x, y) {
    return x + y
}

//function expression
// so pode ser chamada apos a declaracao da mesma
const sub = function(x, y) {
    return x - y;
}
// ->
console.log(sub(3,4))


//named function expression
// iguaL a function expression tb so pode ser chamada apos a declarao
const mult = function mult(x, y) {
    return x * y
}