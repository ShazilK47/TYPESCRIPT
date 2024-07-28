// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

//continue from question 15
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
