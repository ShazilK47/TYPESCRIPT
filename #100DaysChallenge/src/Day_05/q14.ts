//Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

let myGuests = ["Dr Israr Ahmed", "Javed Ahmed Ghamdi", "Elon Musk"];

myGuests.forEach((guest) => {
  console.log(
    `Mr. ${guest}, you are invited to the dinner at my home by 8:00pm`
  );
});
