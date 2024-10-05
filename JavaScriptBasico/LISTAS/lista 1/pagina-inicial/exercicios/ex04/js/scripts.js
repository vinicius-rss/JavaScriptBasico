const nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
const nota2 = parseFloat(prompt("Digite a nota do 2º bimestre"));

const soma = nota1 + nota2;
const pontosRestantes = 60 - soma;

if (soma >= 60) 
    alert("Você foi aprovado, parabéns!")
else 
    
    alert(`Você foi reprovado, faltaram ${pontosRestantes} pontos para sua aprovação`)