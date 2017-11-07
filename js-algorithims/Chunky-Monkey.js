
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var storage = [];
  for (var i = 0; i < (arr.length / size); i++) {
    var slice = arr.slice((i * size), (i * size) + size);
    storage.push(slice);
  }
  return storage;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);