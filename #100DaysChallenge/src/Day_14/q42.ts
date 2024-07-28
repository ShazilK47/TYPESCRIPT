// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];

function show_magicians(magicians_name: string[]) {
  magicians_name.forEach((magician) => {
    console.log(`${magician}`);
  });
}

function make_great(magicians: string[]) {
  magicians.forEach((magician) => {
    magicians_name[magicians_name.indexOf(magician)] = `The Great ${magician}`;
  });
}

make_great(magicians_name);

show_magicians(magicians_name);
