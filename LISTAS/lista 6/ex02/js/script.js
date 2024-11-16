let votosRestantes = 5;
let votos = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

 
document.addEventListener("DOMContentLoaded", function() {
    const imagens = document.querySelectorAll(".candidato-box img");

    imagens.forEach(img => {
        img.addEventListener("click", function() {
            const candidatoId = parseInt(img.closest(".candidato-box").id.replace("candidato", ""));
            votar(candidatoId);
        });
    });
});

function votar(candidatoId) {
    if (votosRestantes > 0) {
        votos[candidatoId]++;
        votosRestantes--;
 
        document.querySelector(`#candidato${candidatoId} .nroVotos`).textContent = votos[candidatoId];
    }
 
    if (votosRestantes === 0) {
        exibirVencedor();
    }
}

function exibirVencedor() {
 
    let vencedor = Object.keys(votos).reduce((a, b) => votos[a] > votos[b] ? a : b);

    
    document.getElementById(`candidato${vencedor}`).classList.add("vencedor");
}
