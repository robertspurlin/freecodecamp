
function repeatStringNumTimes(str, num) {
  // repeat after me
  var storage = str.split();
  var emptyString = "";
  if (num > 0) {
    for (var i = 1; i <= (num - 1); i++) {
      storage.push(str);
    }
    return storage.join('');
  }
  else {
    return emptyString;
  }
}
repeatStringNumTimes("abc", -2);
