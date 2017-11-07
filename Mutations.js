
function mutation(arr) {
  var lowerCase = arr.join(' ').toLowerCase().split(' ');
  var storage = [];
  for (var i = 0; i < arr[1].length; i++) {
    storage.push(lowerCase[0].indexOf(lowerCase[1][i]));
  }
  storage = storage.join();
  if (storage.indexOf(-1) >= 0) {
    return false;
  }
  else {
    return true;
  }
}

mutation(["hEllo", "hey"]);
