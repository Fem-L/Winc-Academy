/*Even Odd Reporter
-Schrijf een loop die "iterate" van 0 tot 20. 
-Voor elke loop, check of het huidige nummer even is of oneven (odd).
-Console.log het nummer
Tip: gebruik de modulo functionaliteit. */

for (i = 0; i <= 20; i++) {
  const y = 2;
  let x = i;
  let z = x % y; //doordat y een vaste waarde heeft van 2 is de uitkomst van z altijd 0 bij even en 1 bij oneven getallen
  const oneven = 1; //om te vergelijken met de uitkomst van z

  if (oneven == z) {
    console.log(x + ' is oneven');
  } else {
    console.log(x + ' is even');
  }
}
