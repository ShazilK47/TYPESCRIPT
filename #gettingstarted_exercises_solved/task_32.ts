const current_users: string[] = [
  "shazil",
  "abdullah",
  "bilal",
  "talha",
  "hamamd",
  "ali",
];

let new_users = ["ahmed", "subhan", "ali", "abdul hadi", "abdullah"];

for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i])) {
    console.log(
      `${new_users[i]}! username unavailable! please enter a new username.`
    );
  } else {
    console.log(`${new_users[i]}! username available`);
  }
}
