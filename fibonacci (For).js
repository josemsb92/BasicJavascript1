//Get fibonacci sequence through a "for" loop.
let myArray = [1, 2];

for(i = 0; i < 34; i++) {
    myArray.push(myArray[i] + myArray[i + 1]);
}
console.log(myArray);