// jshint esversion: 6
function pairwise(arr, arg) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == arg) {
        sum += i + j;
        arr[i] = arr[j] = NaN;
      }
    }
  }
  return sum;
}

pairwise([], 100);
