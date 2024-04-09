function carregar() {
    var msg = window.document.getElementById('msg');
    var imagem = window.document.getElementById('imagem');
    var data = new Date();
    //var hora = data.getHours();
    var hora = 22
    msg.innerHTML = "Agora são " + hora + " horas.";

    var body = document.body;

    if (hora >= 0 && hora < 12) {
        // Manhã
        body.style.background = "linear-gradient(135deg, #B3E5FC, #FFC371)";
        header.style.color = "#FFF";
        section.style.background = "#FFCC80";
        footer.style.color = "#7986CB";
        imagem.src = 'manha.png';
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        body.style.background = "linear-gradient(135deg, #FFA07A, #FFD700)";
        header.style.color = "#FFF";
        section.style.background = "#FFD700";
        footer.style.color = "#8B4513";
        imagem.src = 'tarde.png';
    } else {
        // Noite
        body.style.background = "linear-gradient(135deg, #483D8B, #000080)";
        header.style.color = "#FFF";
        section.style.background = "#000080";
        footer.style.color = "#FFF";
        imagem.src = 'noite.png';
    }
}
