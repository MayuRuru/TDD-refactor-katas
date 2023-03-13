export default () => {
  const numbers = [];

  for (let value = 1; value <= 100; value++) {
    numbers.push(transform(value));
  }

  return numbers;
};

const multipleOfThree = multipleOf(3);
const multipleOfFive = multipleOf(5);
const containsFive = containsDigit("5");
const containsThree = containsDigit("3");

function transform(value) {
  if (isFizzbuzz(value)) {
    return "Fizzbuzz";
  }

  if (isFizz(value)) {
    return "Fizz";
  }

  if (isBuzz(value)) {
    return "Buzz";
  }

  return value;
}

// extracted functions:

function isFizzbuzz(value) {
  /*  return (
    (multipleOfThree(n) && multipleOfFive(n)) ||
    (containsFive(n) && containsThree(n))
  ); */
  return isBuzz(value) && isFizz(value);
}

function isFizz(value) {
  return multipleOfThree(value) || containsThree(value);
}

function isBuzz(value) {
  return multipleOfFive(value) || containsFive(value);
}

/*  if (multipleOfFive(n) || value.toString().includes("5")) {
  return "Buzz";
} */

// helper functions:

function multipleOf(divisor) {
  return function (value) {
    return value % divisor == 0;
  };
}

// Functional programming: multipleOf(3)(15);

function containsDigit(digit) {
  return function (value) {
    return value.toString().includes(digit);
  };
}

/* function containsThreeDigit(value) {
  return value.toString().includes("5");
} */

/* function multipleOfThree(n) {
  return n == 3;
}

function multipleOfFive(n) {
  return n % 5 == 0;
} */
