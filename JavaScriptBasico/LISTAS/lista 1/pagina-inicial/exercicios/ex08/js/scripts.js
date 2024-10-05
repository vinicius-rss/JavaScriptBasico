nome = prompt("Digite seu nome completo:");

let letrasMaiusculas = "";
for (let i = 0; i < nome.length; i++) {
    if (nome[i] === nome[i].toUpperCase() && nome[i] !== nome[i].toLowerCase()) {
        letrasMaiusculas += nome[i];
    }
}

document.getElementById("resultado").innerHTML = `<h2>${letrasMaiusculas}</h2>`;