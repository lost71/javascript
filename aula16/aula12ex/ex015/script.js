function verificar() {
    // Exibe um alerta indicando que a função foi chamada
    window.alert('FUNCIONOU!');

    // Obtém o ano atual
    var data = new Date(); // Corrigido: "Date" deve começar com letra maiúscula
    var ano = data.getFullYear(); // Corrigido: "getFullYear()" com "getFullYear" maiúsculo

    // Obtém o valor do ano de nascimento do input
    var fano = document.getElementById('txtano').value; // Corrigido: ".value" para obter o valor do input

    // Seleciona a div onde o resultado será exibido
    var res = document.querySelector('div#res');

    // Verifica se o campo de ano está vazio ou se o valor é maior que o ano atual
    if (fano.length == 0 || fano > ano) { // Corrigido: "lenght" para "length", "getfullyear" para "getFullYear", adicionado ponto e vírgula no final
        // Exibe um alerta indicando que houve um erro nos dados
        window.alert('ERRO: Verifique os dados e tente novamente.');
    } else {
        // Se tudo estiver correto, exibe um alerta indicando que está tudo OK
        //window.alert('Tudo OK!');
    }
}
