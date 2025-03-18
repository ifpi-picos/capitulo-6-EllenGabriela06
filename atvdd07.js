let global = "Variável global";

function testeEscopo() {
    let local = "Variável local";
    console.log(global);
    console.log(local);
}

testeEscopo();
console.log(global); // Roda normal
console.log(local);  //  Dá "ERRO!" pois o local não existe aqui
