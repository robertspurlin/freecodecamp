
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  arr1.filter(function(number) {
    if (arr2.indexOf(number) == -1) {
      newArr.push(number);
    }
  });
  
  arr2.filter(function(number) {
    if (arr1.indexOf(number) == -1) {
      newArr.push(number);
    }
  });
  
  return newArr;

}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
