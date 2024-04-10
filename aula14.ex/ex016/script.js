function contar() {
    let inicio = document.getElementById('txtid').value;
    let fim = document.getElementById('txtf').value;
    let passo = document.getElementById('txtp').value;
    var res = document.getElementById('res');

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!';
        return;
    }

    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    if (passo <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    }

    if (inicio < fim) {
        // Contagem crescente
        for (let i = inicio; i <= fim; i += passo) {
            res.innerHTML += `${i} \u{1F449}`;
        }
    } else {
        // Contagem decrescente
        for (let i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `${i} \u{1F449}`;
        }
    }
    res.innerHTML += `\u{1F3C1}`;
}
