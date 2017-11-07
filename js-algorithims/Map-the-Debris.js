
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    var top = Math.pow(earthRadius + arr[i].avgAlt, 3);
    var bottom = GM;
    var inside = top/bottom;
    var outside = Math.PI * 2;
    var orbitalPeriod = outside * Math.sqrt(inside);
    var finalAnswer = Math.round(orbitalPeriod);
    answer.push({name:arr[i].name, orbitalPeriod:finalAnswer});
  }
  return answer;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
