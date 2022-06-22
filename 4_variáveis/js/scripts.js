var teste = 1;

var nome = "João";

console.log(teste);

teste = "Matheus"; //Não usar assim sem o 'var' pois pode sobrescrever variável global

console.log(teste);

console.log(nome);

var $nome = 'ADS'; //Somente '$'e '_' podem ser usados de caracteres especiais
var _nome = 'ADS';

console.log($nome);
console.log(_nome);

var nome5 = 'ADS3'; //Não aceita numero como primeiro caracter em nome de variável

console.log(nome5);

var meuPrimeiroNome = "Matheus"; //Quando for mais de uma palavra usar 'camelCase' para ser mais legivel

console.log(meuPrimeiroNome);

var meuNome; //Posso declarar valiável 'undefined'

console.log(meuNome);

meuNome = "Matheus"; //Depois setar um valor para ela

console.log(meuNome);