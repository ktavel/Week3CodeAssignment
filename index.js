newArray = ages = [3, 9, 23, 64, 2, 8, 23, 93];
console.log(ages);
//printing the subtraction value from first and last element in array ages

console.log(ages[ages.length - 1] - ages[0]);

//adding new age to array

ages.push(25)
console.log(ages);

console.log(ages[ages.length - 1] - ages[0]);

//calculating average age
var i, sum = 0;
for (i = 0; i < ages.lenght; i++){
    sum = sum + ages[i];
} console.log(sum / ages.length);

//2 create new array with names

newArray = firstName = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];
console.log(firstName);

let fistName = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];
let lengths = firstName.map(function(element)){
    return element.length;
} console.log(lengths);