var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");

var personagem = {
    alegre: {img: "img/alegre.png", msg: ", seja bem-vindo!", animacao: "alegre"},  // Animação alegre
    assustado: {img: "img/assustado.png", msg: "O que você quer?", animacao: ""},  // Nenhuma animação
    nervoso: {img: "img/nervoso.png", msg: "Não me faça perder o meu tempo!!!", animacao: "nervoso"},  // Animação nervosa
    pensativo: {img: "img/pensativo.png", msg: "zzzzzzz!", animacao: ""}  // Nenhuma animação
};

function changeBoy(personagem) {
    boy.src = personagem.img;
    textBoy.innerHTML = personagem.msg;

 
    if (personagem.animacao) {
        boy.classList.add(personagem.animacao);   
    } else {
         
        boy.classList.remove("nervoso", "alegre");
    }
}

boy.addEventListener("mouseenter", function () {
    changeBoy(personagem.assustado);
});

boy.addEventListener("mouseout", function () {
    changeBoy(personagem.pensativo);
});

boy.addEventListener("click", function () {
    var nome = prompt("Qual é o seu nome?");
    if (!nome) {
        changeBoy(personagem.nervoso);  
    } else {
        personagem.alegre.msg = nome + personagem.alegre.msg;
        changeBoy(personagem.alegre); 
    }
});
