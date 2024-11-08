let textoQualquer = prompt("Digite um texto qualquer: ");
let palavras = textoQualquer.trim().split(/\s+/);

let agrupado = {};

for (let palavra of palavras) {
    let letraInicial = palavra[0].toLowerCase();
    
    if (/^[a-zA-Z]$/.test(letraInicial)) {
        if (!agrupado[letraInicial]) {
            agrupado[letraInicial] = [];
        }
        agrupado[letraInicial].push(palavra);
    }
}

let resultado = '';

for (let letra of 'abcdefghijklmnopqrstuvwxyz') {
    if (agrupado[letra]) {
        resultado += `<h3>Palavras iniciadas com ${letra.toUpperCase()}:</h3><ul>`;
        for (let palavra of agrupado[letra]) {
            resultado += `<li>${palavra}</li>`;
        }
        resultado += `</ul>`;
    }
}

document.write(resultado);
