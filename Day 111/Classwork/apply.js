function introduce(greeting, age) {
    console.log(`${greeting}, I'm ${this.name}, and I'm ${age} years old.`);
  }
  
  const person = { name: "Eve" };
  const args = ["Hi", 30];
  
  introduce.apply(person, args); // Output: Hi, I'm Eve, and I'm 30 years old.
  