let magicians_name: string[] = ["Samri", "David Copperfield", "Harry Houdini"];

function show_magicians(nameOfMagicians: string[]): void {
  nameOfMagicians.forEach((magician) => {
    console.log(magician);
  });
}

show_magicians(magicians_name);
