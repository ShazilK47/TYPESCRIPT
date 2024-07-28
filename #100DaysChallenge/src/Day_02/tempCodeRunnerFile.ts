//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let mrname: string = "   Shazil Khan   ";
console.log(mrname);
console.log(mrname.trimStart);
console.log(mrname.trimEnd);

console.log(mrname.trim);
