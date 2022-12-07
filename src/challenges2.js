// Desafio 11
const checkRepetitions = (array) => {
  let boolReturn = false;
  array.forEach((i) => {
    let count = 0;
    array.forEach((j) => {
      if (j === i) count += 1;
    });
    if (count >= 3) boolReturn = true;
  });
  return boolReturn;
};

const iteratesOver = (array, start, end) => {
  let returnString = '';

  for (let index = start; index <= end; index += 1) {
    if (array[index] < 0 || array[index] > 9 || checkRepetitions(array)) {
      return true;
    }
    returnString += array[index];
  }
  return returnString;
};

const generatePhoneNumber = (phoneArray) => {
  let returnString = `(${phoneArray[0]}${phoneArray[1]}) `;
  let check = iteratesOver(phoneArray, 0, phoneArray.length - 1);

  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (check === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  returnString += iteratesOver(phoneArray, 2, 6);
  returnString += '-';
  returnString += iteratesOver(phoneArray, 7, phoneArray.length - 1);
  return returnString;
};

// Desafio 12
const checkFirstCondition = (a, b, c) => {
  const returnArray = [];

  returnArray.push((a < b + c) && (a > Math.abs(b - c)));
  returnArray.push((b < a + c) && (b > Math.abs(a - c)));
  returnArray.push((c < a + b) && (c > Math.abs(a - b)));
  return returnArray;
};

const triangleCheck = (lineA, lineB, lineC) => {
  const check = checkFirstCondition(lineA, lineB, lineC);

  if (check[0] && check[1] && check[2]) {
    return true;
  }
  return false;
};

// Desafio 13
const numbersInString = (str) => {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nAn = 'NaN';
  const stringNumbers = [];

  for (let word of str.split(' ')) {
    if (`${Number(word)}` !== nAn) {
      stringNumbers.push(Number(word));
    }
  }
  return stringNumbers;
};

const hydrate = (str) => {
  let cupsOfWater = 0;

  for (let value of numbersInString(str)) {
    cupsOfWater += value;
  }
  return cupsOfWater > 1 ? `${cupsOfWater} copos de água` : `${cupsOfWater} copo de água`;
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
