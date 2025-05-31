import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let golfCoach = new GolfCoach();
let cricketCoach = new CricketCoach();

let coachList: Coach[] = [];
coachList.push(golfCoach);
coachList.push(cricketCoach);

for(let curr of coachList){
    console.log(curr.getDailyWorkout());
}