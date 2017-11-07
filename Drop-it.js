
function dropElements(arr, func) {
  // Drop them elements.
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
