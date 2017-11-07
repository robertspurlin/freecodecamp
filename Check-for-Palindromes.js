
function palindrome(str) {
  // Good luck!
  var storage = str.toLowerCase().replace(/[^a-z0-9]+/g, "");
  var reverse = storage.split('').reverse().join('');
  if (storage == reverse) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("p-o-t-a-t-o");
