// Enum:  Represents a list of related contants
console.log("\nEnum\n");

//syntax:
//enum {value1, value2, value3, ...}
//PascalCase
enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
