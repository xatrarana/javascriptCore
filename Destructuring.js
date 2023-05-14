/**
 * With destructuring we can extract data from a deeper level inside an array / object with
 *  a more concise syntax, even giving this 'extracted' data some other name in the same operation.
 */

const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'x'
    }   
};


//to get head in old ways
//let head = person.head;

//ES6 destructuring
let {head} = person

//we can give other name as if  a variable
let {head: head2} = person
console.log(head2)


// with the arrays
let numbers = ['2', '3', '7','6','9'];
// Old way
        // let two = numbers[0];
        //let three = numbers[1];

// ES6 Destructuring
            let [one, four] = numbers;
            
console.log(one, four)

//with funciton paramerter

/***
 * function getHeadAndBody(person){
    let headAndBody = {
        head: person.head,
        body: person.body
    }

    return headAndBody;
}
 */
// ES6 destructuring
function getHeadAndBody({head, body}){
    return {head,body};
}

//arrow function
let getHeadAndBody1 = ({head,body}) => {head,body};

console.log(getHeadAndBody(person));