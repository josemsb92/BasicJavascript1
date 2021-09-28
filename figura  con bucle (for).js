// Use a "for" loop to make a given figure (right arrow).

// for (i = 1; i <= 5; i++){
//     let star = "";
//     for (j = 0; j < i; j++){
//         star += "*"
//     }
//     console.log(star)
// }

// for (i = 4; i >= 1; i--){
//     let star = "";
//     for (j = 0; j < i; j++){
//         star += "*"
//     }
//     console.log(star)
// }

const arrow = 15;
let half = (arrow/2);
//Entra en bucle filas iniciado a 1 hasta que sea igual de alto que arrow
for (i = 1; i <= arrow; i++) {
  //Cada iteracion del bucle, vaciamos la variable fig  
  let fig = "";
  //Si la i del primer bucle es mayor de la mitad de arrow, entrará en este bucle, si no pasara al siguiente
  if (i > (arrow / 2)) {
    //La variable j se inicializa a la mitad de arrow,  y mientras j no sea 0 se va a ir rellenando fig.  
    for (j = half; j > 0; j--) {
      fig += "*";      
    }
    //Le restamos 1 a la variable half, para que la proxima iteracion del bucle valga uno menos, 
    //de lo contrario se imprimiria siempre la misma cantidad de asteriscos.
    half--;
  } else {
    //Esta seria la primera parte que se rellenaria del bucle  
    for (j = 0; j < i; j++) {
      fig += "*";
    }
  }
  //Imprimimos cada vuelta del primer bucle
  console.log(fig);
}
