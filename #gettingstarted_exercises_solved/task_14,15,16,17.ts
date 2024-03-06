//Task 14
console.log("\t\t\tInvitation\n\n");
let guests: string[] = ["Ibrahim", "Bilal", "Talha"];
guests.forEach((guest) => console.log(`it's an invitation for ${guest}`));

//Task 15
console.log(`\n\n${guests[1]} can't manage to come\n`);

guests.splice(1, 1, "Abdullah");

guests.forEach((guest) => {
  console.log(`it's an invitation for ${guest}`);
});

//Task 16
console.log(`\nI found a bigger dinner table\n`);
guests.unshift("Shazil");
guests.splice(2, 0, "Taha");
guests.push("Ali");

guests.forEach((guest) => {
  console.log(`it's an invitation for ${guest}`);
});

//Task 17
console.log("\nOh! I can invite only two people for dinner\n");

for (let i = guests.length; i > 2; i--) {
  console.log(`Sorry! ${guests[i - 1]} I can't invite you for dinner`);
  guests.pop();
}

console.log("\n");
guests.forEach((guest) => {
  console.log(`${guest}, you are still invited.`);
});

for (let i = guests.length; i != 0; i--) {
  guests.pop();
}

console.log(guests);
