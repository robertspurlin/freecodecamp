
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  collection.filter(function(test) {
    var storage = [];
    for (var a in source) {
      storage.push(test.hasOwnProperty(a));
    }
    if (storage.indexOf(false) == -1 && test[a] == source[a]) {
      arr.push(test);
    }
  });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
