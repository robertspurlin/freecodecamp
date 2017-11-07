
var count = 0;

function cc(card) {
  // Only change code below this line
  var output = "";
  switch(card) {
    case 2:
      count += 1;
      break;
    case 3:
      count += 1;
      break;
    case 4:
      count += 1;
      break;
    case 5:
      count += 1;
      break;
    case 6:
      count += 1;
      break;
    case 10:
      count -= 1;
      break;
    case "J":
      count -= 1;
      break;
    case "Q":
      count -= 1;
      break;
    case "K":
      count -= 1;
      break;
    case "A":
      count -= 1;
      break;      
  }
  if (count >= 1) {
    output += " Bet";
  }
  else {
    output += " Hold";
  }
  var answer = count + output;
  return answer;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
