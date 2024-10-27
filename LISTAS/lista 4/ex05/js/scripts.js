function exibirMinusculas() {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let letrasAleatorias = '';


    for (i = 0; i < 4; i++) {
        const gerarAleatoria = Math.floor(Math.random() * letrasMaiusculas.length);
        letrasAleatorias += letrasMaiusculas[gerarAleatoria];
    }
    console.log(letrasAleatorias);
}

exibirMinusculas();