// Desafio 1
const compareTrue = (bool1, bool2) => (bool1 && bool2);

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (phrase) => phrase.split(' ');

// Desafio 4
const concatName = (stringsArray) => `${stringsArray[stringsArray.length - 1]}, ${stringsArray[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

// Desafio 6
const biggestNumber = (numbersArray) => {
  let biggest;

  for (let index in numbersArray) {
    if (Number(index) === 0 || numbersArray[index] > biggest) {
      biggest = numbersArray[index];
    }
  }
  return biggest;
};

const highestCount = (numbersArray) => {
  let biggest = biggestNumber(numbersArray);
  let count = 0;

  for (let num of numbersArray) {
    count += num === biggest ? 1 : 0;
  }

  return count;
};

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

// Teste
console.log(highestCount([0, 0, 0]));
