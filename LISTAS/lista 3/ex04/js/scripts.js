var N = parseInt(prompt("Digite um número:"));
var M = parseInt(prompt("Digite outro número:"));


if (N > M) {
    var temp = N;
    N = M;
    M = temp;
}



var aleatorioNumeros = Math.floor(Math.random() * (M - N + 1)) + N;

document.write(aleatorioNumeros);