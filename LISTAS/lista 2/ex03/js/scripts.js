const codigos = ["P2", "AP", "POO1", "FBD", "JSB"];
const disciplinas = ["Projeto Sistema Web MVC e SQL", "Algoritmos e Programação", "Programação Orientada a Objetos 1", "Fundamentos de Banco de Dados", "JavaScript Básico"];

let conteudo = `<table class="tabela-centralizada" border="2" style="border-collapse: collapse;">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Disciplina</th>
                        </tr>
                    </thead>
                    <tbody>`;

for (let i in codigos) {
    conteudo += `<tr>
                    <td>${codigos[i]}</td>
                    <td>${disciplinas[i]}</td>
                </tr>`;
}

conteudo += `</tbody></table>`;

document.getElementById('disciplinas').innerHTML = conteudo;

