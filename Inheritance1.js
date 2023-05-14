//create a Person object, and a Student object
// derived from Person:


var Person = function() {};

Person.prototype.init = function(name,age){
    this.name = name;   
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

//student
var Student = function() {
    this.result = () => console.log("fuck you i am fail")
};

Student.prototype = new Person();

Student.prototype.learn =  function(sub){
    console.log(this.name + " just learned " + sub);
}


var ram = new Student();
ram.init("Ram",20);
ram.learn("inheritance");
ram.result();
