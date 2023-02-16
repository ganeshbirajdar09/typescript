// cosnt year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datatime", thisYear)
// year.textContent = thisYear;


// let year: HTMLElement | null 
// year = document.getElementById("year")
// let thisYear: string = new Date().getFullYear().toString()
// if(year){
//     year .setAttribute("datatime", thisYear)
//     year.textContent = thisYear;
// }

let year = document.getElementById("year") as HTMLSpanElement
let thisYear: string = new Date().getFullYear().toString()

year .setAttribute("datatime", thisYear)
year.textContent = thisYear;
