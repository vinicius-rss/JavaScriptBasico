var quantidadePassageiros = parseInt(prompt("Quantos passageiros estão no ônibus?"));
var passageiros = [];
var totalPassageiros = 0;
var somaIdades = 0;

for (var i = 1; i <= quantidadePassageiros; i++) {
    var nome = prompt("Qual o nome do passageiro " + i + "?");
    var idade = parseInt(prompt("Qual a idade do passageiro " + i + "?"));
    passageiros.push({ nome: nome, idade: idade});
    somaIdades += idade;
}

var idadeMedia = somaIdades / quantidadePassageiros;

var sorteioVencedor = Math.floor(Math.random() * quantidadePassageiros);
var vencedor = passageiros[sorteioVencedor].nome;

alert("O vencedor(a) foi: " + vencedor);


