function primeiraFuncao() {
    console.log("Hello world das funções.");
} 

primeiraFuncao(); //chamando a função

function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Matheus");
dizerNome("Átila");

var nomeBancoDeDados = "João";

dizerNome(nomeBancoDeDados);

function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);

console.log(somaUm);

var somaDois = soma(5, 5);

console.log(somaDois);

console.log(soma(4, 5));