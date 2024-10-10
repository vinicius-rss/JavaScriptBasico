var nroAleatorio = Math.floor(Math.random() * 6);

var imagens = [
    "img/DADO 1.png",
    "img/DADO 2.png",
    "img/DADO 3.png",
    "img/DADO 4.png",
    "img/DADO 5.png",
    "img/DADO 6.png"
];

var img = document.createElement("img");

img.src = imagens[nroAleatorio];
img.alt = "Dado " + (nroAleatorio + 1);
img.width = 100;
img.height = 100;

document.body.appendChild(img);