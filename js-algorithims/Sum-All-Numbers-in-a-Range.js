
function sumAll(arr) {
  var storage = [];
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = arr[0] + 1; i < arr[1]; i++) {
    arr.push(i);
  }
  var sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  return sum;
}
sumAll([1, 4]);
