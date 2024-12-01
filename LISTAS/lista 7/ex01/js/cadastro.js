document.getElementById('btnCadastrar').addEventListener('click', cadastrar);

function cadastrar(event) {
    event.preventDefault();  

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;  

    if (email === '' || senha === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    if (!validarSenha(senha)) {
        return;
    }

    const emailExistente = localStorage.getItem('email');
    if (email === emailExistente) {
        alert('Usuário já existente. Tente outro.');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'jogo.html';  
}

function validarSenha(senha) {
    if (senha.length < 5) {
        alert('A senha deve conter ao menos 5 caracteres.');
        return false;
    }
    return true;
}
