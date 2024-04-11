document.addEventListener("DOMContentLoaded", function() {
    // Função para gerar a tabuada
    function gerarTabuada(numero) {
        var tabuada = "";
        for (var i = 1; i <= 10; i++) {
            tabuada += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
        return tabuada;
    }

    // Elemento onde a tabuada será exibida
    var tabuadaContainer = document.getElementById("tabuada-container");

    // Gerar a tabuada do número 7 (pode ser alterado para outro número)
    var tabuadaDoSete = gerarTabuada(7);

    // Exibir a tabuada no elemento HTML
    tabuadaContainer.innerHTML = "<h2>Tabuada do 7</h2>" + tabuadaDoSete;
});
