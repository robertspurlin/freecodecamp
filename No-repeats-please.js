
function permAlone(str) {
  
  var regex = /(.)\1+/g;
  var array = str.split(''), results = [], temp;
  
  function swap(index1, index2) {
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }
  
  function perm(num) {
    if (num === 1) {
      results.push(array.join(''));
    } else {
      for (var i = 0; i != num; ++i) {
        perm(num - 1);
        if (num % 2) {
          swap(i, num - 1);
        } else {
          swap(0, num - 1);
        }
      }
    }
  }
  perm(str.length);
  
  
  var answer = results.filter(function(test) {
    return !test.match(regex);
  });
  
  return answer.length;

}
permAlone("aabb");
