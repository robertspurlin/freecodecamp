
function uniteUnique() {
  var arr = [];
  for (var i in arguments) {
    arr.push(arguments[i]);
  }
  var flattened = arr.reduce(function(a, b) {
    return a.concat(b.filter(function(j){
      return a.indexOf(j) === -1;
     }));
  });
  return flattened;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
