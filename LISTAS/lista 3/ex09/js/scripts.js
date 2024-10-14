const names = [];
const numPeople = parseInt(prompt("Digite o número de pessoas:"));

for (let i = 0; i < numPeople; i++) {
    const name = prompt(`Digite o nome da pessoa ${i + 1}:`);
    if (name) {
        names.push(name);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayResults(names) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '';
    names.forEach((name, index) => {
        resultContainer.innerHTML += `<div>${index + 1}º - ${name}</div>`;
        resultContainer.innerHTML += `<div class="separator"></div>`;
    });
}

displayResults(shuffleArray(names));