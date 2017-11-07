
function fearNotLetter(str) {
  var arr = [];
  var answer = [];
  for (var i = 0; i < str.length; i++) {
    arr.push(str[i].charCodeAt());
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j+1] - arr[j] != 1 && arr[j+1] !== undefined) {
      answer.push(arr[j]);
    } 
  }
  if (answer[0] === undefined) {
    return undefined;
  } else {
    return String.fromCharCode(answer[0]+1);
  }
}

fearNotLetter("abce");
