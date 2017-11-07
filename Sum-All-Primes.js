
function sumPrimes(num) {
  var test = [];
  var primes = [];
  for (var i = 2; i <= num; i++) {
    if (!test[i]) {
      primes.push(i);
      for (var j = i * 2; j <= num; j += i) {
        test[j] = true;
      }
    }
  }
  return primes.reduce(function(a,b) {
    return a + b;
  });
}

sumPrimes(10);
