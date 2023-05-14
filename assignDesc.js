// Get the legs property and get the data inside the third position of numbers using destructuring. Give it the names of myLegs and thirdPosition respectively.
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

const numbers = ['2', '3', '4'];

// TODO: Destructure here.
let {body:{legs:myLegs}} = person;
let [,,thirdPosition] = numbers;
console.log(myLegs);
console.log(thirdPosition);