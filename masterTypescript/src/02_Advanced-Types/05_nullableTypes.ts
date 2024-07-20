// # nullable types
//we can define the variable as nullable or not nullable.
//typescript is strict in null checking. wo we can't pass null values.

function greetingss(name: string | null) {
  if (name) console.log(`${name.toUpperCase}`);
  else console.log(`hola!`);
}
greetingss(null);
