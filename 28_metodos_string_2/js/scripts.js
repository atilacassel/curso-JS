// toLowerCase e toUpperCase
var frase = "Está é a frase que vamos manipular";

var fraseCaixaAlta = frase.toLocaleUpperCase();

console.log(fraseCaixaAlta);
console.log(frase.toLocaleLowerCase());

//trim
var nome = "         Matheus     ";
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split
console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";
console.log(tags.split(", "));

// lastIndexOf

var fraseDois = "Eu quero a última palavra teste da frase teste";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));