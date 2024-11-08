let texto = prompt("Digite um texto para verificar se é um palíndromo:");

let textoLimpo = texto.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
let textoInvertido = textoLimpo.split('').reverse().join('');

if (textoLimpo === textoInvertido) {
    alert("O texto é um palíndromo!");
} else {
    alert("O texto não é um palíndromo.");
}
