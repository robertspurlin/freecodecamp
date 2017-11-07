
function findLongestWord(str) {
  var array = str.split(' ');
  array.sort(function(a,b){
    return b.length - a.length;
  });
  var longestCharacters = array[0];
  return longestCharacters.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
