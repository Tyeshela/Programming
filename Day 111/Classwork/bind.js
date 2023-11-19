const person = {
    name: "John",
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  const greetJohn = person.sayHello.bind(person);
  greetJohn(); // Output: Hello, John!
  