//tupple: fixed lenght array where each element has a different value;

console.log("\n Tupple \n");

let user: [number, string] = [1, "Shazil"];
console.log(user[1].length);
user[1] = "Abdullah";
user.push(3); //this is an error(gap) in typescript. hope will resolve in future.

//Best Practice: Tupples are useful when we have only two values
//                and we want to make sure that both values are of different types.
