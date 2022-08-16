const soma = (a, b) => a + b
console.log(soma(2,5))

//Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1();
lexico2();

