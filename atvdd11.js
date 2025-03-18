const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

while (tentativas > 0) {
    let palpite = parseInt(prompt("Tente adivinhar o número (1-100):"));
    
    if (palpite === numeroSecreto) {
        console.log("Parabéns! Você acertou!");
        break;
    } else if (palpite < numeroSecreto) {
        console.log("O número é maior!");
    } else {
        console.log("O número é menor!");
    }
    tentativas--;
}

if (tentativas === 0) console.log("Acabaram as tentativas! O número era:", numeroSecreto);
