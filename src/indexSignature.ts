// Index signatures -- > to access obj props dynamically --when u dont't knw the props of obj


interface TransactionObj{
    readonly [index: string]: number
}
// interface TransactionObj{ 
//     Pizza: number,
//     Books: number,
//     Job: number
// }

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = "Pizza"
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let count = 0;
    for(const transactions in transactions){
        total += transactions[transactions]
    }
    return total
}

// console.log(todaysTransactions)

// todaysTransactions.Pizza = 79; can't do this

console.log(todaysTransactions["Dave"])