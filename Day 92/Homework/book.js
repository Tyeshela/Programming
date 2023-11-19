function Book() {
    this.title = prompt("Enter the title of the book: ");
    this.author = prompt("Enter the author of the book: ");
    this.year = prompt("Enter the publication year of the book: ");
}

Book.prototype.displayInfo = function () {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Publication Year: ${this.year}`);
};

const book1 = new Book();
book1.displayInfo();
