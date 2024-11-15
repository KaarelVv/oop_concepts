class Student{
    constructor(name){
        this.name = name;
        this.finished = false;
    } 
} 

const student = new Student("Eeva");

console.log(student.name);
console.log(student.finished);


const names =["Mary", "Joe", "David"];
let studentsList =[];

names.forEach(name =>{
    studentsList.push(new Student(name))
} )

console.log(studentsList);
