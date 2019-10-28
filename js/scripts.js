numbers = [];
number = 0;
var n = 1;

while (n < 101) {
  numbers.push(n);
  n++;
}

console.log(numbers);

numbers.forEach(function(numba) {
  if ( (Number.isInteger(numba / 3)) && (Number.isInteger(numba / 5)) ) {
    console.log("fizz buzz", numba);
  }
    else if (Number.isInteger(numba / 3)) {
      console.log("fizz", numba);
    }
    else if (Number.isInteger(numba / 5)) {
      console.log("buzz", numba);
    }
    else {

    };
});
