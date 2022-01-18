/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

// const createStudent = (nome) => {
//   const estudante = {
//     name: nome,
//     feedback: () => 'Eita pessoa boa!',
//   };
//   return estudante;
// };

// module.exports = createStudent;

// vendo o vídeo do course (último exemplo) - https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-let-const-arrow-functions-e-template-literals/4411d706-403c-4d31-8b18-b491e9d22ea6/conteudos/065251d8-92dd-474d-bb5a-1a99eac853eb/parte-iii-arrow-functions/5538fcca-cb99-48ca-89e1-52fc94873784?use_case=side_bar 

const createStudent = (nome) => ({
    name: nome,
    feedback: () => 'Eita pessoa boa!',
  });
 
  module.exports = createStudent;
