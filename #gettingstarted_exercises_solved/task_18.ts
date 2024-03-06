// ****************** Original list *******************
let favPlaces: string[] = [
  "Saudi Arab",
  "America",
  "Kashmir",
  "London",
  "GreenLand",
];

console.log("Original Array\n");
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

// function of sorted Array in Alphatatic Order...
function sortedArray(arr: string[]) {
  let arr2 = arr.slice().sort();
  arr2.forEach((item) => {
    console.log(`${arr2.indexOf(item)}: ${item}`);
    return arr2;
  });
}

console.log("\nSorted Array(in Aplhabatic Order\n");
sortedArray(favPlaces);

//Original Array.

console.log(`\nNow! again we check the original Array\n`);
favPlaces.forEach((place) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

// FUNCTION OF SORTED ARRAY IN REVERSE ALPHATIC ORDER...
console.log(`\nOkay! now i am gonna print in reverse alphabatical order\n`);
function reverseAlphabaticOrder(arr: string[]) {
  let arr2 = arr.slice().sort();
  arr2.reverse();
  arr2.forEach((item) => {
    console.log(`${arr.indexOf(item)}: ${item}`);
  });
}

reverseAlphabaticOrder(favPlaces);

//ORIGINAL ARRAY...
console.log(`\nAgain original Array\n`);
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

//Revesrsed order of original Array...

favPlaces.reverse();
console.log(`\nReversed order of original Array\n`);
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

//Again reversed the order of Original Array...

favPlaces.reverse();
console.log(`\nReversed again the original array\n`);
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

//Original Array in alphabatical order...
favPlaces.sort();
console.log(`\noriginal array in alphatabic order\n`);
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});

//original Array in reversed Alphabatical order...
favPlaces.reverse();
console.log(`\noriginal array in Reverse alphatabic order\n`);
favPlaces.forEach((place: string) => {
  console.log(`${favPlaces.indexOf(place)}: ${place}`);
});
