/*2. Tais está participando de um sorteio na Loteria e recebeu uma lista de números aleatórios para poder apostar. Os números foram: 15, 8, 90, 75, 102, 6 e 2. Por ser bastante cautelosa, ela gostaria de saber qual é o menor número e qual é o maior número. 

Ajude Tais e escreva um programa que faça a lógica de programação para organização dos números, receba os números da lista e imprima na tela o menor número digitado e o maior número digitado.*/

let maior = 0;
let menor = 1000;
let numero = 0;

for (let i = 0; i < 7; i++) {
    numero = prompt('Digite o número');
    numero = parseInt(numero);
    if (numero > maior) {
        maior = numero;
    }
    if (numero < menor) {
        menor = numero;
    }
}

alert(`O menor número é ${menor} e o maior número é ${maior}`);

