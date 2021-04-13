// const price = function(valor, tax){
//     return parseFloat(valor + tax) 
// }
// console.log(price(0.1, 0.2).toFixed(2))


function price2(value, fee){
    let calc = value + fee ;
    
    console.log("R$" + calc.toFixed(2).replace('.', ',') )
}

price2(0.1, 0.2)