const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : "Erro! Divisão por zero.";

console.log(somar(5, 3));
console.log(subtrair(5, 3));
console.log(multiplicar(5, 3));
console.log(dividir(5, 3));
