document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("cadastrar").addEventListener("click", function () {
        let usuario = document.getElementById("usuario").value;
        let senha = document.getElementById("senha").value;
        let confirmarSenha = document.getElementById("confirmarSenha").value;

        if (!usuario || !senha || !confirmarSenha) {
            alert("Preencha todos os campos abaixo!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
        alert("Cadastro realizado com sucesso!");
    });
});
