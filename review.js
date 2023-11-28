// Note: Each section may incorporate multiple skills to complete

/************** VARIABLES & CONDITIONALS **************/

// TASK 1, PART 1:
//
//     Declare the following variables and assign appropriate values
//     to them.
//
//     - adjective
//     - animal
//     - famousPerson
//     - food
//     - liquid
//     - num1
//     - num2

let adjective = "smart";
let animal = "Dog";
let famousPerson = "Michael Jordan";
let food = "Burger";
let liquid = "Mountain Dew";
let num1 = 3;
let num2 = 400;

// TASK 1, PART 2:
//
//     Uncomment the madlib variable on the line below. Console log the madlib.
let madlib = `Today, I'm feeling ${adjective} and channeling the energy of a ${animal}. You could consider my fashion style similar to that of ${famousPerson}'s. Every morning, I start off my morning by eating ${num1} ${food} and drinking ${num2} ${liquid}. I'm pretty rad.`;
console.log(madlib);

console.log("-------------------------------------------");

// TASK 2:
//
//     Declare the following variables.
//
//     - age (set the value to your age)
//     - canVote (do not assign a value)
//
//     Create an if...else statement where:
//     - If age is greater than 18, canVote is assigned the value of 'yes'
//     - Otherwise, canVote is assigned the value of 'no'
//
//     Afterwards, console log canVote.

let age = 17;
let canVote;

// if(age > 18)(canVote = "yes")
// else{canVote = "no"}
// console.log(canVote);

console.log("-------------------------------------------");

/************** FUNCTIONS & LOOPS **************/

let numArr = [87, 34, 22, 98, 105];
let counter = 0;
// TASK 3:
//
//     Write a function that takes an array of numbers as a parameter.
//     Add each element of that array to a counter and return a log of the
//     final value of the counter (i.e. the sum of all of the numbers in
//     the array).
//
//     Call the function using numArr as the argument. The total should be 346.
function addArr(arr) {
  const sum = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  return sum;
}
console.log(addArr(numArr));

console.log("-------------------------------------------");

let stringArr = ["i", "am", "the", "best"];

// TASK 4:
//
//    Write a function that takes an array of strings as a parameter and
//    returns an array of numbers corresponding to the lengths of each word.
//
//    e.g. passing this function with the stringArr should give you back [1, 2, 3, 4]
//    Hint: you can call .length on a string!
function correspondingLengths(arr){
  const lengths = arr.map((word) => {
    return word.length;
  });
  return lengths;
}

console.log("-------------------------------------------");

// TASK 5:
//
//     With a for loop, iterate through the numbers 1-8.
//
//     Output:
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8

for(let i = 0; i < 9; i++){
  console.log(i);
}


// TASK 6:
//
//     Given two arrays of integers and one empty array. Create a
//     function that takes two parameters - each parameter is an array
//     of numbers. Using a for loop, add up each element in the same
//     position/index and push that sum to the empty array. Assume both
//     arrays are of the same length.
//
//     Example:
//     let evenNums = [2,4,6]
//     let oddNums = [1,3,5]
//
//     Output:
//     [3, 7, 11]
let smallNums = [0, 4, 6];
let largeNums = [450, 872, 660];
let sumOfNums = [];
function addArrays(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    sumOfNums.push(arr1[i] + arr2[i]);
  }
}
addArrays(smallNums, largeNums)
console.log(sumOfNums);
console.log("-------------------------------------------");

/************** OBJECTS **************/

// TASK 7:
//
//     Create an object called 'rectangle' with these properties and their
//     appropriate values:
//
//     - numOfSides with a value of 4
//     - length with a value of side1
//     - width with a value od side2
//     - type with a value of 'parallelogram'
//     - area with a value of the side1 times side2
//
//     Console the area of the rectangle. It should be 184.
let side1 = 23;
let side2 = 8;

let rectangle = {
  numOfSides: 4,
  length: side1,
  width: side2,
  type: "parallelogram",
  area: side1*side2
}
console.log(rectangle.area);

const planet = {
  name: "Saturn",
  rings: 9
};

console.log("-------------------------------------------");

// TASK 8:
//
//     Create an if...else statement where:
//     - If the name of the planet is equal to 'Saturn', log the message
//       'Saturn is the 6th planet from the Sun!
//     - Otherwise, log the message 'You're not Saturn!'

if(planet.name == "Saturn"){
  console.log("Saturn is the 6th planet from the Sun!");
}
else{
  console.log("You're not Saturn!");
}

console.log("-------------------------------------------");

/************** STRETCH EXERCISES **************/
// TASK 9:
//
//     Turn your solution from task 2 into a conditonal expression
//     using the ternary operator. Be sure to comment out task 2!

canVote = age > 18 ? "yes" : "no";
console.log(canVote);
console.log("-------------------------------------------");

// TASK 10:
//
//     .filter() will loop through a provided array and produce a new array
//     that only contains some of the items. Each item in the array runs through
//     a function. If the function returns true, the item is included in the new array.
//
//     EXAMPLE:
    let words = ["the", "world", "is", "round", "like", "an", "orange"];
    // let shortWords = words.filter(function(word) => {
    //   return word.length <= 3
    // })
//
//      console.log(shortWords) will return [ 'the', 'is', 'an' ]
//
//     Uncomment the words array. Declare a new variable called wordsThatStartWithW.
//     Filter the array so that it returns any word that has the first letter equal
//     to 'w'. Console log wordsThatStartWithW. Hint: you can use indexes on a word!

let wordsThatStartWithW = words.filter((word) => {
  return word[0] == "w";
})
console.log(wordsThatStartWithW);
console.log("-------------------------------------------");

// TASK 11:
//
//     Research the spread operator. Next, create a new array called 'moreEvens'.
//     Using the spread operator, this array should contain all the numbers from the
//     evens array along with the numbers 22 and 24. Console log the moreEvens array.

let evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

let moreEvens = [...evens, 22, 24];
console.log(moreEvens);

