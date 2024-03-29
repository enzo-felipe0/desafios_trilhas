/*10. Desenvolver um programa para contar o número de letras maiúsculas da string abaixo: “LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY”*/

let frase = 'LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY';
let letrasMaiusculas = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == frase[i].toUpperCase() && frase[i].match(/[A-Z]/i)) {
        letrasMaiusculas++;
    }
}

alert(`A quantidade de letras maiúsculas é: ${letrasMaiusculas}`);