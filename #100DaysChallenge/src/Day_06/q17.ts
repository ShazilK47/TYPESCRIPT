// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

//continue from question 16
let myGuests: string[] = ["Dr Israr Ahmed", "Javed Ahmed Ghamdi", "Elon Musk"];

myGuests.forEach((guest) => {
  console.log(
    `Mr. ${guest}, you are invited to the dinner at my home by 8:00pm`
  );
});

console.log(
  `\nUnfortunatily, Mr. ${myGuests[2]}, will not be able to come to dinner\n`
);

myGuests[2] = "Muhammad Ali";
myGuests.forEach((guest) => {
  console.log(
    `Mr. ${guest}, you are invited to the dinner at my home by 8:00pm`
  );
});

//as we can manage more guests so let's add more guests
console.log(`\nWe found a bigger dinner table\n`);

myGuests.unshift("Dr Iqbal");
myGuests.splice(2, 0, "Jinnah");
myGuests.push("Syed modudi");
console.log(myGuests);

myGuests.forEach((guest) => {
  console.log(
    `Mr. ${guest}, you are invited to the dinner at my home by 8:00pm`
  );
});

console.log("\nOh! i can invite only two guests\n");

// for (let i = myGuests.length - 1; i >= 2; i--) {
//   console.log(`Sorry, ${myGuests[i]} i can't invite you to the dinner tonight`);
//   myGuests.pop();
// }

// console.log("\n");
// myGuests.forEach((guest) =>
//   console.log(`Mr. ${guest}, you are still invited to the dinner tonight`)
// );

//can we do it in other way
//let's check
for (let i = myGuests.length - 1; i >= 0; i--) {
  if (i < 2) {
    console.log(
      `Mr. ${myGuests[i]}, you are still invited to the dinner tonight`
    );
  } else {
    console.log(
      `Sorry, ${myGuests[i]} i can't invite you to the dinner tonight`
    );
    myGuests.pop();
  }
}
