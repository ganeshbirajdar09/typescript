"use strict";
// Index signatures -- > to access obj props dynamically --when u dont't knw the props of obj
// interface TransactionObj{ 
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = "Pizza";
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let count = 0;
    for (const transactions in transactions) {
        total += transactions[transactions];
    }
    return total;
};
// console.log(todaysTransactions)
// todaysTransactions.Pizza = 79; can't do this
console.log(todaysTransactions["Dave"]);
