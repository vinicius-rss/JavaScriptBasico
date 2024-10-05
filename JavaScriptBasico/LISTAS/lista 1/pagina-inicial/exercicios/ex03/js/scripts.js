const nome = prompt("Digite seu nome completo:");
const idade = parseInt(prompt("Digite sua idade:"));
const anosRestantes = 18 - idade;

if (idade >= 18)
    alert(`${nome}, você já possui idade suficiente para tirar a CNH.`);
else
    alert(`${nome}, você não possui idade suficiente para tirar a CNH, ainda resta(m) ${anosRestantes} ano(s)`);
