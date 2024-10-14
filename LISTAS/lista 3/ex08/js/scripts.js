const choices = ["pedra", "papel", "tesoura"];
    
    const player1Choice = choices[Math.floor(Math.random() * choices.length)];
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    const images = {
        pedra: 'img/Pedra.png', 
        papel: 'img/Papel.png', 
        tesoura: 'img/Tesoura.png' 
    };

    document.getElementById('player1').src = images[player1Choice];
    document.getElementById('player2').src = images[player2Choice];

    let winner;
    if (player1Choice === player2Choice) {
        winner = "Empate!";
    } else if (
        (player1Choice === "pedra" && player2Choice === "tesoura") ||
        (player1Choice === "papel" && player2Choice === "pedra") ||
        (player1Choice === "tesoura" && player2Choice === "papel")
    ) {
        winner = "Jogador 1 Ganhou!";
    } else {
        winner = "Jogador 2 Ganhou!";
    }

    document.getElementById('result').innerText = winner;