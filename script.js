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




