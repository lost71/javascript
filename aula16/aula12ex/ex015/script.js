function verificar() {
    // Exibe um alerta indicando que a função foi chamada
    window.alert('FUNCIONOU!');

    // Obtém o ano atual
    var data = new Date(); 
    var ano = data.getFullYear(); 

    // Obtém o valor do ano de nascimento do input
    var fano = document.getElementById('txtano').value; 

    // Seleciona a div onde o resultado será exibido
    var res = document.querySelector('div#res');

    // Verifica se o campo de ano está vazio ou se o valor é maior que o ano atual
    if (fano.length == 0 || fano > ano) { 
        // Exibe um alerta indicando que houve um erro nos dados
        window.alert('ERRO: Verifique os dados e tente novamente.');
    } else {
        // Se tudo estiver correto
        var fsex = document.getElementsByName('radsex'); 

        var idade = ano - parseInt(fano); 

        var img = document.createElement('img'); 
        img.setAttribute('id', 'foto'); 

        var genero = '';

        // Verifica o gênero selecionado
        if (fsex[0].checked) { // Se o primeiro botão de rádio (Homem) estiver selecionado
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-m.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png');
            } else {
                img.setAttribute('src', 'idoso-m.png');
            }
        } else if (fsex[1].checked) { // Se o segundo botão de rádio (Mulher) estiver selecionado
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'criança-f.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.png');
            } else {
                img.setAttribute('src', 'idosa-f.png');
            }
        }

        // Exibe o resultado na div
        res.innerHTML = 'Idade calculada: ' + idade + '<br>Gênero: ' + genero;

        // Adiciona a imagem à div
        res.appendChild(img);
    }
}
