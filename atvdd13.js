const converterParaDolar = (reais) => {
    let taxa = 5;
    return reais / taxa;
}

let valorEmReais = parseFloat(prompt("Digite o valor em reais:"));
console.log("Valor em dólares: $" + converterParaDolar(valorEmReais).toFixed(2));
