import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let circle = new Circle(5, 10, 20);
let rectangle = new Rectangle(1, 2, 20, 40);

let shapeList: Shape[] = [];

shapeList.push(circle);
shapeList.push(rectangle);

for(let curr of shapeList){
    console.log(curr.getInfo());
    console.log(`Area = ${curr.calculateArea()}`);
    console.log();
}