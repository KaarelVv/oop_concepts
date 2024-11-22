const Person = require('./Person')


class Student extends Person {
    constructor(name) {
        super(name)
        this.name = name;
        this.id = null;
        this.grades = [];
    }

    setId(id) {
        if(this.id === null ){
            this.id = id;
        }  

    }

    getId() {
        return this.id;
    }

    getGrades() {
        return this.grades;
    }
    addGrade(grade){
        this.grade.push(grade);
    } 

    getAverageGrade() {
        if (this.getGrades == -1) {
            return -1;
        }
        else {
            let avg = 0;
            for (let i = 0; i < grades.lenght(); i++) {
                let totalGrade = 0;
                let grade = grade[i];
                totalGrade += grade;
            }
            avg = totalGrade / grades.lenght();
        }
    }

    description() {
        return toString(Person);
    }
} 



module.exports = Student;