/* 
    BuiltInTypes in JavaScript
    1. Numbers;
    2. Strings;
    3. Booleans;
    4. Null;
    5. Undefined;
    6. Objects;


    More BuiltIntypes in TypeScript
    7.any
    8.unknown
    9.never
    10.enum
    11.tuple
*/

// getting started with datatypes in typescript
console.log("\nBuiltInTypes \n");

let sale: number = 123_4555_546;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //any type                      if we declare a variable and don't initialize it. typescript compiler assume it's type as "any";

//implicity: automatically;  explicity: manualy;
//implicity: typescript compiler will automatically detect the type of the variable
//explicity: we have to tell the typescript compiler what type of variable we are using
