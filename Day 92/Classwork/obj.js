// Object Literal
let student = {
    name: "Alice",
    age: 20,
    major: "Computer Science",
    displayInfo: function() {
        console.log(`Student: ${this.name}, Age: ${this.age}, Major: ${this.major}`);
    }
};

// Constructor Function for a Book
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.summary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

let myBook = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(myBook.summary());