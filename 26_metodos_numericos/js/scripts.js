// parseFloat 10.0
console.log(parseFloat('12.999')); //tranformou a string em float
console.log(Number.parseFloat('12.999'));

// parseInt
console.log(parseInt('10')); //transformou string em inteiro
console.log(Number.parseInt(16.96)); //transformou float em inteiro

// toFixed
console.log(23.132323.toFixed(1)); //limitou o numero de casas decimais

// isNaN
console.log(isNaN("teste")); //verificou que não é um numero
console.log(isNaN(14)); //verificou que é um numero

//MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE); //valor maximo que JS consegue trabalhar
console.log(Number.MIN_VALUE); //valor minimo que JS consegue trabalhar

console.log(2.7976931348623157e+308); //valor acima ou abaixo do que ele consegue exibe 'Infinity'