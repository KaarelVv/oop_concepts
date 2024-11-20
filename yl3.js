class Student{
    #name;
    #id;
    constructor(name,id){
        this.#name = name;
        this.#id = id;
        this.status = "Active";
    } 
    getId (){
        return this.#id;
    } 
    setName (name){
        this.#name = name;
    } 
    getName(){
        return this.#name;
    } 
    setStatus(status){
        const statusList =["Active" , "Expelled", "Finished" , "Inactive"] 
       if(statusList.includes(statusList)){
        this.status = status;
       } 
    } 
    getStatus(){
        return this.status;
    } 
} 
const student1 = new Student();
student1.setName("Xenon");
student1.setStatus("");
const studentName = student1.getName();
const student2 = new Student("Nimi");
console.log(studentName);
console.log(student1.getStatus())
