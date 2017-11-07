
function destroyer(arr) {
  // Remove all the values
  var storage = [];
  for (var i = 1; i < arguments.length; i++) {
    storage.push(arguments[i]);
  } 
  var answer = arr.filter(function(arg) {return storage.indexOf(arg) < 0;});
  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
