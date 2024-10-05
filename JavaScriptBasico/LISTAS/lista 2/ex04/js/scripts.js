var quantidadePassageiros = prompt("Quantos passageiros vão no ônibus?");
var passageiros = [];

for (var i = 1; i <= quantidadePassageiros; i++) {
    var sexo = prompt("Qual o sexo do passageiro " + i + "? (M ou H)");
    var nome = prompt("Qual o nome do passageiro " + i + "?");
    passageiros.push({ sexo: sexo, nome: nome });
}

var tabelaHTML = `
    <table>
        <tbody>
`;

var numHomens = 0;
var numMulheres = 0;
var homens = [];
var mulheres = [];

for (var j = 0; j < passageiros.length; j++) {
    if (passageiros[j].sexo === 'M') {
        mulheres.push(passageiros[j].nome);
        numMulheres++;
    } else if (passageiros[j].sexo === 'H') {
        homens.push(passageiros[j].nome);
        numHomens++;
    }
}

var maxLinhas = Math.max(numHomens, numMulheres);
for (var k = 0; k < maxLinhas; k++) {
    tabelaHTML += '<tr>';
    tabelaHTML += (k < numMulheres) ? `<td>${mulheres[k]}</td>` : '<td></td>';
    tabelaHTML += (k < numHomens) ? `<td>${homens[k]}</td>` : '<td></td>';
    tabelaHTML += '</tr>';
}

tabelaHTML += `
        </tbody>
    </table>
`;

document.getElementById('tabela').innerHTML = tabelaHTML;