let x;
do {
    x = parseInt(prompt("Digite um valor inteiro maior do que zero:"));
} while (isNaN(x) || x <= 0);

let nome = prompt("Digite seu nome completo:");

let resultadoHtml = "";
for (let i = 0; i < x; i++) {
    resultadoHtml += `${nome}<br>`;
}

document.getElementById("resultado").innerHTML = resultadoHtml;