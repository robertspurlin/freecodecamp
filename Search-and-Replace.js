
function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    after = after.replace(/\b\w/g, function(l){return l.toUpperCase();});
  }
  str = str.replace(before, after);
  return str;
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
