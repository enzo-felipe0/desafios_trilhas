/*11. Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.*/

dataNascimento = prompt('Digite a data de nascimento no formato yyyy-MM-dd');
const dataNasc = new Date(dataNascimento);

hoje = prompt('Digite a data atual no formato yyyy-MM-dd');
const dataAtual = new Date(hoje);

let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

const aniversarioEsteAno = new Date(dataAtual.getFullYear(), dataNasc.getMonth(), dataNasc.getDate());

if (aniversarioEsteAno > dataAtual) {
    idade--;
}

alert(`A idade é: ${idade}`);