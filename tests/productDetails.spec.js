const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
   
    // ESCREVA SEUS TESTES ABAIXO:
    const result = productDetails('máscara', 'luvas');

    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    // https://www.w3schools.com/jsref/jsref_isarray.asp
    expect(Array.isArray(result)).toBeTruthy() //seja verdadeiro;

    // Teste se o array retornado pela função contém dois itens dentro.
    // https://jestjs.io/pt-BR/docs/expect#tohavelengthnumber
    expect(result).toHaveLength(2);
    
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // 
    result.forEach(element => {
      expect(typeof element).toBe('object');
    });
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(result[0] !== result[1]).toBeTruthy();

    // Teste se os dois productIds terminam com 123.
    // https://www.w3schools.com/jsref/jsref_endswith.asp
    result.forEach(element => {
      expect(element.details.productId.endsWith('123')).toBeTruthy();
    });

  });
});
