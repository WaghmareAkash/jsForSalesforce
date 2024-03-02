const accountId= 21353
let accountEmail = "abc@abc.com"
var accountName = "ABC"
accountCity = "Pune"
let acccountStatus;
// do not reassign value to const as its value can not be changed
/*
use let instead of var,var should not be used.
because of issue in block scope and functional scope 
*/

console.log(accountEmail);
console.table([accountId, accountEmail, accountName, accountCity, acccountStatus]);
