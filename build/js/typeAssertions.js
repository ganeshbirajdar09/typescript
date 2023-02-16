"use strict";
// type assertions --> type casting
//webpage document
//convert to more or less specifi
let a = 'hello';
let b = a; // less specific type
let c = a;
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful! ts sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
//force casting or double casting
10;
//THe DOM
const img = document.getElementById('img');
const myImg = document.getElementById('#img'); // --> ! non null 
const nexxtImg = document.getElementById("#img");
// img.src
// myImg.src
