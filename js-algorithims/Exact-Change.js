// jshint esversion: 6
function checkCashRegister(price, cash, cid) {
  var change = [];
  // Here is your change, ma'am.
  var lookup = {'ONE HUNDRED':100.00, 'TWENTY':20.00, 'TEN':10.00, 'FIVE': 5.00, 'ONE': 1.00, 'QUARTER': 0.25, 'DIME': 0.10, 'NICKEL':0.05, 'PENNY':0.01};
  
  //total check
  var total = [];
  for (var i = 0; i < cid.length; i++) {
    total.push(cid[i][1]);
  }
  total = total.reduce((prev, curr) => prev + curr);

  var difference = cash - price;
  var changeBack = [];
  
  if (difference == total) {
    return "Closed";
  }
  
  // the actual pushing of change back 
  for (var j in lookup) {
    var value = 0;
    for (var k = 0; k < cid.length; k++) {
      if (j == cid[k][0]) {
        while (lookup[j] <= cid[k][1] && lookup[j] <= difference) {
          value += lookup[j];
          difference -= lookup[j];
          cid[k][1] -= lookup[j];
          difference = Number(Math.round(difference+'e2')+'e-2');
        }
        if (value !== 0) {
          change.push([j, value]);
        }
      } 
    }
  }
  
  // Totals up the change returned and checks to see if it is the same 
  var totalCheck = [];
  var differenceCheck = cash - price;
  var test = [];
  
  for (var l = 0; l < change.length; l++) {
    totalCheck.push(change[l][1]);
  }
   
  totalCheck = totalCheck.reduce((acc,val) => acc + val);
  totalCheck = Number(Math.round(totalCheck+'e2')+'e-2');
  
  if (totalCheck === differenceCheck) {
     return change;
  } else {
    return "Insufficient Funds";
  }
  
}



checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);