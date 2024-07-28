// Question 18:

// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its
// order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

const fav_places = ["Kashmir", "Saudi Arab", "America", "Ice Land", "Dubai"];

console.log("\n1.Original Array\n");

fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

function sortArray(arr: string[]) {
  let arr2: string[] = arr.slice().sort();
  arr2.forEach((item: any) => console.log(`${arr2.indexOf(item)}: ${item}`));
}

console.log("\n2. Alphabatical Order\n");
sortArray(fav_places);

console.log("\n3.Again Original Array\n");

fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

//Function for reverse alhpatabical order
function reverseOrder(arr: string[]) {
  let arr2 = arr.slice().sort();
  arr2.reverse();
  arr2.forEach((item) => console.log(`${arr2.indexOf(item)}: ${item}`));
}

console.log("\n4.Reverse alphabatical order\n");
reverseOrder(fav_places);

console.log("\n5.Again Original Array\n");

fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

console.log("\n6.Reverse the order Original Array\n");
fav_places.reverse();
fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

console.log("\n7.Again Reverse the order Original Array\n");
fav_places.reverse();
fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

console.log("\n8.Sorting the Original Array in alphabatical order\n");
fav_places.sort();
fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});

console.log("\n9.Again Sorting the Original Array in alphabatical order\n");
fav_places.sort().reverse();
fav_places.forEach((place) => {
  console.log(`${fav_places.indexOf(place)}:${place}`);
});
