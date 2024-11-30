let contador = 0;

function atualizarResultado() {
    const resultado = document.getElementById('contador');
    resultado.innerHTML = `<strong> ${contador}</strong>`;

    if (contador % 2 === 0) {
        resultado.style.color = 'green';
    } else {
        resultado.style.color = 'red';
    }
}

function aumentar() {
    contador++;
    atualizarResultado();
}

function diminuir() {
    if (contador > 0) {
        contador--;
    }
    atualizarResultado();
}

function resetar() {
    contador = 0;
    atualizarResultado();
}
