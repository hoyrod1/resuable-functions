console.log(
  "============================= Reusable Functions ============================="
);
console.log(
  "=============================================================================="
);
console.log(
  "================================ Code Exanples ==============================="
);
/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 *
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.
 */
// function reverseString(str) {
//   const strArray = str.split("");
//   const revArray = strArray.reverse();
//   const revString = revArray.join("");
//   return revString;
// }

// function reverseString2(str) {
//   return str.split("").reverse().join("");
// }

// function reverseString3(str) {
//   let revString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     revString += str[i];
//   }
//   return revString;
// }

// function reverseString4(str) {
//   if (str === "") return "";
//   else return reverseString4(str.substr(1)) + str.charAt(0);
// }

// function reverseString5(str) {
//   return str === "" ? "" : reverseString5(str.substr(1)) + str.charAt(0);
// }

// console.log(reverseString("!dlroW olleH"));
// console.log(reverseString2("!dlroW olleH"));
// console.log(reverseString3("!dlroW olleH"));
// console.log(reverseString4("!dlroW olleH"));
// console.log(reverseString5("!dlroW olleH"));
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
console.log(
  "=============================================================================="
);
