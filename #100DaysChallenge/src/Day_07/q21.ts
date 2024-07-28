//Question 21: Think of something you could store in a TypeScript Object.
//Write a program that creates Objects containing these items.

//solution:

//we can use type aliasis to define types of properties in an object
// type Tuser = {
//   username: string;
//   email: string;
//   password: number;
//   age: number;
//   gender: string;
// };

//we can also define interface:
interface user {
  [key: string]: any;
}

let user: user = {
  username: "Shazil Khan",
  email: "Shazil.akn@gmail.com",
  password: 12345,
  age: 20,
  gender: "",
};

console.log(user);

//other practice
//we can access properties from an object like this:
console.log(user.username); // =>  . notation
console.log(user["email"]); // => square bracket notation
console.log(user.password);

//we can add property inside the object like this( using dot(.) notation)
user["age"] = 21;
user.gender = "Male";

//now we can also loop through object using "for-in"loop
console.log(`\n`); // => skip a line
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
