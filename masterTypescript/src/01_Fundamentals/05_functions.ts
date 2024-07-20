//Functions
console.log("\n Functions\n");

//syntax:
//function name(parameter1: type, parameter2: type, ...): return type {
//  body of the function
//}

function calculateTax(income: number, taxYear: number = 2012): number {
  //texYear? --> by this we can make the taxYear parameter optional
  if (taxYear < 2024) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(10000, 2022));
