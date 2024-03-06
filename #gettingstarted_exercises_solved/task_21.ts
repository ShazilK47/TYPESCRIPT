interface myDetails {
  //By defining the MyDetails interface,
  //This helps TypeScript understand the structure of myDetails and prevents errors when iterating over its keys.
  [key: string]: any;
}

var myDetails: myDetails = {
  Name: "Shazil Khan",
  Age: 19,
  gender: "Male",
  Education: "intermediate",
};

//okay now we are gonna print that object.. using for of loop.

console.log("\nSo here is my Details\n");
for (let details of Object.keys(myDetails)) {
  console.log(`${details}: ${myDetails[details]}`);
}
