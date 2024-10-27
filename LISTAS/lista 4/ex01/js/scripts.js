function exibeAleatoria() {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letraAleatoria = Math.floor(Math.random() * letrasMinusculas.length); 
    const gerarAleatoria = letrasMinusculas[letraAleatoria]; 
    console.log(gerarAleatoria); 
}

exibeAleatoria();