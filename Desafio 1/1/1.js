/*1. Imagine que você está criando um sistema escolar para obter a média dos alunos da sala. Foram realizadas 3 avaliações com nota máxima de 10 pontos. Aline, tirou na primeira nota o total de 8 pontos, na segunda nota tirou 9 pontos e na terceira nota 7 pontos. 

Escreva um programa que receba as notas, faça o cálculo da média e imprima o resultado final da média.*/

let nota1 = parseFloat(prompt('Digite a primeira nota'));
let nota2 = parseFloat(prompt('Digite a segunda nota'));
let nota3 = parseFloat(prompt('Digite a terceira nota'));

let media = (nota1 + nota2 + nota3)/3;

alert(`A média é: ${media.toFixed(2)}`);