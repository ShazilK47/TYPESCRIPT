// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature.
// Print the Object that’s returned to make sure all the information was
// stored correctly.

// function car_info(manufacturer: string, model: string, ...extras: string[]) {
//   let car: { [key: string]: any } = {
//     manufacturer: `${manufacturer}`,
//     model: `${model}`,
//     ...extras,
//   };

//   return car;
// }
// const carInfo = car_info("Toyota", "Camry", {color: blue}, "navigation");
// console.log(carInfo);

function make_car(
  manufacturer: string,
  model: string,
  ...extras: [string, any][]
) {
  let car: { [key: string]: any } = { manufacturer, model };
  extras.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
