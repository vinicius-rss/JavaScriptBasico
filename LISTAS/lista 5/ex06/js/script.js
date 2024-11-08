let textoQualquer = prompt("Digite um texto qualquer: ");
let palavras = textoQualquer.trim().split(/\s+/);


if (palavras.length > 0) {
    let primeiraPalavra = palavras[0];
    let ultimaPalavra = palavras[palavras.length - 1];

    let resultado = primeiraPalavra + " " + ultimaPalavra;

    document.write(resultado)
}




