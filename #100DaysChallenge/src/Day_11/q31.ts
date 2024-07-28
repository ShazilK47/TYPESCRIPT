//Question 31: No Users: Ensure your user list isn’t empty.

// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

//continue from exercise 30

// user_names.length = 0;

// if (user_names.length <= 0 || user_names == null || user_names == undefined) {
//   console.log("We need to find more users");
// }

let user_names: string[] = [
  "admin",
  "shazil",
  "abdullah",
  "Talha",
  "Hammad",
  "Taha",
  "Bilal",
];

user_names.forEach((user) => {
  if (user.toLowerCase() === "admin") {
    console.log(`Hello ${user}, would ou like to see a status report?`);
  } else {
    console.log(`Hello ${user}, thank you for loggin in again`);
  }
});

user_names.length = 0;
console.log(user_names);

if (user_names.length <= 0 || user_names == null || user_names == undefined) {
  console.log("We need to find more users");
}
