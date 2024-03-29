/*4. Em uma pequena vila, o fazendeiro precisa separar os números primos para determinar quantos novos campos plantar. Ele pede sua ajuda para identificar esses números criando um algoritmos. Os números são: 23, 16, 11, 8, 19, 14, 5, 21.*/

let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function ePrimo(numero) {
    if (numero <= 1) return false; // números menores que 2 não são primos
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

let numerosPrimos = numeros.filter(ePrimo);

alert(`Números primos encontrados:, ${numerosPrimos}`);