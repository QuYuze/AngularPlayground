"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let golfCoach = new GolfCoach_1.GolfCoach();
let cricketCoach = new CricketCoach_1.CricketCoach();
let coachList = [];
coachList.push(golfCoach);
coachList.push(cricketCoach);
for (let curr of coachList) {
    console.log(curr.getDailyWorkout());
}
