// Question 41: Magicians: Display magician names from an array.
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];

function show_magicians(magicians_name: string[]) {
  magicians_name.forEach((magician) => {
    console.log(`${magician}`);
  });
}

show_magicians(magicians_name);
