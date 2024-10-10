var quantidadeNro = [];


while (quantidadeNro.length < 6) {
    var numerosMega = Math.floor(Math.random() * 60) + 1;
    quantidadeNro.push(numerosMega);
}


document.write(quantidadeNro.join(", "))