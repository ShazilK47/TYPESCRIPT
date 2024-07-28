//Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Shazil khan";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(toTitleCase(personName));

function toTitleCase(str: string): string {
  const newStr = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");
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
