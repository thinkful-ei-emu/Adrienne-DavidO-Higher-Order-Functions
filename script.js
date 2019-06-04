'use strict';

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);



function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  } return newArray;
}

console.log(filter(['Chris', 'Casey', 'Joe', 'James'],function(name){
    return name.length < 5;
}));

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES





function hazardWarningCreator(typeOfWarning){

  let warningCounter = 0;
  return function(location){
    warningCounter += 1;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };

}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Turn around don\'t drown');
const tornadoWarning = hazardWarningCreator('Tornado Warning!!!');


rocksWarning('Main st and Pacific Ave');
rocksWarning('East South');
rocksWarning('The dogs place');
floodWarning('San Antonio St and Cross St.');
floodWarning('St ST and ST Rd..');
floodWarning('My Place and Your Place.');
tornadoWarning('Boulder st. and main');
tornadoWarning('Santiago and 5th');
tornadoWarning('90th and 11th and main');




let turtleSteps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
function forwardandLeft(value){
  return value[0] >= 0 && value[1] >= 0;
}
let turtleFiltered = turtleSteps.filter(forwardandLeft);

// function isBigEnough(value) {
//     return value >= 10;
//   }
//   var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]

function mapping(step){
  return step[0] + step[1];
}

let turtleMap = turtleFiltered.map(mapping); 
console.log(turtleMap);

function stepCount(step,i){
    console.log(` Movement #${i + 1}: ${step} steps`);
}
turtleMap.forEach(stepCount);


// console.log(turtlefiltered)
// //   .map(turtleSteps[0] + turtleSteps[1])
//   //.forEach()
// ;

/*function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++){
    if (fn(arr[i]) === true){
      newArray.push(arr[i]);
    }
  } return newArray;
}*/

