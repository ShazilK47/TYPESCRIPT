console.log(`\nI found a bigger dinner table\n`);
guests.unshift("Shazil");
guests.splice(2, 0, "Taha");
guests.push("Ali");

guests.forEach((guest) => {
  console.log(`it's an invitation for ${guest}`);
});