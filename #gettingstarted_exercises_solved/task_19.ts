console.log("\t\t\tInvitation\n\n");
let guests: string[] = ["Ibrahim", "Bilal", "Talha"];
guests.forEach((guest) => console.log(`it's an invitation for ${guest}`));

console.log(`\n\n${guests[1]} can't manage to come\n`);

guests.splice(1, 1, "Abdullah");

guests.forEach((guest) => {
  console.log(`it's an invitation for ${guest}`);
});

console.log(`\nI found a bigger dinner table\n`);
guests.unshift("Shazil");
guests.splice(2, 0, "Taha");
guests.push("Ali");

guests.forEach((guest) => {
  console.log(`guest ${guests.indexOf(guest)}: ${guest}`);
});

console.log(`The total number of guests invited are: ${guests.length}`);
