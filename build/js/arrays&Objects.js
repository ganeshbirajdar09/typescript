"use strict";
let stringArr = ['madeira', 'manchester', 'madrid', 'turin'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = [1903, true, "hello"];
// stringArr[0] = 55;
stringArr[0] = "Al nasar";
stringArr.push('hey');
guitars[0] = 1984;
guitars.unshift('ganesh');
// stringArr = guitars;
// guitars  =  stringArr 
// mixedData = stringArr;
let test = [];
let bands = [];
bands.push("Van halen");
// tuple
let myTuple = ["Ganesh", 20, true];
let mixed = ["Birajdar", 1, false];
// mixed = myTuple
// myTuple = mixed;
// myTuple[3] = 43;
//Objects
let myObj;
myObj = [];
myObj = bands;
myObj = {};
console.log(typeof myObj);
const exampleObj = {
    prop1: "Ganesh",
    prop2: true
};
exampleObj.prop1 = "ganesh";
// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }
// ? -> optional
let evh = {
    name: "Eddie",
    active: false,
    albums: [2324, 3222, "gog32"]
};
let JP = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"]
};
evh = JP;
// evh.years = 40; can't to this
const greetGuitarist = (guitarist) => { var _a; return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; };
// const greetGuitarist = (guitarist: Guitarist) => {
//     if(guitarist.name){
//         return  `Hello ${guitarist.name?.toUpperCase()}`
//     }
//     else{
//         return "hello"
//     }
// }
console.log(greetGuitarist);
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
