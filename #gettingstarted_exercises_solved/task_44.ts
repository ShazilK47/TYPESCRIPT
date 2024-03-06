function sandwich_order(...items: string[]): void {
  for (let item of items) {
    console.log(item);
  }
}

sandwich_order("Ham", "Tomato", "Lettuce");
console.log("\n");
sandwich_order("Cheese", "Turkey");
console.log("\n");
sandwich_order("Peanut Butter", "Jelly", "Banana");
