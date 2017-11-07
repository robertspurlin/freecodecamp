
function sym() {
  var args = Array.prototype.slice.call(arguments);
  args = args.reduce(function(acc, item){
    var theFilter = function(arr1, arr2){
      return arr1.filter(function(itemArr1){
        return arr2.indexOf(itemArr1) === -1;
      });
    };

    return theFilter(acc, item).concat(theFilter(item, acc));
  }, []);
  args = args.filter(function(item, pos) {
    return args.indexOf(item) == pos;
  });
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);
