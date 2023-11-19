function Student() {
    this.firstName = prompt("Enter the first name of the student: ");
    this.lastName = prompt("Enter the last name of the student: ");
    this.grades = [];

    let numGrades = parseInt(prompt("Enter the number of grades: "));
    for (let i = 0; i < numGrades; i++) {
        this.grades.push(parseFloat(prompt(`Enter grade ${i + 1}: `)));
    }
}

Student.prototype.calculateAverage = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

const student1 = new Student();
const average = student1.calculateAverage();
console.log(`Average Grade for ${student1.firstName} ${student1.lastName}: ${average.toFixed(2)}`);
