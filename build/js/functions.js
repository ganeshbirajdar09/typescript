"use strict";
// interface postId = stringOrNumber;
//Literal types
let myName = "Ganesh";
let userName;
userName = "Ganesh";
// userName = "John"
//Functions
const add = (a, b) => a + b;
const logMsg = (msg) => console.log(msg);
logMsg("hello");
logMsg(add(2, 3));
// logMsg(add("a",3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number,b: number):number
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4));
logMsg(addAll(2, 3));
logMsg(sumAll(undefined, 3));
//Rest parameters
//rest should come at the end, all the required ones should come at the beginning
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4));
// const createError = (errMsg: string) => throw new Error(errMsg);
// const infinite = () => [
//     let i: number = 1
//     while(true){
//         i++;
//         if(i > 100) break
//     }
// ]
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of the never type
// const numberOrSTring = (value: number | string):
// string => {
//     if(typeof value === 'string') return 'string'
//     if(typeof isNumber(value) === 'number') return 'number'
//     return creteError("This should never happen!")
// }
