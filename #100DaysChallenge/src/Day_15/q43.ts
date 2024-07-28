// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];
let magicians_name_copy: string[] = [...magicians_name];

function show_magicians(magicians_name: string[]) {
  magicians_name.forEach((magician) => {
    console.log(`${magician}`);
  });
}

function make_great(magicians: string[]) {
  magicians.forEach((magician) => {
    magicians_name_copy[
      magicians_name_copy.indexOf(magician)
    ] = `The Great ${magician}`;
  });
}

make_great(magicians_name_copy);
console.log(`\nCopy of array`);
show_magicians(magicians_name_copy);

console.log(`\nOriginal array`);
show_magicians(magicians_name);
