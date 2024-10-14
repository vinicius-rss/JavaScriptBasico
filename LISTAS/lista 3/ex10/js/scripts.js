const totalCartas = 27; 
    const cartaSorteada = Math.floor(Math.random() * totalCartas) + 1; 

    const cardImg = document.getElementById('card');
    cardImg.src = `img/carta${cartaSorteada}.png`;