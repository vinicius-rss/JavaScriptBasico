function exibirMinusculas() {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    let letrasAleatorias = '';


    for (let i = 0; i < 4; i++) {
        const gerarAleatoria = Math.floor(Math.random() * letrasMinusculas.length);
        letrasAleatorias += letrasMinusculas[gerarAleatoria];
    }

    return letrasAleatorias;
}

alert(exibirMinusculas());