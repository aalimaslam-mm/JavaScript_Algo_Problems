function recursiveSum(...args) {
  // Base case: If there are no arguments, return 0.
  if (args.length === 0) {
    return 0;
  } else {
    // Recursive case: Add the first argument to the sum of the rest of the arguments.
    return args[0] + recursiveSum(...args.slice(1));
  }
}

let sum = recursiveSum(1,2,3,4,5);
console.log(recursiveSum);
