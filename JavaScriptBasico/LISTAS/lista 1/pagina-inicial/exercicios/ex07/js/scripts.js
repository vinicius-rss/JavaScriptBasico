function solicitarValorRGB(cor) {
    let valor;
    do {
        valor = prompt(`Digite o valor para ${cor} (Deve estar no intervalo de 0 a 255):`);
        valor = parseInt(valor);
    } while (isNaN(valor) || valor < 0 || valor > 255);
    return valor;
}

const r = solicitarValorRGB("Vermelho (R)");
const g = solicitarValorRGB("Verde (G)");
const b = solicitarValorRGB("Azul (B)");

document.body.innerHTML = `<h1 style="color: rgb(${r} ${g} ${b});">Fundamentos de Web Design II</h1>`