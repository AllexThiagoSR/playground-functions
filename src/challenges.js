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
const catAndMouse = (mouse, cat1, cat2) => {
  let returnString;
  cat1 -= mouse;
  cat2 -= mouse;
  if (cat1 < 0) {
    cat1 *= (-1);
  }
  if (cat2 < 0) {
    cat2 *= (-1);
  }
  if (cat1 > cat2) {
    returnString = 'cat2';
  } else if (cat1 === cat2) {
    returnString = 'os gatos trombam e o rato foge';
  } else {
    returnString = 'cat1';
  }
  return returnString;
};

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let returnArray = [];

  for (let num of arrayNumbers) {
    let div3 = num % 3;
    let div5 = num % 5;
    if (div3 === 0 && div5 === 0) {
      returnArray.push('fizzBuzz');
    } else if (div3 === 0) {
      returnArray.push('fizz');
    } else if (div5 === 0) {
      returnArray.push('buzz');
    } else {
      returnArray.push('bug!');
    }
  }

  return returnArray;
}

// Desafio 9
const encode = (phrase) => {
  let encoder = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  for (let index = 0; index < phrase.length; index += 1) {
    for (let key in encoder) {
      if (phrase[index] === key) {
        phrase = phrase.replace(phrase[index], encoder[key]);
        break;
      }
    }
  }
  return phrase;
};

const decode = (phrase) => {
  let decoder = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  for (let index = 0; index < phrase.length; index += 1) {
    for (let key in decoder) {
      if (key === phrase[index]) {
        phrase = phrase.replace(phrase[index], decoder[key]);
      }
    }
  }
  return phrase;
};

// Desafio 10
const techList = (arrayTech, name) => {
  const returnArray = [];
  arrayTech = arrayTech.sort();

  if (arrayTech === undefined || arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let techStr of arrayTech) {
    returnArray.push({ tech: techStr, name });
  }
  return returnArray;
};

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
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
