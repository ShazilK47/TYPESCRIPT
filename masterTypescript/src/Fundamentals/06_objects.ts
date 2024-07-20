//Objects:

//in javascript object or dynamic
console.log("\n Objects \n");

//syntax:
//let variableName: {key1: type, key2: type, ...} = {
//  key1: value1,
//  key2: value2,
//  ...
//}
//key1, key2, ... are called properties
//value1, value2, ... are called values
//type is the type of the value
//PascalCase

let employee: {
  //declare properties of each value;
  readonly id: number; //readonly: means we cannot change it's value;
  name: string;
  retire: (date: Date) => void; //properties of method
} = {
  id: 1,
  name: "Shazil",
  retire: (date: Date) => {
    console.log(date);
  },
};
