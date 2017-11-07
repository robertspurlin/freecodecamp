 
function smallestCommons(arr) {
  arr.sort(function(a, b){
    return b - a;
  });
  
  var test = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    test.push(i);
  }
  
  var thing = 0;
  var loop = 1;
  var j;
  
  do {
    thing = test[0] * test[1] * loop;
    for (j = 0; j < test.length; j++){
      if (thing % test[j] !== 0) {
        break;
      }
    }
    loop++;
  } while (j !== test.length);
 return thing;
}



smallestCommons([23, 18]);
