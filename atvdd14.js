const calcularIMC = (peso, altura) => {
    let imc = peso / (altura * altura);
    let classificacao = imc < 18.5 ? "Abaixo do peso" :
                        imc < 25 ? "Peso normal" :
                        imc < 30 ? "Sobrepeso" : "Obesidade";
    
    console.log("Seu IMC é:", imc.toFixed(2), "-", classificacao);
}

let peso = parseFloat(prompt("Digite seu peso (kg):"));
let altura = parseFloat(prompt("Digite sua altura (m):"));
calcularIMC(peso, altura);
