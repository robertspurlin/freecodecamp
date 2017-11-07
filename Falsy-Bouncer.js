
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function test(arg) {
    return Boolean(arg) !== false;
  }
  var answer = arr.filter(test);
  return answer;
}
bouncer([1, null, NaN, 2, undefined]);
