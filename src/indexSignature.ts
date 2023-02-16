// Index signatures -- > to access obj props dynamically --when u dont't knw the props of obj


// interface TransactionObj{
//     readonly [index: string]: number
// }
interface TransactionObj{ 
    readonly [index: string]: number
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50,
    // Dave: 223
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


// ------------

interface Student{
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student= {
    name: "Doug",
    GPA: 5.6,
    classes: [133,534]
}

// console.log(student.test)

for(const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map( key = > {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student,'name');

/////////////

// interface Incomes{
//     [key: string] : number

// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

//provide a literal type
type Incomes = Record<Streams, number | string>

// const montlyIncomes: Incomes = {
//     salary: 500,
//     bonus: 100,
//     sideHustile : 250
// }

for(const revenue in montlyIncomes){
    console.log(montlyIncomes[revenue as keyof Incomes])
}