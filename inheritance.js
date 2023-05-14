// java script uses the prototype based inheritance


/*
    every object has a prototype and when method of the 
    object is called the js tires to find the right 
    function to execute form the prototype object



 */


    //without using the prototype attribute

    function Person(name,age){
        this.name = name;
        this.age = age;

        function describe(){
            return this.name + " " + this.age;
        }
    }


    /** 
     * when creating instances of the person obj,
     * we create a new copy of all memeber and method
     * of the functions.
     * 
     * this means that every instance of and object
     * will have its own name and age properties
     * as well as its own describe functionn
     * 
     */

    // if we use the Person.prototype

    function Person1(name,age){
        this.name = name;
        this.age = age;
    }

    Person1.prototype.describe = function(){
        return this.name + " " + this.age;
    }

//instancec of 
let res = new Person1("ram",10);

    console.log(res.describe());

    /**
     * creating instances of the Person object,
     *  they will not contain a copy of the describe
     *  function. Instead, when calling an object method, 
     * JavaScript will attempt to resolve the describe function first
     *  from the object itself, 
     * and then using its prototype attribute.
     */