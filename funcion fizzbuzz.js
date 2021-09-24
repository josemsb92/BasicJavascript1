//Si un numero es multiplo de 3, imprime fizz, si es de 5 imprime buzz, si es de 3 y 5 imprime fizzbuzz.
function fizzbuzzKata(number) {
  let multiplo3;
  let multiplo5;
  
  for (step = 0; step * 3 <= number; step++) {
    if (step * 3 == number) {
      multiplo3 = true;
    }
  }

  for (step = 0; step * 5 <= number; step++) {
    if (step * 5 == number) {
      multiplo5 = true;
    }
  }

  if (multiplo3 && multiplo5) {
    console.log("FizzBuzz");
  } else if (multiplo3) {
    console.log("fizz");
  } else if (multiplo5) {
    console.log("buzz");
  }
}

fizzbuzzKata(9);
