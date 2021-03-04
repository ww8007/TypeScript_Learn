interface Shape {
   // 함수가 존재, 결과물: number
   getArea(): number;
}

class Circle implements Shape {
   constructor(public radius: number) {}
   getArea() {
      return this.radius * this.radius * Math.PI;
   }
}

class Rectagle implements Shape {
   width: number;
   height: number;

   constructor(width: number, heigth: number) {
      this.width = width;
      this.height = heigth;
   }
   getArea() {
      return this.width * this.height;
   }
}

const circle: Circle = new Circle(5);
const rec: Rectagle = new Rectagle(2, 5);

function getCircleArea(circle: Circle) {
   return circle.getArea();
}

const shapes: Shape[] = [circle, rec];
shapes.forEach((shape) => {
   console.log(shape.getArea());
});
