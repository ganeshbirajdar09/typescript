"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello I'm ${this.age}`;
    }
}
// const Ganesh = new Coder("Ganesh","hippop",20)
// console.log(Ganesh.getAge())
// console.log(Ganesh.age)
// console.log(Ganesh.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return ` I wrie ${this.lang}`;
    }
}
const Ganesh = new WebDev("MAc", "Ganesh", "lofi", 20);
console.log(Ganesh.getLang());
// console.log(Ganesh.age)
// console.log(Ganesh.lang)
// ---------------------------------------------------------
interfac;
Musician;
{
    name: string,
        instrument;
    string,
        play(action, string);
    string;
}
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new greetGuitarist("Jimmy", "guitar");
console.log(Page.play("strums"));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(elem => typeof elem === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("param is not an array of strings");
        }
    }
}
// const myBands = new Bands()
// myBands.data = ["Neil young", "led Zep"]
// console.log(myBands.data)
// myBands.data  = [... myBands.data , "ZZ Top"]
// console.log(myBands.data)
// myBands.data = ["van halen" , 5150]
