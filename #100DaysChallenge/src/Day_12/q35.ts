// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

const animals: string[] = ["owl", "bat", "firefly"];
let owlQuality = "Owls are well-known nocturnal birds of prey.";
let batQuality = "Bats are the only mammals capable of sustained flight";
let fireflyQuality =
  "Fireflies, also known as lightning bugs, are insects that are most active at night.";

for (var i = 0; i < animals.length; i++) {
  if (animals[i] == "owl") {
    console.log(`${animals[i]}: ${owlQuality}`);
  } else if (animals[i] == "bat") {
    console.log(`${animals[i]}: ${batQuality}`);
  } else if (animals[i] == "firefly") {
    console.log(`${animals[i]}: ${fireflyQuality}`);
  }
}

console.log(
  "\nThese animals have evolved adaptations that allow them to thrive in the darkness of the night, demonstrating the diverse ways in which organisms have adapted to different environmental niches and lifestyles.\n"
);
