
function truthCheck(collection, pre) {
  // Is everyone being true?
  collection = collection.map(function(a){
    return Boolean(a[pre]) ? true : false;
  });
  return collection.indexOf(false) == -1 ? true : false;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");
