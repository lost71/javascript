function carregar() {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    if (hora >= 6 && hora < 12) {
        msg.innerHTML = 'Bom dia!';
        imagem.src = 'manha.png';
        imagem.alt = 'Manhã';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = 'Boa tarde!';
        imagem.src = 'tarde.png';
        imagem.alt = 'Tarde';
    } else {
        msg.innerHTML = 'Boa noite!';
        imagem.src = 'noite.png';
        imagem.alt = 'Noite';
    }
}
