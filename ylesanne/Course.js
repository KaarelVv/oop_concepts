const Student = require("./Student") 

class Course extends Student{
    constructor(name){
        this.name = name;
        super(grades);
    } 

    getGrades(){
        return Student.getGrades();
    }  

    getAverageGrade(){
        if(Student.getAverageGrade() == -1){
            return -1;
        } 
        else{
            return Student.getAverageGrade();
        } 
    } 

    description(){
        return toString(this.name);
    } 
} 

module.exports = Student;