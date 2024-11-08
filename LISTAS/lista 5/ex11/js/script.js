let texto = prompt("Informe um texto:");

let palavra1 = prompt("Informe a primeira palavra:");
let palavra2 = prompt("Informe a segunda palavra:");

let textoAlterado = texto.replace(new RegExp(palavra1, 'g'), palavra2);

alert("Mensagem final:\n" + textoAlterado);
