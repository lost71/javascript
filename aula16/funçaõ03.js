function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplos de uso:
console.log(fatorial(5)); // Saída: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(fatorial(0)); // Saída: 1 (Por definição, 0! é 1)
