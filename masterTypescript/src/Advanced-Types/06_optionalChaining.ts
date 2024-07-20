//Optional Chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

// problem
// if(customer !== null  && customer !== undefined){
// console.log(customer.birthday);
// }

//solution: ?. optional chaining     (?. optional element access operator)
console.log(customer?.birthday);
