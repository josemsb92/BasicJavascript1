//Create a program that save into an array the fibonacci number until it reach the maximum value given using a while loop.

let myArray = [1,2];

while (myArray.length < 10 ){

    myArray.push((myArray[myArray.length-1]) + (myArray[myArray.length-2]));
}

console.log(myArray);


