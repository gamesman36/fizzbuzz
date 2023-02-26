let output;

function fizzBuzz(num, divisor, fizz) {
    if (num % divisor == 0) {
        output += fizz;
    }
}

for (let i = 1; i <= 100; i++) {
    output = "";

    fizzBuzz(i, 3, "Fizz");
    fizzBuzz(i, 5, "Buzz");

    output == "" ? console.log(i) : console.log(output);
}