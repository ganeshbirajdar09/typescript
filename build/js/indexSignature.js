"use strict";
// Index signatures -- > to access obj props dynamically --when u dont't knw the props of obj
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Dave: 223
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
const student = {
    name: "Doug",
    GPA: 5.6,
    classes: [133, 534]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key =  > {
    console, : .log(student[key])
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
// const montlyIncomes: Incomes = {
//     salary: 500,
//     bonus: 100,
//     sideHustile : 250
// }
for (const revenue in montlyIncomes) {
    console.log(montlyIncomes[revenue]);
}
