// Desafio 11
const iteratesOver = (array, start, end, ) => {
  let returnString = '';

  for(let index = start; index <= end; index += 1){
    if(array[index] < 0 || array[index] > 9 || checkRepetitions(array)){
      return true;
    }
    returnString += array[index];
  }
  return returnString;
}

const checkRepetitions = (array) => {
  for (let i in array) {
    let count = 0;
    for (let j in array) {
      if(array[i] === array[j]){
        count += 1;
      }
    }
    if(count >= 3){
      return true;
    }
  }
  return false;
};

function generatePhoneNumber(phoneArray) {
  let returnString = `(${phoneArray[0]}${phoneArray[1]}) `;
  let check = iteratesOver(phoneArray, 0, phoneArray.length - 1);

  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (check === true){
    return 'não é possível gerar um número de telefone com esses valores';
  }
  returnString += iteratesOver(phoneArray, 2, 6);
  returnString += '-';
  returnString += iteratesOver(phoneArray, 7, phoneArray.length - 1);
  
  return returnString;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
