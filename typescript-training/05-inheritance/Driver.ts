import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let shape = new Shape(10, 15);
//console.log(shape.getInfo());

let circle = new Circle(5, 10, 20);
//console.log(circle.getInfo());

let rectangle = new Rectangle(1, 2, 20, 40);
//console.log(rectangle.getInfo());

let shapeList: Shape[] = [];
shapeList.push(shape);
shapeList.push(circle);
shapeList.push(rectangle);

for(let curr of shapeList){
    console.log(curr.getInfo());
}