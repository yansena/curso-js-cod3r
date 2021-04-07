// Clouser e o escopo criado qnd a funcao e declara
// Esse escopo permite a funcao acessar e manipular variaveis externas a funcao

//Contexto lexico em acao!

const x = 'Global';

function fora() {
    const x ='Locall'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
