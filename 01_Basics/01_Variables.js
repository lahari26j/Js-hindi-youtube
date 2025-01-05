const accountId = 1444553
let accountEmail = "laharijamalpuri1512@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed

accountEmail= "hhfi@.com"
accountPassword ="2122111222"
accountCity = "Bengalore"

console.log(accountId);

/*
Prefer to not to use Var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
