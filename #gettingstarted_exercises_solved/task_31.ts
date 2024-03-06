let userNames: string[] = ["admin", "shazil", "ali", "ahmed", "abdullah"];

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] == "admin") {
    console.log(
      `Hello ${userNames[i]}! would you like to see a status report?`
    );
  } else {
    console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
  }
}

if (userNames.length <= 0) {
  console.log("We need to find some users!");
}

//removing all the elements.
userNames.length = 0;

if (userNames.length == 0) {
  console.log("We need to find some users!");
}
