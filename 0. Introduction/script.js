// Variable 
var elements = 'Oxygen';
let person = 'A Great Man';
const number = 200;

// Condition
let age = 22;
if (age >= 20) {
    console.log('I will Get married');
}
else {
    console.log('You Are Not Adult');
}

// Array 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loop 
for (let day = 1; day <= 60; day++) {
    console.log('I will invest at least 6 hrs every single day for next 60 days!', day);
}

// Object 
const mobile = {
    brand: 'Samsung',
    name: 'S20',
    color: 'Blue',
    isNew: true,
    price: '50K'
}

// function 
function sum(x, y) {
    addition = x + y;
    subtraction = x - y;
    multiplication = x * y;
    division = x / y;
    modulus = x % y;
    const results = ` Addition: ${addition} subtraction: ${subtraction} multiplication: ${multiplication} division: ${division} modulus:${modulus}`;
    return results;
}
// const number = (50, 30);
const result = sum(5, 3)
console.log(result);

// Dom Document Object Model
document.getElementById('btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})
document.getElementById('btn').addEventListener('mouseover', function () {
    document.body.style.backgroundColor = 'red'
});
