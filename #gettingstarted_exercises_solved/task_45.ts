function carInformation(
  manufacturer: string,
  modelName: string,
  ...extras: string[]
) {
  const car: { [key: string]: any } = {
    manufacturer: manufacturer,
    model_Name: modelName,
    ...extras,
  };
  return car;
}

const carInfo = carInformation("Toyota", "Camry", "blue", "navigation");

console.log(carInfo);
