var isDivisable = function (numerator, denominator) {
  return numerator % denominator === 0;
}

console.log("6 and 3 is true: ", isDivisable(6,3));
console.log("6 and 5 is false: ", isDivisable(6,5));
