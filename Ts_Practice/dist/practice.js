"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectagle {
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
    }
    getArea() {
        return this.width * this.heigth;
    }
}
const circle = new Circle(5);
const rec = new Rectagle(2, 5);
function getCircleArea(circle) {
    return circle.getArea();
}
const shapes = [circle, rec];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
