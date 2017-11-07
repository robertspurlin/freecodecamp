
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.split(/[^A-Za-z0-9_]/).join(' ');
  str = str.replace(/[a-z](?=[A-Z])/g, "$&" + " ");
  str = str.toLowerCase().replace(/( )|(_)/g, "-");
  return str;
}

spinalCase("The_Andy_Griffith_Show");