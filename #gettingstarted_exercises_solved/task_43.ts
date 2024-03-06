let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];
let magicians_name_copy: string[] = [];

//copy of array.
for (var i = 0; i < magicians_name.length; i++) {
  magicians_name_copy[i] = magicians_name[i];
}

function show_magicians(nameOfMagicians: string[]): void {
  nameOfMagicians.forEach((magician) => {
    console.log(magician);
  });
}

function make_great(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The great ${arr[i]}`;
  }
}

make_great(magicians_name_copy);

show_magicians(magicians_name);
console.log("\n");
show_magicians(magicians_name_copy);
