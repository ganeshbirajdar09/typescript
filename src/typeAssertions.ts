// type assertions --> type casting
//webpage document

type one = string;
type two = string | number
type three ='hello'

//convert to more or less specifi
let a: one = 'hello'
let b = a as two // less specific type
let c = a as three

let d = <one>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add' ) return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string

// be careful! ts sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

// 10 as string

//force casting or double casting
(10 as unknown) as string


//THe DOM
const img = document.getElementById('img')!
const myImg = document.getElementById('#img') as HTMLImageElement // --> ! non null 
const nexxtImg = <HTMLImageElement>document.getElementById("#img") 

// img.src
// myImg.src