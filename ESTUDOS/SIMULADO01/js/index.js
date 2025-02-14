const options = {
    1: "Curtir a natureza (cachoeira, etc)",
    2: "Passear no shopping"
};

// Pegando elementos
const inputNome = document.getElementById("name");
const inputIdade = document.getElementById("idade");
const datalist = document.getElementById("passatempos");
const inputPassatempo = document.getElementById("passatempo");
const btnCarros = document.getElementById("btnCarros");
const btnLimpar = document.getElementById("btnLimpar");
const formPerfil = document.getElementById("formPerfil");

// Definindo opções para a lista de passatempos
Object.values(options).forEach(option => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    datalist.appendChild(optionElement);
});

// Função para resetar os campos do formulário
function limparBtn() {
    formPerfil.reset();  
    localStorage.clear();  
}

btnLimpar.addEventListener('click', () => {
    limparBtn();
});
 
function validarForm(nome, idade, passatempo) {
    if (nome === "" || passatempo === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;  
    }

    if (isNaN(idade) || idade < 1 || idade > 130) {
        alert("Idade inválida! Deve ser um número entre 1 e 130.");
        return false;  
    }

    return true;  
}
 
btnCarros.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const idade = Number(inputIdade.value.trim());
    const passatempo = inputPassatempo.value.trim();

    
    if (!validarForm(nome, idade, passatempo)) {
        return;  
    }
 
    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("passatempo", passatempo);

    
    window.location.href = "aguarde.html";
});
