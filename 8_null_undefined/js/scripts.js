// Hoisting - içamento
console.log(nome); // Ele já inicializa a variável mas ela ainda não tem valor atribuido

var nome = null;
var sobrenome;

console.log(nome);
console.log(sobrenome);

nome = "Atila";
sobrenome = "Cassel";

console.log(nome);
console.log(sobrenome);