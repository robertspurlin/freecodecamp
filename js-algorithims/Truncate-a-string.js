
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var truncate = "...";
  var storage = [];
  if (num >= 3 && num < str.length) {
    storage = str.substring(0, (num - 3)).split();
    storage.push(truncate);
    str = storage.join('');
  }
  else if (num < 3) {
    storage = str.substring(0, num).split();
    storage.push(truncate);
    str = storage.join('');
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
