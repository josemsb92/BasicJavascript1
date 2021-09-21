//Voltear un string y ponerlo al reves
const myString = "El veloz murciélago hindú comía feliz cardillo y kiwi";
let reverseString="";
for (i = myString.length - 1; i >= 0 ; i--) {
    reverseString += myString[i];
}
console.log(reverseString);