
function rot13(str) { // LBH QVQ VG!
  str = str.split("");
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str[i].length; j++) {
      if (str[i][j].charCodeAt() >= 65 && str[i][j].charCodeAt() <= 77) {
        decoded += (String.fromCharCode(str[i][j].charCodeAt() + 13));
      }
      else if (str[i][j].charCodeAt() >= 78 && str[i][j].charCodeAt() <= 90) {
        decoded += (String.fromCharCode(str[i][j].charCodeAt() - 13));
      }
      else {
        decoded += str[i][j];
      }
    }
  }
  return decoded;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
