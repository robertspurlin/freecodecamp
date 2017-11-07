
function factorialize(num) {
  var number = 1;
  for (var i = 1; i <= num; i++) {
    number *= i;
  }
  return number;
}
factorialize(5);
