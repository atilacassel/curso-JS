var idade = 16;
var nome = "João";

if(nome == "João" && idade == 17) {
    console.log("João chegou.");
} else {
    console.log("João não chegou.");
}

if(1 == 1 && 3 > 2 && true) {
    console.log("Passou");
}

if((1 == 1 && 3 > 3) && true) {
    console.log("Passou");
} else if (nome === "João" && idade >= 14) {
    console.log("Aqui passa!");
}