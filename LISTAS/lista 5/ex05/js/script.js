let textoQualquer = prompt("Digite um texto qualquer: ");
let palavrasQuantidade = textoQualquer.trim().split(/\s+/);
let tamanhoTextoQualquer = palavrasQuantidade.length;

alert("esse texto contém " + (tamanhoTextoQualquer) + " palavras")