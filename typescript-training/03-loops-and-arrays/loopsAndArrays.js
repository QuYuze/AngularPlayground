/*
for(let i=0; i<5; i++){
    console.log(i);
}
*/
var reviews = [5, 4, 3, 5, 7];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The average of review is " + average);
