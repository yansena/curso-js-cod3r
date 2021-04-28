const nomes = [ 'Maria', 'Gabriel', 'Marta', 'Kayo', 'Lucas' ];

//nomes.splice(indice, delete, elem1, elem2, elem3);\

const removidos = nomes.splice(3, 0, 'Luiz');


console.log(nomes, removidos)