import fizzbuzz from "./fizzbuzz";

describe("Fizzbuzz", () => {
  let numbers;

  test("First element is a 1", () => {
    numbers = fizzbuzz();
    expect(numberFor(1)).toEqual(1);
  });

  test("Element 2 is 2", () => {
    numbers = fizzbuzz();
    expect(numberFor(2)).toBe(2);
  });

  describe("Multiples of three are Fizz", () => {
    test.each([[3], [6]])("%i", (value) => {
      numbers = fizzbuzz();
      expect(numberFor(value)).toBe("Fizz");
    });
  });

  test("Element 5 is Buzz", () => {
    numbers = fizzbuzz();
    expect(numberFor(5)).toBe("Buzz");
  });

  test("Element 13 is Fizz", () => {
    numbers = fizzbuzz();
    expect(numberFor(13)).toBe("Fizz");
  });

  test("Element 15 is FizzBuzz", () => {
    numbers = fizzbuzz();
    expect(numberFor(15)).toBe("Fizzbuzz");
  });

  test("element 51 is FizzBuzz", () => {
    numbers = fizzbuzz();
    expect(numberFor(51)).toBe("Fizzbuzz");
  });

  test("element 52 is Buzz", () => {
    numbers = fizzbuzz();
    expect(numberFor(52)).toBe("Buzz");
  });

  test("element 53 is FizzBuzz", () => {
    numbers = fizzbuzz();
    expect(numberFor(53)).toBe("Fizzbuzz");
  });

  test("it returns an array of 100 elements", () => {
    numbers = fizzbuzz();
    expect(numbers.length).toEqual(100);
  });

  // helper function:
  function numberFor(position) {
    return numbers[position - 1];
  }
});
