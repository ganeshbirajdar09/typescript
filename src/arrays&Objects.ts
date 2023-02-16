let stringArr = ['madeira','manchester','madrid','turin']

let guitars = ['strat','les paul',5150]

let mixedData = [1903,true,"hello"]

// stringArr[0] = 55;
stringArr[0] = "Al nasar";

stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('ganesh')

// stringArr = guitars;
// guitars  =  stringArr 
// mixedData = stringArr;

let test = []
let bands: string[] = []
bands.push("Van halen")


// tuple
let myTuple: [string,number,boolean] = ["Ganesh",20,true]

let mixed = ["Birajdar",1,false]
// mixed = myTuple
// myTuple = mixed;

// myTuple[3] = 43;

//Objects
let myObj: object
myObj = []
myObj = bands;
myObj = {}
console.log(typeof myObj)

const exampleObj = {
    prop1: "Ganesh",
    prop2: true
}

exampleObj.prop1 = "ganesh"

type Guitarist = {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}
// interface Guitarist {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

// ? -> optional

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [2324,3222,"gog32"]
}
let JP: Guitarist = {
    name: "Jimmy",
    active: true,
    albums: ["I","II","IV"]
}

evh = JP

// evh.years = 40; can't to this

const greetGuitarist = (guitarist: Guitarist) => `Hello ${guitarist.name?.toUpperCase()}`

// const greetGuitarist = (guitarist: Guitarist) => {
//     if(guitarist.name){
//         return  `Hello ${guitarist.name?.toUpperCase()}`
//     }
//     else{
//         return "hello"
//     }
// }

console.log(greetGuitarist)

//Enums
enum Grade{
    U = 1,
    D,
    C,
    B,
    A
}
console.log(Grade.U)