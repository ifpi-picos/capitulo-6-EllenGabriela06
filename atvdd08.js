function testeBloco() {
    if (true) {
        let dentroDoIf = "Estou dentro do bloco!";
        console.log(dentroDoIf); // Roda Normal
    }
    console.log(dentroDoIf); // Dá ERRO! Pois não existe fora do bloco
}

testeBloco();
