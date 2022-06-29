var x = 1;

var y = 3; //variavel com escopo global

console.log(x, y);

function teste() {
    var z = 0; //variavel com escopo local

    console.log(z); 
}

teste();

function testando() {
    var z = 5; //variavel com escopo local

    console.log(z); 
}

testando();

if(true) {
    var p =1; //dentro de if a variável é global
}

console.log(p);