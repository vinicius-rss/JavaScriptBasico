document.addEventListener("DOMContentLoaded", function() {
    
    var dificuldadeSelect = document.getElementById("dificuldade");
    var tempoDisplay = document.getElementById("tempo");
    var iniciarBtn = document.getElementById("iniciar");
    var pausarBtn = document.getElementById("pausar");
    var pararBtn = document.getElementById("parar");
    var numeroElemento = document.querySelector(".numero");
    var acertosDisplay = document.querySelector(".acertos span");
    var parenteDisplay = document.querySelector(".parente");
    var errosDisplay = document.querySelector(".erros span");
    var sorteadosDisplay = document.querySelector(".sorteados span");
    var audioFundo = document.getElementById("background-music");

    var tempoRestante = 0;
    var acertos = 0;
    var erros = 0;
    var totalClicados = 0;
    var intervalo;
    var jogoIniciado = false;
    var sorteioIntervalo;

    var temposPorDificuldade = {
        selecione: 0,
        facil: 120,
        medio: 90,
        dificil: 60
    };

    dificuldadeSelect.addEventListener("change", function() {
        tempoRestante = temposPorDificuldade[dificuldadeSelect.value] || 0;
        atualizarTempo();
    });

    function atualizarTempo() {
        var minutos = Math.floor(tempoRestante / 60);
        var segundos = tempoRestante % 60;
        tempoDisplay.textContent = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
    }

    function iniciarCronometro() {
        if (intervalo) return;
        intervalo = setInterval(function() {
            if (tempoRestante > 0) {
                tempoRestante--;
                atualizarTempo();
            } else {
                clearInterval(intervalo);
                intervalo = null;
            }
        }, 1000);
    }

    function pausarCronometro() {
        clearInterval(intervalo);
        intervalo = null;
    }

    function pararCronometro() {
        clearInterval(intervalo);
        intervalo = null;
        tempoRestante = temposPorDificuldade[dificuldadeSelect.value] || 0;
        atualizarTempo();
        jogoIniciado = false;
        numeroElemento.textContent = "-";
    }

    iniciarBtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (dificuldadeSelect.value === "selecione") return;
        jogoIniciado = true;
        iniciarCronometro();
        iniciarSorteioNumero();
        audioFundo.play();
    });

    pausarBtn.addEventListener("click", function(e) {
        e.preventDefault();
        pausarCronometro();
        pararSorteioNumero();
        audioFundo.pause();
    });

    pararBtn.addEventListener("click", function(e) {
        e.preventDefault();
        pararCronometro();
        pararSorteioNumero();
        audioFundo.pause();
    });

    function gerarNumero() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function atualizarNumero() {
        if (jogoIniciado) {
            numeroElemento.textContent = gerarNumero();
            numeroElemento.style.color = "black";
        }
    }

    function iniciarSorteioNumero() {
        if (sorteioIntervalo) return;
        sorteioIntervalo = setInterval(function() {
            if (jogoIniciado) {
                atualizarNumero();
            }
        }, 1000);
    }

    function pararSorteioNumero() {
        clearInterval(sorteioIntervalo);
        sorteioIntervalo = null;
    }

    numeroElemento.addEventListener("click", function() {
        if (!jogoIniciado) return;

        var numeroAtual = parseInt(numeroElemento.textContent);
        if (isNaN(numeroAtual)) return;

        totalClicados++;
        if (numeroAtual % 2 === 0) {
            acertos++;
            numeroElemento.style.color = "green";
        } else {
            erros++;
            numeroElemento.style.color = "red";
        }

        atualizarEstatisticas();
        
        pararSorteioNumero();
        
        setTimeout(function() {
            atualizarNumero();
            iniciarSorteioNumero();
        }, 200);
    });

    function atualizarEstatisticas() {
        var porcentagem = totalClicados > 0 ? ((acertos / totalClicados) * 100).toFixed(1) : 0;
        acertosDisplay.innerHTML = acertos + " (<span class='parente'>" + porcentagem + "%</span>)";
        errosDisplay.textContent = erros;
    }
    document.getElementById("login").addEventListener("click", function () {
        let usuarioDigitado = document.getElementById("nome").value;
        let senhaDigitada = document.getElementById("senha").value;

        let usuarioArmazenado = localStorage.getItem("usuario");
        let senhaArmazenada = localStorage.getItem("senha");

        if (!usuarioArmazenado || !senhaArmazenada) {
            alert("Usuário não encontrado. Cadastre-se primeiro.");
            window.location.href = "cadastro.html";  
            return;
        }

        if (usuarioDigitado === usuarioArmazenado && senhaDigitada === senhaArmazenada) {
            alert("Login bem-sucedido!");
            document.getElementById("tela-login").style.display = "none";  
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
    document.getElementById("fechar").addEventListener("click", function(e) {
        e.preventDefault();  
        document.getElementById("tela-login").style.display = "block";   
        document.querySelector("header").style.display = "none";  
        document.querySelector("main").style.display = "none";   
        document.querySelector("footer").style.display = "none";  
        pararCronometro();   
        pararSorteioNumero();   
    });
});
