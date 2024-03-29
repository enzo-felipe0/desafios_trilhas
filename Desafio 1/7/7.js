/*7.Em uma loja de conveniência, um cliente comprou três itens e precisa calcular o total da compra. Os preços dos itens são R$ 2,50, R$ 3,75 e R$ 1,99. Crie um algoritmo que retorne o valor total.*/

let preco1 = 2.50;
let preco2 = 3.75;
let preco3 = 1.99;

let total = preco1 + preco2 + preco3;

alert(`O total da compra é: R$ ${total.toFixed(2)}`);