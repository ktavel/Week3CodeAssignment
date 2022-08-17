newArray = ages = [3, 9, 23, 64, 2, 8, 23, 93];
console.log(ages);
//printing the subtraction value from first and last element in array ages

console.log(ages[ages.length - 1] - ages[0]);

//adding new age to array

ages.push(25)
console.log(ages);

console.log(ages[ages.length - 1] - ages[0]);

//calculating average age
let sum = 0
for (let i = 0; i < ages.length; i++){
    sum = sum + ages[i];
} console.log(sum / ages.length);

//2 create new array with names

newArray = firstName = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];
console.log(firstName);

// let fistName = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];
// let lengths = firstName.map(function(element)){
//     return element.length;
// } console.log(lengths);
for (let i=0; i < firstName.length; i++) {
    console.log(firstName[i].length);
}
 console.log(firstName.length);

//2 concate names
let names = ['Sam', 'Tommy', 'Tim','Sally', 'Buck', 'Bob'];
 let con = names[0];
 for (let i = 1; i < names.length; i++){
    con = con.concat(' ', names[i]);
 }console.log(con);

 //3. You use the array length property. The length property returns the number of elements in an array. Subtracting 1 from the length of an array gives the index of the last element of an array using which the last element can be accessed.
 //4. To access the first element of an array you use i[0].

 // 5 create new array

//  newArray = nameLengths = [];
 let nameLengths = [];
for (let i =0; i < names.length; i++){
    nameLengths[i] = names[i].length;
} console.log(nameLengths);

// 6 calculate sum of all elements


for (let i = 0; i <nameLengths.length; i++){
    sum = sum + nameLengths[i];
} console.log(sum / nameLengths.length);

//7 word and n

function concat_n_times(word, n){
    let con = 'word';
    for (let i = 0; i <= n; i++){
        con = con.concat('word');
    } return con;
} console.log(concat_n_times('Hello' ,3))

// 8 firstName and lastName and returns fullName

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName)
}
createFullName('Kassidy', 'Tavel');