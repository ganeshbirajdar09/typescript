//Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist =  {
    name: string,
    active?: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// interface postId = stringOrNumber;

//Literal types
let myName = "Ganesh"

let userName : 'Ganesh' | 'Birajdar' | 'Dave'
userName = "Ganesh"
// userName = "John"

//Functions

const add = (a: number,b: number) : number => a + b

const logMsg = (msg: any): void=> console.log(msg)

logMsg("hello")
logMsg(add(2,3))
// logMsg(add("a",3))

let subtract = function(c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number,b: number) => number
// interface mathFunction {
//     (a: number,b: number):number
// }
    

let multiply: mathFunction = function (c,d) {
    return c * d
}

logMsg(multiply(2,3))

// optional parameters
const addAll = (a: number,b: number, c?: number): number => {
    if(typeof c !== "undefined"){
        return a + b + c
    }
    return a + b
}
//default param value
const sumAll = (a: number = 10,b: number, c: number = 2): number => {
   return a + b + c
}

logMsg(addAll(2,3,4))
logMsg(addAll(2,3))
logMsg(sumAll(undefined,3))

//Rest parameters
//rest should come at the end, all the required ones should come at the beginning
const total = (a: number,...nums: number[]): number => {
    return a + nums.reduce((prev,curr) => prev + curr)
}
logMsg(total(1,2,3,4))

// const createError = (errMsg: string) => throw new Error(errMsg);

// const infinite = () => [
//     let i: number = 1
//     while(true){
//         i++;
//         if(i > 100) break
//     }
// ]

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true: false
}

//use of the never type
// const numberOrSTring = (value: number | string):
// string => {
//     if(typeof value === 'string') return 'string'
//     if(typeof isNumber(value) === 'number') return 'number'
//     return creteError("This should never happen!")
// }