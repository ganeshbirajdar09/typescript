//when u don't know the datatype
const echo = <T>(arg: T) : T => arg // it will work with any type u provide

const isObj = <T>(arg: T): boolean => typeof arg === 'object' && !Array.isArray(arg) && arg != null


console.log(isObj(true))
console.log(isObj("Ganesh"))
console.log(isObj([1,2,3]))
console.log(isObj({name: "John"}))
console.log(isObj(null))

const isTrue = <T>(arg: T): {arg: T,is:boolean} => {
    if(Array.isArray(arg) && !arg.length){
    return {arg,is: false}
        
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){

        return {arg,is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) 
console.log(isTrue({ name: 'Dave' }))
console.log(isTrue([])) 
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))


interface BoolCheck<T>{
    value: T,
    is: boolean
}
const isCheckBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value, is: false };
    }
    return { value, is: !!arg };
};

interface hasID{
    id: number
}

const processUser = <T extends hasId>(user: T): T => {
    return user
}

console.log(processUser({id: 1, name : "Ganesh"}))

const getUsersProperty = <T extends hasID, k extends keyof T>(users: T[],key: k): T[k][] => {
    return users.map(user => user[key])
}

const usersArray = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        },
    ]
    

console.log(getUsersProperty(usersArray, "email"))
console.log(getUsersProperty(usersArray, "username"))

class stateObject<T>{
    private data: T
    constructor(value: t){
        this.data = value
    }
    get state(): T{
        return this.data
    }
    set state(value: T){
        this.data = value
    }
}

const store = new stateObject("John")
console.log(store.state)
store.state = "Dave"
// store.state = 13;

const myState = new stateObject<(string | number | boolean)[]>([15])
myState.state = (["dave", 42, true])
console.log(myState.state)