document.addEventListener("DOMContentLoaded", () => {
    const dificuldadeSelect = document.getElementById("dificuldade");
    const tempoDisplay = document.getElementById("tempo");
    const iniciarBtn = document.querySelector(".right a:nth-child(1)");
    const pausarBtn = document.querySelector(".right a:nth-child(2)");
    const pararBtn = document.querySelector(".right a:nth-child(3)"); 
    const numeroElemento = document.querySelector(".numero");
    const acertosDisplay = document.querySelector(".acertos span");
    const errosDisplay = document.querySelector(".erros span");
    const sorteadosDisplay = document.querySelector(".sorteados span");

    let intervalo = null;
    let tempoRestante = 0;
    let acertos = 0;
    let erros = 0;
    let paresSorteados = 0;
    let totalClicados = 0;

    const temposPorDificuldade = {
        selecione: 0,
        facil: 120, 
        medio: 90,  
        dificil: 60 
    };

    dificuldadeSelect.addEventListener("change", () => {
        tempoRestante = temposPorDificuldade[dificuldadeSelect.value] || 0;
        atualizarTempo();
    });

    function atualizarTempo() {
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        tempoDisplay.textContent = `${minutos}:${segundos.toString().padStart(2, "0")}`;
    }

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    iniciarBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (dificuldadeSelect.value === "selecione") {
            alert("Selecione um nível de dificuldade para iniciar.");
            return;
        }

        resetarJogo();
        iniciarTemporizador();
    });

    function iniciarTemporizador() {
        intervalo = setInterval(() => {
            if (tempoRestante > 0) {
                tempoRestante--;
                atualizarTempo();

                let novoNumero = gerarNumero();
                numeroElemento.textContent = novoNumero;
                numeroElemento.style.color = "black"; 

                if (novoNumero % 2 === 0) {
                    paresSorteados++;
                    sorteadosDisplay.textContent = paresSorteados;
                }
            } else {
                pararJogo();
            }
        }, 1000);
    }

    pausarBtn.addEventListener("click", (event) => {
        event.preventDefault();
        clearInterval(intervalo);
    });

    pararBtn.addEventListener("click", (event) => {
        event.preventDefault();
        pararJogo();
    });

    function pararJogo() {
        clearInterval(intervalo);
        alert("O jogo foi encerrado.");
        resetarJogo();
    }

    function resetarJogo() {
        clearInterval(intervalo);

        tempoRestante = temposPorDificuldade[dificuldadeSelect.value] || 0;
        acertos = 0;
        erros = 0;
        paresSorteados = 0;
        totalClicados = 0;

        atualizarTempo();
        numeroElemento.textContent = "-";
        acertosDisplay.textContent = "0 (0%)";
        errosDisplay.textContent = "0";
        sorteadosDisplay.textContent = "0";
    }

    numeroElemento.addEventListener("click", () => {
        const numeroAtual = parseInt(numeroElemento.textContent);

        if (!isNaN(numeroAtual)) {
            totalClicados++;

            if (numeroAtual % 2 === 0) {
                acertos++;
                numeroElemento.style.color = "green";
            } else {
                erros++;
                numeroElemento.style.color = "red";
            }

            acertosDisplay.textContent = `${acertos} (${calcularPorcentagem(acertos, totalClicados)}%)`;
            errosDisplay.textContent = erros;
        }
    });

    function calcularPorcentagem(acertos, total) {
        return total === 0 ? 0 : ((acertos / total) * 100).toFixed(2);
    }
});
