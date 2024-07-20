/* 
    BuiltInTypes in JavaScript
    1. Numbers;
    2. Strings;
    3. Booleans;
    4. Null;
    5. Undefined;
    6. Objects;


    More BuiltIntypes in TypeScript
    7.any
    8.unknown
    9.never
    10.enum
    11.tuple
*/

// getting started with datatypes in typescript
console.log("\nBuiltInTypes \n");

let sale: number = 123_4555_546;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //any type                      if we declare a variable and don't initialize it. typescript compiler assume it's type as "any";

//implicity: automatically;  explicity: manualy;
//implicity: typescript compiler will automatically detect the type of the variable
//explicity: we have to tell the typescript compiler what type of variable we are using

//Arrays

console.log("\n Arrays \n");

let number: number[] = [1, 2, 3];
number.forEach((num) => {
  console.log(num);
});

//tupple: fixed lenght array where each element has a different value;

console.log("\n Tupple \n");

let user: [number, string] = [1, "Shazil"];
console.log(user[1].length);
user[1] = "Abdullah";
user.push(3); //this is an error(gap) in typescript. hope will resolve in future.

//Best Practice: Tupples are useful when we have only two values
//                and we want to make sure that both values are of different types.

// Enum:  Represents a list of related contants
console.log("\nEnum\n");

//syntax:
//enum {value1, value2, value3, ...}
//PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

//Functions
console.log("\n Functions\n");

//syntax:
//function name(parameter1: type, parameter2: type, ...): return type {
//  body of the function
//}

function calculateTax(income: number, taxYear: number = 2012): number {
  //texYear? --> by this we can make the taxYear parameter optional
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10000, 2022));

//Objects:

//in javascript object or dynamic
console.log("\n Objects \n");

//syntax:
//let variableName: {key1: type, key2: type, ...} = {
//  key1: value1,
//  key2: value2,
//  ...
//}
//key1, key2, ... are called properties
//value1, value2, ... are called values
//type is the type of the value
//PascalCase

let employee: {
  //declare properties of each value;
  readonly id: number; //readonly: means we cannot change it's value;
  name: string;
  retire: (date: Date) => void; //properties of method
} = {
  id: 1,
  name: "Shazil",
  retire: (date: Date) => {
    console.log(date);
  },
};
