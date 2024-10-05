function exibirNomeCompleto() {

    let primeiroNome = prompt("Digite seu primeiro nome:");

    let sobrenome = prompt("Agora, digite seu sobrenome:")

    alert("Nome completo: " + primeiroNome + " " + sobrenome)
}

window.onload = function() {
    exibirNomeCompleto();
};