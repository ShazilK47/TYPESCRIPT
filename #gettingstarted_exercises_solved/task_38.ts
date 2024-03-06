const cityOfPaksitan: string[] = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Faisalabad",
  "Gujranwala",
  "Rawalpindi",
  "Sialkot",
  "Multan",
  "Gujrat",
  "Hyderabad",
];

function describe_city(city: string, country: string = "Pakistan"): void {
  if (cityOfPaksitan.includes(city)) {
    console.log(`${city} is in ${country}`);
  } else {
    console.log(`${city} is not in ${country}`);
  }
}

describe_city("Lahore");
describe_city("Mumbai");
describe_city("Karachi");
