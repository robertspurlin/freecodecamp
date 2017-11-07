
function largestOfFour(arr) {
  // You can do this!
  var answer = [];
  for (var i = 0; i <= (arr.length - 1); i++) {
    arr[i].sort(function num (a,b) {return b - a;});
    answer.push(arr[i][0]);
  }
  return answer;
} 
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
