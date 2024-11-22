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



module.exports = Person;