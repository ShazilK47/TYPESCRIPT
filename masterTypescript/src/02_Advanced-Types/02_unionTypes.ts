//Union Types
//we can define the function parameter for more then one time.

console.log("Union Type");
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
console.log(kgToLbs(22));
