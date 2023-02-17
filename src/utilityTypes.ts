//utility types


interface Assignmet{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assign: Assignmet, propsToUpdate: Partial<Assignmet>): Assignmet => {
    return {...assign,...propsToUpdate}

}

const assign1: Assignmet = {
    studentId: "comp",
    title: "Finalproject",
    grade: 0
}

console.log(updateAssignment(assign1,{grade: 95}))
const assignGraded: Assignmet = updateAssignment(assign1,{grade: 95})


//required and readonly

const recordAssignment = (assign: Required<Assignmet>): Assignmet => {
    return assign
}

const assignVerified: Readonly<Assignmet> = {...assignGraded,verified: true}

recordAssignment({...assignGraded,verified: true})

//record 

const hexCcolorMap : Record<string,string> ={
    red: "FF0000",
    green: "00ff00",
    blue: "0000ff"
}

type Students = "Sara" | "Kelly"
type letterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students,letterGrades> = {
    Sara : "B",
    Kelly : "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students,Grades> = {
    Sara: {assign1: 85, assign2: 92},
    Kelly: {assign1: 76, assign2: 15}
}

// pick and omit

type AssignResult = Pick<Assignmet,"studentId" | "grade" >

const score : AssignResult = {
    studentId: "k98",
    grade: 85,
}

type AssignPreview = Omit<Assignmet, "grade" | "verfified">

const preview: AssignPreview = {
    studentId: "k98",
    title: "finalproject"
}

//exclude and extract -> string and uniontype

type adjustGrade = Exclude<letterGrades, "U">

type higherGrades = Extract<letterGrades, "A"|"B">

//nonullable
type allPossibleGrades = "Dave" | "John" | null | undefined
type namesOnly = NonNullable<allPossibleGrades>


// returnType

type newAssign = {title: string, points: number}

const createNewAssign = (title: string,points: number) => {
    return {title, points}
}

type newAssign = ReturnType<typeof createNewAssign>

const tsAssign: newAssign = createNewAssign("UtilityTypes", 100)
console.log(tsAssign)


// parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

//awaited -helps us with the ReturnType of a promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}
const fetchUsers = async(): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error){
            console.log(err.message)
        }
        
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
