var numero = 5;

console.log(numero);
console.log(typeof numero); //typeof é usado para verificar o tipo da variável

var float = 5.32; 

console.log(float);
console.log(typeof float); //também vai ser considerado 'number' pois todo tipo de número é considerado number

var textoComNumero = '523';

console.log(textoComNumero);
console.log(typeof textoComNumero); //É considerado uma string e não number

console.log(NaN);
console.log(typeof NaN); //Também considerado number
console.log(typeof +Infinity); //Também considerado number
console.log(typeof -Infinity); //Também considerado number