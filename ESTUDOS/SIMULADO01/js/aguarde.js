let segundosRestantes = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

const segundosElement = document.getElementById("segundosRestantes");

const timer = setInterval(() => {
    segundosElement.textContent = segundosRestantes;
    segundosRestantes--;  
    if (segundosRestantes < 3) {
        segundosElement.classList.add("vermelho");
    }

    if (segundosRestantes < 0) {
        clearInterval(timer);  
        window.location.href = ("verVeiculo.html");
    }
}, 1000);  
