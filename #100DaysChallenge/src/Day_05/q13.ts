// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportation: string[] = ["Car", "Bike", "Bicycle", "Private Jet"];

console.log(`I want to own a ${transportation[3]}`);
console.log(`I love to ride heavy ${transportation[1]}`);
console.log(`I am addicted with ${transportation[0]} driving`);
console.log(`Riding ${transportation[2]} daily is good for health fitness`);

//we can also do it with loops
console.log("\n");
transportation.forEach((vehicle: string): undefined => {
  if (vehicle == "Car") {
    console.log(`I am addicted with ${transportation[0]} driving`);
  } else if (vehicle == "Bike") {
    console.log(`I love to ride heavy ${transportation[1]}`);
  } else if (vehicle == "Bicycle") {
    console.log(`Riding ${transportation[2]} daily is good for health fitness`);
  } else if (vehicle == "Private Jet") {
    console.log(`I want to own a ${transportation[3]}`);
  }
});

//note: there is multiple way to do programming . so choose which is best and easier
