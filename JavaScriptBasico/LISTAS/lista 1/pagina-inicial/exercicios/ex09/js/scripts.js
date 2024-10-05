let expressao = prompt("Digite uma expressão matemática para obter o resultado:");

try {
    let resultado = eval(expressao);
    alert(`O resultado da expressão é: ${resultado}`);
} catch (error) {
    alert("Expressão inválida.")
}