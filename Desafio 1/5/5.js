/*5. Escreva um programa que conte o número de palavras em uma frase fornecida pelo usuário. A frase é: "What is Lorem Ipsum?"*/

let frase = 'What is Lorem Ipsum?';
let espaco = 0;

let numeroDePalavras = frase.trim().split(/\s+/).length;

alert(`O número de palavras é: ${numeroDePalavras}`);