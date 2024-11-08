let textoQualquer = prompt("Digite um texto qualquer: ");
let letraTexto = prompt("Digite uma letra: ").toLowerCase();

let palavras = textoQualquer.trim().split(/\s+/);
let resultado = palavras.filter(palavra => palavra.toLowerCase().startsWith(letraTexto));

document.write(resultado.join(" "));
