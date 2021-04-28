// Array sao valores por referencia 

const nomes = ['Eduardo', 'Maria', 'Joana'];
//const novo =  nomes;

const novo =  [...nomes];  
// " [...] " <- spread operator serve para pegar os valores de um array e passar para outra variavel copiando 
// e criando uma nova referencia, sendo assim agora novo e nomes sao arrays distintos o que e modificado
// em um nao altera o outro

//nomes[2] =  'Joao'    dessa forma passamos um novo valor pra casa 2 do array
//delete nomes[2];      pode ser usado pra apagar valores do array, mas nao indicado por nao apaga o indice

console.log(nomes.length) // length usado para retornar o tamanho do array

novo.pop(); //remover o ultimo item do array
const removido = nomes.pop(); // quando atribuido a uma variavel pop retorna o valor que foi removido do array
console.log(nomes, removido)

const removido2 =  nomes.shift(); // similar ao pop mas nesse caso removo o indice 0 do array, movendo todos os outros valores para tras e
// tb pode salvar o valor excluido em uma variavel
console.log(nomes, removido2)

nomes.push('Kayo');  // adiciona novos itens ao final do array
nomes.push('Lucas');
console.log(nomes)

nomes.unshift('Gabriel');  // adiciona novos itens ao inicio do array movendo todos os itens anteriores pra frente, nao indicado por pode 
// gerar lentidao qnd usados em grandes arrays
nomes.unshift('Maria');
console.log(nomes)

//const novo2 = nomes.slice(1, 3)  tem como recortar itens do array pelo indice, porem qnd atribuido a uma variavel, nao modifica o 
// array original

const nome ="Flora Sousa de Sena";
const nome2 = nome.split(' ') // converte string em array, porem precisa de algo entre os itens para que o array seja montado
console.log(nome2)

const nome_array = [ 'Flora', 'Sousa', 'de', 'Sena' ];
const nome_string = nome_array.join(' '); //joint junta todos os valores de um array em uma string, passando como  paramentro o que vai 
// ser utlizado pra unir a string, qnd nao passado o padrao e ,
console.log(nome_string)






