function gerarTabela() {
    let numero = parseInt(document.getElementById("numero").value);
    
    if (numero >= 2) {
        let tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
        tabela.innerHTML = ""; 

        for (let i = 0; i <= numero; i++) {
            let linha = tabela.insertRow();

            let celulaDecimal = linha.insertCell();
            celulaDecimal.textContent = i;

            let celulaBinario = linha.insertCell();
            celulaBinario.textContent = i.toString(2);

            let celulaHexadecimal = linha.insertCell();
            celulaHexadecimal.textContent = i.toString(16).toUpperCase();
        }
    } else {
        alert("Por favor, insira um número maior ou igual a 2.");
    }
}
