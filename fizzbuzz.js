// Function to fizzbuzz inner change
function fizzbuzz(number) {
  if (number === 0) {
    return 0;
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  }
  if (number === 3 || number % 3 === 0) {
    return "fizz";
  }
  if (number === 5 || number % 5 === 0) {
    return "buzz";
  }
  return number;
}

// Function to print the number in console
function print(number) {
  for (let i = 0; i <= number; i++) {
    // Please write < node fizzbuzz > in terminal to print
    console.log(`${i}. ${fizzbuzz(i)}`);
  }
}

print(18);

// To export the document to the test jest
module.exports = fizzbuzz;
