function exibirNumerosAleatorios() {
    
    let numeros = '';


    for (i = 0; i < 4; i++) {
        const gerarNumerosAleatorios = Math.floor(Math.random() * 10);
        numeros += gerarNumerosAleatorios;
    }
    return numeros;
}

alert(exibirNumerosAleatorios());