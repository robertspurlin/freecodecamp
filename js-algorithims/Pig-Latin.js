
function translatePigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(str[0]) == -1) {
    for (var i = 1; i < str.length; i++) {
      if (vowels.indexOf(str[i]) > -1) {
        str = (str.substring(i) + str.substring(0,i) + "ay");
        break;
      }
    }
  } else {
    str += "way";
  }
  return str;
}

translatePigLatin("california");
