const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

// const greaterNum = (num1, num2) => {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return null;
//   } else if (num1 === num2) {
//     return 'both integers are equal';
//   } else if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

const sumOfFourAndSix = () => {
  let total = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      total += i;
    }
  }

  return total;
};

const oddAndEvenToN = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
};

const sumOfNotDivisibleByTen = () => {
  let total = 0;

  for (let i = 0; i < 1000; i++) {
    if (i % 10 !== 0) {
      total += i;
    }
  }

  return total;
};

// TODO: Finish implementing this function
const greaterNum = (num1, num2, num3, num4) => {
  if (num1 > num2 || num1 > num3 || num1 > num4) {
    return num1;
  } else if (num2 > num3 || num2 > num4) {
    return num2;
  } else if (num3 > num4) {
    return num3;
  }

  return num4;
};

// ===== TESTS =====
// multiplesOfSixAndNine();
// console.log(greaterNum(10, 7)); //returns 10
// console.log(greaterNum(1.14, 1.14)); //returns "both integers are equal"
// console.log(greaterNum('21', 21)); //returns null
// console.log(greaterNum('21', '21')); //returns null
// console.log(sumOfFourAndSix());
// oddAndEvenToN(5);
// console.log(sumOfNotDivisibleByTen());
console.log(greaterNum(10, 7, 16, 80)); //returns 80
console.log(greaterNum(1.14, 1.14, 5, 7)); //returns "two integers are equal"
console.log(greaterNum(1.14, 1.14, 1.14, 7)); //returns "three integers are equal"
console.log(greaterNum('21', 21, 60, 3)); //returns null
