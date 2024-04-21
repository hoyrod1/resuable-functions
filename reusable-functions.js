console.log(
  "============================= Reusable Functions ============================="
);
console.log(
  "=============================================================================="
);
console.log(
  "======================== Part1: Thinking Functionally ========================"
);
//- This Function returns the sum of the array ---------------------------------//
// An array of numbers
const sumNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// This function returns the sum of an array
function sumOfNumbers(numArrParam) {
  let totalNumCount = 0;
  for (let i = 0; i < numArrParam.length; i++) {
    totalNumCount += numArrParam[i];
  }
  return totalNumCount;
}

console.log(sumOfNumbers(sumNumArr));
//==============================================================================//
//- This Function returns the average of the array -----------------------------//
// An array of numbers
const averageNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// This function returns the sum of an array
function averageOfNumbers(averageNumArrParam) {
  let averageCount = 0;
  for (let i = 0; i < averageNumArrParam.length; i++) {
    averageCount += averageNumArrParam[i];
  }
  return averageCount / averageNumArrParam.length;
}
// averageOfNumbers(averageNumArr);
console.log(averageOfNumbers(averageNumArr));
//==============================================================================//
//- This Function returns the longest string in the array ----------------------//
// An array of strings
const arrayOfStrings = [
  "Rodney",
  "Raymond",
  "Marie",
  "Lisa",
  "Sandra",
  "Patricia",
];
// This function returns the longes string in the array
function resturnLongestString(arrayOfStrings) {
  let theLongestString = "";
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > theLongestString.length) {
      theLongestString = arrayOfStrings[i];
    }
  }
  return theLongestString;
}
resturnLongestString(arrayOfStrings);
// console.log(arrayOfStrings[0].length < arrayOfStrings[5].length);
//==============================================================================//
//==============================================================================//
// This Function returns an array of strings greater than a number in the array //
// An array of strings and a number
const arrayOfStringsAndNumber = [
  "Hello",
  5,
  "Goodbye",
  "Morning",
  "Night",
  "Day",
  "Peace",
];
function returnArrayOfStrings(arrayOfStringsAndNumber) {
  let arrayOfStrings = [];
  let testNumber = "";

  for (let i = 0; i < arrayOfStringsAndNumber.length; i++) {
    if (typeof arrayOfStringsAndNumber[i] === "number") {
      testNumber = arrayOfStringsAndNumber[i];
    }

    if (arrayOfStringsAndNumber[i].length > testNumber) {
      arrayOfStrings.push(arrayOfStringsAndNumber[i]);
    }
  }

  return arrayOfStrings;
  // return testNumber;
}
console.log(returnArrayOfStrings(arrayOfStringsAndNumber));
// console.log(arrayOfStringsAndNumber[0].length > arrayOfStringsAndNumber[1]);
// console.log(typeof arrayOfStringsAndNumber[1]);
// console.log(typeof arrayOfStringsAndNumber[0]);
//==============================================================================//
// This Function returns every number between 1 and a number stored in "n" -----//
// A variable with a number
const n = 10;

function recurseNumber(numberFifty, startNum) {
  if (startNum > numberFifty) {
    return;
  }
  console.log(startNum);
  recurseNumber(n, startNum + 1);
}
recurseNumber(n, 1);
//==============================================================================//
//==============================================================================//
console.log(
  "======================== Part2: Thinking Methodically ========================"
);
const arrayOfObjects = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
//==============================================================================//
// This Function sorts this array of objects by the objects age property -------//
function sortArrayByAge(arrayOfObjects) {
  return arrayOfObjects.sort((objectA, objectB) => objectA.age - objectB.age);
}
console.log(sortArrayByAge(arrayOfObjects));
// console.log(arrayOfObjects[0].age);
//==============================================================================//
//==============================================================================//
// This Function will remove entries with an age greater than 50 ---------------//
function filterArrayByAge(arrayOfObjects) {
  return arrayOfObjects.filter((objAge) => objAge.age < 50);
}
console.log(filterArrayByAge(arrayOfObjects));
//==============================================================================//
//==============================================================================//
// This Function will change the object key "occupation" to "job"       --------//
// and add 1 to the age value                                           --------//
function changeArrayObjKeyAndValue(arrayOfObjects) {
  // This maps the array of objects & changes the object key "occupation" to "job"
  let arrObjKey = arrayOfObjects.map(({ occupation: job, ...objKey }) => ({
    job,
    ...objKey,
  }));
  // This maps the array of objects and increases the age by one
  return arrObjKey.map((objAge) => {
    return { ...objAge, age: Number(objAge.age) + 1 };
  });
}
console.log(changeArrayObjKeyAndValue(arrayOfObjects));
//==============================================================================//
//==============================================================================//
// This Function will calculate the sum of the ages and calculate the average --//
function sumAveragOfArrayObjAge(arrayOfObjects) {
  let arrayOfObjectsSum = arrayOfObjects.reduce((ageA, ageB) => ({
    age: Number(ageA.age) + Number(ageB.age),
  }));
  arrayOfObjectsAverage = Number(arrayOfObjectsSum.age) / arrayOfObjects.length;
  return arrayOfObjectsAverage;
}
console.log(sumAveragOfArrayObjAge(arrayOfObjects));
//==============================================================================//
//==============================================================================//
console.log(
  "========================= Part3: Thinking Critically ========================="
);
//------------------------------------------------------------------------------//
// Object age incrementor pass by value
let ageObjectIncr = { firstname: "Rodney", lastname: "St. Cloud", age: 50 };
function ageIncremetorFunc(ageObjectIncr) {
  if (!ageObjectIncr.hasOwnProperty("age")) {
    ageObjectIncr.age = 20;
  }
  return ageObjectIncr.age++;
}
ageIncremetorFunc(ageObjectIncr);
console.log(ageObjectIncr);
//------------------------------------------------------------------------------//
// Object age incrementorpass by reference
let ageObjectIncr2 = { firstname: "Rodney", lastname: "St. Cloud" };
function ageIncremetorFunc2(ageObjectIncr2) {
  if (!ageObjectIncr2.hasOwnProperty("age")) {
    ageObjectIncr2.age = 0;
  }
  const ageObjectIncr2Ref = {
    firstname: null,
    lastname: null,
    age: null,
    updated_at: new Date(),
  };
  ageObjectIncr2Ref.firstname = ageObjectIncr2.firstname;
  ageObjectIncr2Ref.lastname = ageObjectIncr2.lastname;
  ageObjectIncr2Ref.age = ageObjectIncr2.age + 10;

  return ageObjectIncr2Ref;
}
let newAgeObjectIncr2 = ageIncremetorFunc2(ageObjectIncr2);
console.log(ageObjectIncr2);
console.log(newAgeObjectIncr2);
// ageObjectIncr2Ref.age + 20;
//==============================================================================//
console.log("==================Practice======================");
