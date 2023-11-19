function Circle() {
    this.radius = parseFloat(prompt("Enter the radius of the circle: "));
}

Circle.prototype.calculateArea = function () {
    const area = Math.PI * Math.pow(this.radius, 2);
    return area;
};

const circle1 = new Circle();
const area = circle1.calculateArea();
console.log(`The area of the circle with radius ${circle1.radius} is ${area.toFixed(2)}`);
