var obj = {
    nome: "Átila",
    idade: 36,
    profissao: "QA",
    estarTrabalhando: true
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome + ".");

obj.nome = "Matheus"; //Alterando uma propriedade do objeto

console.log(obj.nome);
console.log(obj);

obj.graduacao = true; //Criando uma nova propriedade no objeto

console.log(obj);