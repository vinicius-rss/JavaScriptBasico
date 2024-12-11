function exibeAleatoria() {
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const letraAleatoria = Math.floor(Math.random() * letrasMinusculas.length); 
    const gerarAleatoria = letrasMinusculas[letraAleatoria]; 
    return gerarAleatoria;  
}

alert(exibeAleatoria());  
