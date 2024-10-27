function exibirLetrasNumeros() {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    let letrasAleatorias = '';
    const numeros = '0123456789';
    let numerosAleatorios = '';

    for (let i = 0; i < 4; i++) {
        const indexAleatorioLetras = Math.floor(Math.random() * letrasMinusculas.length);
        letrasAleatorias += letrasMinusculas[indexAleatorioLetras];
    }

    for (let i = 0; i < 4; i++) {
        const indexAleatorioNumeros = Math.floor(Math.random() * numeros.length);
        numerosAleatorios += numeros[indexAleatorioNumeros];
    }

    
    console.log(letrasAleatorias);
    console.log(numerosAleatorios);
}

exibirLetrasNumeros();