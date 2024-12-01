document.getElementById('btnEntrar').addEventListener('click', login);

function login(event) {
    event.preventDefault();  

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value; 

    if (email === '' || senha === '') {
        alert('Por favor, preencha ambos os campos.');
        return;
    }

    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');

    if (email !== emailSalvo) {  
        alert('Usuário inexistente. Tente outro usuário.'); 
        return;
    }

    if (senha !== senhaSalva) {  
        alert('Usuário existente, porém senha inválida.'); 
        return;
    }

    alert('Bem-vindo de volta, jogador!');
    window.location.href = 'jogo.html';
}
