let nomeCompleto = prompt("Qual seu nome completo?");
let letrasMaiusculas = '';

for (let i = 0; i < nomeCompleto.length; i++) {
    let caractere = nomeCompleto[i];
    if (caractere === caractere.toUpperCase() && caractere !== ' ') {
        letrasMaiusculas += caractere;
    }
}

alert(letrasMaiusculas);