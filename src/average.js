/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// arredondar valores (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

const average = (array) => {
// add your implementation here
let soma = 0;
if (array.length === 0) {
return undefined;
}
for (let index = 0; index < array.length; index += 1) {
  if (typeof array[index] !== 'number') {
  return undefined;
  }
  soma += array[index];
}
return Math.round(soma / array.length);
};

// usando 'for of'  na linha 23 (pra acostumar né)
// for (const number of array) {
//   if (typeof number !== 'number') {
//     return undefined;
//   }
//   soma += number;

module.exports = average;
