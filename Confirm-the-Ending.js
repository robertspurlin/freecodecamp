
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var answer = str.substring(str.length - target.length);
  if (answer == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("He has to give me a new name", "name");
