/* You have deposited a specific amount of dollars into your bank account.
Each year your balance increase at the same growth rate. Find out how long 
it would take for your balance to pass a specific threshold with the assumption
that you don't make any additionnal deposits.

Example : 
For deposit = 100, rate = 20 and threshold = 170, the output should be 
DepositProfit(deposit, rate, threshold) = 3

Explanation : 
Each year the amount on your account increase by 20%. It means that throughout
the years your balance would be : 
year 0 : 100$
year 1 : 120$
year 2 : 144$
year 3 : 172.8$
*/

function DepositProfit (deposit, rate, threshold) {
  let year = 0;

  while (deposit <= threshold ) {   
    deposit += deposit +(deposit * rate) ;
        year++;
       
  }
  console.log(deposit);
}
DepositProfit(100,20,170)


//correction Jeremy 


function DepositProfit (deposit, rate, threshold) {
  let year = 0;
 while (deposit <= threshold) {
   deposit = deposit + (deposit * (rate/100));
   year++;
 }
 return year;
}
DepositProfit(100,20,170)
