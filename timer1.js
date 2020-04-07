const args = process.argv.slice(2);

const timer = function(input) {
  if (input.length === 0) {
    return;
  }
  let filteredInput = input.filter(num => num > 0); //returns new array that filters out NaN and negative numbers

  for (let item of filteredInput) {
    setTimeout(() => process.stdout.write('\x07'), item * 1000);
  }
}

timer(args);