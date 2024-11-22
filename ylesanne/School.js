
const Course = require("./Course")


class School extends Course {
    constructor(name) {
        super(name);
        this.name = name;
        this.students = [];
        this.courses = [];
        this.id = Math.ceil(Math.random());


    }
    addCourse(course) {
        if (this.courses.indexOf(course) === -1) //indexOf kas on listis olemas
            this.courses.push(course);

    }

    addStudent(student) {
        
        if (student.age() > 18) {
            if (this.students.indexOf(student) === -1) {
                student.setId(Math.ceil(Math.random()))
                this.students.push(student);
                
            }
        }

    }

    addStudentGrade(student, course, grade) {
        if (this.students.indexOf(student)) {

         }
    }

    getStudents() {
        return this.students;
    }
    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {

    }


}



module.exports = School;