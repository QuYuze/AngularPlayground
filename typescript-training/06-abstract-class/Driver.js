"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let circle = new Circle_1.Circle(5, 10, 20);
//console.log(circle.getInfo());
let rectangle = new Rectangle_1.Rectangle(1, 2, 20, 40);
//console.log(rectangle.getInfo());
let shapeList = [];
shapeList.push(circle);
shapeList.push(rectangle);
for (let curr of shapeList) {
    console.log(curr.getInfo());
    console.log(`Area = ${curr.calculateArea()}`);
    console.log();
}
