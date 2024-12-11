function geraAleatoria() {
    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letraAleatoria = Math.floor(Math.random() * letrasMaiusculas.length);
    const geraAleatoria = letrasMaiusculas[letraAleatoria];
    return geraAleatoria;
}

alert(geraAleatoria());