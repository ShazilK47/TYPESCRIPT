//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
// print a message to them.The message should be the same for each person, but personalized with their name.

let friends: string[] = ["Talha", "Taha", "Bilal", "Imran", "Hammad"];
let greeting: string = "Hello";

console.log(`${greeting}, ${friends[0]}`);
console.log(`${greeting}, ${friends[1]}`);
console.log(`${greeting}, ${friends[2]}`);
console.log(`${greeting}, ${friends[3]}`);
console.log(`${greeting}, ${friends[4]}`);

//other way to do this is using 'forEach' loop

friends.forEach((friend: string): undefined => {
  console.log(`Hi, ${friend}`);
});

//we can also do this with "for-of" loops
for (let friend of friends) {
  console.log(`Asslamualikum, ${friend}`);
}
