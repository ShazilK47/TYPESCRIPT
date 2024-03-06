//conditional Tests
let num = 3;
console.log(`Is num = '3'? | predict True`);
console.log(num == 3);

let num2 = "3";
console.log("Is num2 == 3 ? | predict True");
console.log(num2 == "3");

console.log(`Is num == num2 | predict True `);
console.log(num == Number(num2));

let str = "House";
let str2 = "department";
console.log(`Is str == house? | predict True`);
console.log(str == `house`);

console.log(`Is str2 == department? | predict True`);
console.log(str2 == "department");

console.log(`Is str2 == Department? | predict False`);
console.log(str2 == `Department`);

console.log(`Is str2 == depArtment? | predict False`);
console.log(str2 == "depArtment");

console.log(`Is str2 == departmenT? | predict False`);
console.log(str2 == "departmenT");

console.log(`Is str == str2 | predict False`);
console.log(str == str2);

console.log(`Is str == housf? | predict False`);
console.log(str == `housf`);

console.log(`Is str.toUpperCase() == HOUSE? | predict True`);
console.log(str.toUpperCase() == `HOUSE`);

console.log(`Is str.toUpperCase() == House? | predict False`);
console.log(str.toUpperCase() == `House`);

console.log(`Is str.toUpperCase() == House? | predict False`);
console.log(str.toLowerCase() == `House`);

console.log(`Is str.toUpperCase()| predict False`);
console.log(str.toUpperCase() == `House`);
