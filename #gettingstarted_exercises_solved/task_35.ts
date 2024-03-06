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
