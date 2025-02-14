function exibirMsg(msg) {
    alert(msg);
}

function exibirMsg2(msg) {
    alert(msg);
}

var btn = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn.onclick = function() {
    exibirMsg("Mensagem do botão 1");
};

btn2.onmouseover = function() {
    exibirMsg2("Mensagem do botão 2");
};
