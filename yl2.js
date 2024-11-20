class Person{
    constructor(){
        this.firstName = "";
        this.lastName = "";
        this.age = 0;
    } 
} 
class Student{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }  
} 
const person1 = new Person()
person1.firstName ="Lembit";
person1.lastName = "Juur";
person1.age = 23;
const person2 = new Person()
person2.firstName ="Aadu";
person2.lastName = "Juur";
person2.age = 33;
const person3 = new Person()
person3.firstName ="Vello";
person3.lastName = "Juur";
person3.age = 43;
const student1 = new Student("Lembit","Juur", 23)
const student2 = new Student("Lauri","Juur", 24)
const student3 = new Student("Leo","Juur", 26)
console.log(person1)
console.log(student1)