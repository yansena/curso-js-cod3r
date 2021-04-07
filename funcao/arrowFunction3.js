let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global) //Dentro do escopo de uma funcao o this se refere ao escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj) //nesse caso por causa do bind o this vai se referir diretamente ao obj
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //nesse caso devido a arrow o this fica referido ao modulo que ele foi instaciado e nao ao escopo global
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)  //aqui a precedencia vigente e da arrow function pois mesmo usando o bind ela nao permite a mudaca de contexto do this, mantendo ele dentro do escopo inicial
comparaComThisArrow(module.exports)