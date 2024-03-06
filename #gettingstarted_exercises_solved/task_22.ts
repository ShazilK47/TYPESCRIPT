//Intential Error:
let myfavCountires: string[] = [
  "Pakistan",
  "2",
  "Saudi arabia",
  "Turkey",
  "Japan",
  "China",
  "Yemen",
  "Palestine",
];
console.log(`\n\t\tList of my Favourite Countires\n`);
myfavCountires.forEach((country) => {
  console.log(`\t\t${myfavCountires.indexOf(country) + 1}: ${country}`);
});
