
function pairElement(str) {
  var pairings = [["G","C"], ["C","G"], ["T","A"], ["A", "T"]];
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < pairings.length; j++) {
      if (str[i] == pairings[j][0]) {
        arr.push(pairings[j]);
      }
    }
  }
  return arr;
}


pairElement("GCG");
