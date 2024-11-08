let nomeCompleto = prompt("Qual seu nome completo?");
let nomeArray = nomeCompleto.trim().split(" ");

let primeiroNome = nomeArray[0].toUpperCase();
let nomeRestante = nomeArray.slice(1).join(" ").toLowerCase();

let nomeFormatado = primeiroNome + " " + nomeRestante;


alert(nomeFormatado);