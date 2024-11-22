class Person{
    constructor(name){
        this.name=name;
    } 


    setDateOfBirth(year){
        this.year = year;
    } 

    getDateOfBirth(){
        return this.year;
    }
    
    age(){
       let vanus = new Date(2024) - this.getDateOfBirth();
       return vanus;
    }  

    getName(){
        return this.name;
    } 

    description(){
        return toString(Person);
    } 
} 

const person1 = new Person("Lembit")
person1.setDateOfBirth(1990);

console.log(person1.age())

module.export = Person;