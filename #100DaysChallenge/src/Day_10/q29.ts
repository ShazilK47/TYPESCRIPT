// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

const favourite_fruits: string[] = ["Apple", "Mango", "Banana"];

if (favourite_fruits.includes("Banana")) {
  console.log("I really like Bananas");
}
if (favourite_fruits.includes("Orange")) {
  console.log("I really like Oranges");
}
if (favourite_fruits.includes("Apple")) {
  console.log("I really like Apple");
}
if (favourite_fruits.includes("Grappes")) {
  console.log("I really like Grappes");
}
if (favourite_fruits.includes("Mango")) {
  console.log("I really like Mangos");
}
