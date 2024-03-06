function make_shirt(
  size: string = "large",
  messsage: string = "I love Typescrit"
) {
  console.log(`Making a shirt of size ${size} with message "${messsage}"`);
}

make_shirt();
make_shirt("medium");
make_shirt("Small", "Want to be a Programmer");
