class Person {
    constructor(firstName, lastName, age) {
      this._firstName = firstName;
      this._lastName = lastName;
      this._age = age;
    }
  
    // Setter methods with validation
    setFirstName(firstName) {
      if (typeof firstName === 'string' && firstName.trim() !== '') {
        this._firstName = firstName.trim();
      } else {
        console.log('Invalid first name.');
      }
    }
  
    setLastName(lastName) {
      if (typeof lastName === 'string' && lastName.trim() !== '') {
        this._lastName = lastName.trim();
      } else {
        console.log('Invalid last name.');
      }
    }
  
    setAge(age) {
      if (typeof age === 'number' && age > 0) {
        this._age = age;
      } else {
        console.log('Invalid age.');
      }
    }
  
    // Getter methods
    getFirstName() {
      return this._firstName;
    }
  
    getLastName() {
      return this._lastName;
    }
  
    getAge() {
      return this._age;
    }
  }
  
  // Usage Example
  const person = new Person('John', 'Doe', 30);
  console.log('Initial Person:', person);
  person.setFirstName('');
  person.setLastName('Smith');
  person.setAge(-5);
  console.log('Updated Person:', person);
  console.log('First Name:', person.getFirstName());
  console.log('Last Name:', person.getLastName());
  console.log('Age:', person.getAge());
  