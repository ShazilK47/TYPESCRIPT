// # The Nullish Coaelscing Operator.
let speed: number | null = null;
let ride = {
  //Falsy Values(undefined , null , ' '  , 0);
  //?? => Nullish Coaelscing Operator.
  speed: speed ?? 30, //means if speed !== null or undefined.
};
