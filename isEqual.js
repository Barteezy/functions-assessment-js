var isEqual = function( x, y ) {
  return x === y;
}

console.log("1 and 2 should be   false:  ", isEqual(1,2));
console.log("2 and '2' should be false:  ", isEqual(2,'2'));
console.log("2 and 2 should be    true:  ", isEqual(2,2));
