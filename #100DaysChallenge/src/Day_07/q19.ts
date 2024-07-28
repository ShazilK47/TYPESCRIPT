//Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

//From question 14

let myGuests = ["Dr Israr Ahmed", "Javed Ahmed Ghamdi", "Elon Musk"];

myGuests.forEach((guest) => {
  console.log(
    `Mr. ${guest}, you are invited to the dinner at my home by 8:00pm`
  );
});

console.log(`\nTotal people invited to the dinner: ${myGuests.length}`);
