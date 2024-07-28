//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out
//a new set of invitations with a replacement guest.

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
