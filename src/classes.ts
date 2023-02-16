class Coder{

    secondLang!: string
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang:string = "Typescript"
        ){
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }

    public getAge(){
        return `Hello I'm ${this.age}`
    }
}

// const Ganesh = new Coder("Ganesh","hippop",20)
// console.log(Ganesh.getAge())
// console.log(Ganesh.age)
// console.log(Ganesh.lang)

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ){
        super(name,music,age)
        this.computer = computer
    }
    public getLang(){
        return ` I wrie ${this.lang}`
    }
}

const Ganesh = new WebDev("MAc","Ganesh","lofi", 20)
console.log(Ganesh.getLang())
// console.log(Ganesh.age)
// console.log(Ganesh.lang)

// ---------------------------------------------------------


interfac Musician{
    name: string,
    instrument: string,
    play(action : string) : string
}

class Guitarist implements Musician{
    name: string
    instrument: string

    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }

    play(action: string){
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new greetGuitarist("Jimmy","guitar")
console.log(Page.play("strums"))


class Peeps{
    static count: number = 0
    static getCount():number{
        return Peeps.count
    }

    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps("John")
const Steve = new Peeps("Steve")
const Amy = new Peeps("Amy")

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)


class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[]{
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(elem => typeof elem === "string")){
             this.dataState = value
             return
        } else {
            throw new Error("param is not an array of strings")
        }
    }
}

// const myBands = new Bands()
// myBands.data = ["Neil young", "led Zep"]
// console.log(myBands.data)
// myBands.data  = [... myBands.data , "ZZ Top"]
// console.log(myBands.data)
// myBands.data = ["van halen" , 5150]