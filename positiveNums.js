let numbers = [10, 23, 56, 78, 98, 93, 54, -67, 13, 27, 37];

let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number >= 0) {
    positiveNumbers.push(number);
    console.log(positiveNumbers);
  } else {
    break;
  }
}
