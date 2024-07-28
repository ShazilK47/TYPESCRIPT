//Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current date at the top of each program file.
//Then, write one sentence describing what the program does.

//Day_01: Queston #03
//Name: Shazil Khan
//Date: 7/24/2024

let personName: string = "Shazil khan";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

function toTitleCase(str: string): string {
  const newStr = str
    .split(" ") //split the string into array
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase()) //Title Case each string
    .join(" "); //join the array into string
  return newStr;
}

//let's do step by step toTitleCase
let str1 = "Abdullah khan";
const str2 = str1.split(" "); //string into array =>
console.log(str2); // => ['Abdullah', 'khan']

const str3 = str2.map(
  (word) => word[0].toUpperCase() + word.substring(1).toLowerCase()
);
console.log(str3); // ['Abdullah', 'Khan']

const str4 = str3.join(" "); //.join => converts array to string
console.log(str4); // => Abdullah Khan
