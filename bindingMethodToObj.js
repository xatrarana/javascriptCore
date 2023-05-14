const User = {
    name:"wolfie",
    email:"w@w.com",
    isActive:true,
    isAdim:true
}


function getAdmin(){
    console.log(this.name + this.isAdim);
}

// Obviously, we are not able to call getAdmin() without associating the function with the object person.
//  To do this we must create a bound method of the function


let bindFunction = getAdmin.bind(User);


bindFunction();

/*

We can use the call and apply functions to call a function as if it was bound to an object. 
The difference between the call and apply functions is only by how they receive their
 arguments - the call function receives the this argument first, and afterwards the arguments of the function,
  whereas the apply function receives the this argument first, and an array of arguments to pass on to the
   function as a second argument to the function.
   */



   var person = {
    firstName : "John",
    lastName : "Smith",
    age : 23
};

function printFullName()
{
    console.log(this.firstName + " " + this.lastName);
}

function printDetails()
{
    console.log(this.firstName + " is " + this.age + " years old");
}

// TODO: create bound copies of printFullName and printDetails.
var boundPrintFullName = printFullName.bind(person);
var boundPrintDetails = printDetails.bind(person);

boundPrintFullName();
boundPrintDetails();

// The difference between call/apply and bind is that bind returns a new function identical to the old function, except that the value of this in the new function is now the object it was bound to.