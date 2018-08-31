"use strict";
// for (let index = 0; index < studenstList.length; index++) {
//     const element = studenstList[index];
//     console.log("age is: " + element.Age + " name:" + element.Name + "phone is:" + element.Phone + "speaks: " + element.Language);
// }
//Rest parameters:
function GetNubers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("number: " + element);
    });
}
GetNubers(1, 2, 3, 4, 5, 6);
//Default params:
function GetInfo(info) {
    if (info === void 0) { info = "what?"; }
    console.log(info);
}
GetInfo('you mean');
//############## FUNCTIONS ###############
var studentName = function (lName, fName) {
    return fName + " " + lName;
};
console.log(studentName("marian", "kucharski"));
// arrow function:
var studentFullName = function (lName, fName) {
    return fName + " ma na nazwisko " + lName;
};
console.log(studentFullName("Malina", "Z lasu"));
//################## CLASES ######################
var Students = /** @class */ (function () {
    function Students(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
    Students.prototype.GetFullName = function () {
        return this.fName + " " + this.lName;
    };
    return Students;
}());
var dude = new Students('koleś', 'jakiś');
console.log(dude.GetFullName());
//##################### GENERICS ####################
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["Polish"] = 0] = "Polish";
    LanguagesKnown[LanguagesKnown["English"] = 1] = "English";
    LanguagesKnown[LanguagesKnown["None"] = 2] = "None";
})(LanguagesKnown || (LanguagesKnown = {}));
var student = {
    Name: "Marian",
    Age: 25,
    Phone: 123123123,
    Language: LanguagesKnown[LanguagesKnown.None]
};
var studenstListG = [
    { Name: "Maciek", Age: 26, Phone: 999, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Michał", Age: 29, Phone: 777, Language: LanguagesKnown[LanguagesKnown.Polish] }
];
function getStudentsList(students) {
    students.forEach(function (element) {
        console.log("age is: " + element.Age + " name:" + element.Name + "phone is:" + element.Phone + "speaks: " + element.Language);
    });
}
getStudentsList(studenstListG);
//# sourceMappingURL=app.js.map