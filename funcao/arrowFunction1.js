let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olaa'
}

ola = () => {
    return 'Olaa'
}

ola = () => 'Olaa'
// ola = _ => 'Olaa' //existe paramm
console.log(ola())