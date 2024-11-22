


class Student extends Person {
    constructor(name) {
        super(name);
        id = null;
        grades = [];
    }

    setId(id) {

        grades.forEach(element => {
            if (element != id) {
                this.id = id;
            }
        });

    }

    getId() {
        return this.id;
    }

    getGrades() {
        if (grade.isEmpty()) {
            return -1;
        } else {
            return this.grades;
        }
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

module.export = Student;