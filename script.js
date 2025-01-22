// Constructor in JavaScript

class Person{
     constructor(name,age){
          this.name = name;
          this.age = age;
     }

     calling(){
          console.log(`Name is ${this.name} and age is ${this.age}..!!`);
     }
}

const person1 = new Person("Bosnan", 7);
person1.calling();

const person2 = new Person("DEv", 10);
person2.calling();

// Bosnan DEv (bosnan-dev)