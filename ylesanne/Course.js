const Student = require("./Student") 

class Course extends Student{
    constructor(name){
        super(name);
        this.name = name;
        
    } 


    addCourse(name){
        this.name = name;
    } 
    getGrades(){
        return ;
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



module.exports = Course;