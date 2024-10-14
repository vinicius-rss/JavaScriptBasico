const totalCartas = 40; 
    const jogadores = 4; 
    const cartasPorJogador = 3; 
    const cartasSorteadas = []; 
 
    function sortearCartas() {
        while (cartasSorteadas.length < jogadores * cartasPorJogador) {
            const carta = Math.floor(Math.random() * totalCartas) + 1; // Sorteia uma carta

            
            if (!cartasSorteadas.includes(carta)) {
                cartasSorteadas.push(carta);
            }
        }
    }

   
    function exibirCartas() {
        const playersDiv = document.getElementById('players');

        for (let i = 0; i < jogadores; i++) {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `<h2>Jogador ${i + 1}</h2>`;
            const cardsDiv = document.createElement('div');
            cardsDiv.className = 'cards';

            for (let j = 0; j < cartasPorJogador; j++) {
                const cartaIndex = i * cartasPorJogador + j;
                const img = document.createElement('img');
                img.src = `img/carta${cartasSorteadas[cartaIndex]}.png`; 
                img.alt = `Carta ${cartasSorteadas[cartaIndex]}`;
                cardsDiv.appendChild(img);
            }

            playerDiv.appendChild(cardsDiv);
            playersDiv.appendChild(playerDiv);
        }
    }

    sortearCartas(); 
    exibirCartas(); 
;