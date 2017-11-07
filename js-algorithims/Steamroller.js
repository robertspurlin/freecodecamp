
function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.reduce(function (ans, val) {
    return ans.concat(Array.isArray(val) ? steamrollArray(val) : val);
  }, []);
}
steamrollArray([[["a"]], [["b"]]]);