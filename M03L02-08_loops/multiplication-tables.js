/* Multiplication tables
-Schrijf een loop die "iterate" van 0 tot 10. 
-Gebruik voor het eerste voorbeeld de tafel van 9. 
-Console.log elke keer de uitkomst van de tafel van 9 naar de console. */

for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    let uitkomst = j + 'x' + i + `=` + i * j;
    console.log(uitkomst);
  }
}
