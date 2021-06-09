

const input = require('readline-sync');
let str = "LaunchCode";

//hello!!!!! from CArol!


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(0,3);
//str.slice(3);
console.log(str.slice(3) + newStr);


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`Im glad to have applied for ${str} !`);

//b) Modify your to accept user input. Query the user to enter the number of letters that will be relocated.

let info = (Number(input.question("How many letters would you like to relocate? ")));

let newEnd2 = str.slice (0,info);
str.slice(info);

//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (info > 10) {
  console.log(`Your answer, ${info}, is invalid. "Launchcode" only has 10 letters. We defaulted your answer to 3. Using 3 letters, the word ${str} can be converted to ${str.slice(3) + newStr}.`);
} else {
    console.log(str.slice(info) + newEnd2);
}
