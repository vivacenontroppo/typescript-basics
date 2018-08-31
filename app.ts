

import * as Webdriver from "selenium-webdriver"

Webdriver.Browser.EDGE

// for (let index = 0; index < studenstList.length; index++) {
//     const element = studenstList[index];
//     console.log("age is: " + element.Age + " name:" + element.Name + "phone is:" + element.Phone + "speaks: " + element.Language);
// }


//Rest parameters:

function GetNubers(...nums: Number[]){
    nums.forEach(element => {
        console.log("number: " + element)
    });
}

GetNubers(1,2,3,4,5,6,)

//Default params:

function GetInfo(info: string = "what?"){
    console.log(info)
}

GetInfo('you mean')

//############## FUNCTIONS ###############

let studentName = function (lName: string, fName: string){
    return fName + " " + lName
}

console.log(studentName("marian", "kucharski"));

// arrow function:

let studentFullName = (lName: string, fName: string) => {
    return fName + " ma na nazwisko " + lName
}

console.log(studentFullName("Malina", "Z lasu"));


//################## CLASES ######################

class Students{

    constructor(private lName: string, private fName: string){
    }

    GetFullName():string
    {
    return this.fName + " " + this.lName
    }   

}

let dude = new Students('koleś', 'jakiś');
console.log(dude.GetFullName());

//##################### GENERICS ####################

enum LanguagesKnown { Polish, English, None }

interface StudentInfo{
    Name: string,
    Age: number,
    Phone: number,
    Language: string
}

let student:StudentInfo = {
    Name: "Marian",
    Age: 25,
    Phone: 123123123,
    Language: LanguagesKnown[LanguagesKnown.None]
}

let studenstListG:Array<StudentInfo> = [
    {Name: "Maciek", Age: 26, Phone: 999, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name: "Michał", Age: 29, Phone: 777, Language: LanguagesKnown[LanguagesKnown.Polish]}
]

function getStudentsList(students: Array<StudentInfo>){
    students.forEach(element => {
        console.log("age is: " + element.Age + " name:" + element.Name + "phone is:" + element.Phone + "speaks: " + element.Language);
    });
}

getStudentsList(studenstListG);