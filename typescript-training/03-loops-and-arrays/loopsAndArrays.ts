
/*
for(let i=0; i<5; i++){
    console.log(i);
}
*/

let reviews: number[] = [5, 4, 3, 5, 7];
let total: number = 0;

for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log("The average of review is " + average);

