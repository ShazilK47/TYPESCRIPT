//> Person Name in Lowercase:
let personName: string = "Zia Khan";
let inLowerCase: string = personName.toLowerCase();
console.log(inLowerCase);

//> Person Name in Uppercase:
let inUpperCase: string = personName.toUpperCase();
console.log(inUpperCase);

//> Person Name in title Case:
//okay so let's begin ...
//i'm going to create a titlecase function

function titleCase(str: any) {
  str = str.toLowerCase(); //step 1: to lower case.
  str = str.split(" "); //step 2: split the string.

  for (let i = 0; i < str.length; i++) {
    //step 3: for loop to iterate through each element of string.

    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

//> Person Name in titleCase:
console.log(titleCase(personName));
