function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };
  
  greet.call(person1, "Hi"); // Output: Hi, Alice!
  greet.call(person2, "Hello"); // Output: Hello, Bob!
  