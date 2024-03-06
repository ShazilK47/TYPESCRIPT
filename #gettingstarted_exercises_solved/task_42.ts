let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];

function show_magicians(nameOfMagicians: string[]): void {
  nameOfMagicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians_name);

function make_great(arr: string[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The great ${arr[i]}`;
  }
}

console.log("\n");
make_great(magicians_name);

show_magicians(magicians_name);
