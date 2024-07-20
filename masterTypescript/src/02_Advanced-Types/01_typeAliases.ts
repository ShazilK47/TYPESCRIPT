//Types Alises
//DRY rule--> don't repeat yourself
//make code easy and avoid repetation

type Employee = {
  readonly id: number;
  name: string;
  retire: () => string;
};

let employe: Employee = {
  id: 1,
  name: "Shazil",
  retire: () => {
    return "10thJuly2024";
  },
};

console.log(employe.retire);
