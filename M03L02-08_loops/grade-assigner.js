/* The Grade Assigner
-Schrijf een for-loop dit "iterate" van 60 tot 100. Dit is de "score" (grade)  van de student.
-Voor elke loop, roep de bovenstaande functie aan met de i (grade) als argument. 
-Console.log vervolgens: "Voor 91 punten, krijg je een A". */

function assignGrade(score) {
  if (score > 90) {
    return 'A';
  } else if (score > 80) {
    return 'B';
  } else if (score > 70) {
    return 'C';
  } else if (score > 65) {
    return 'D';
  } else {
    return 'F';
  }
}

for (i = 60; i <= 100; i++) {
  let uitkomst = 'Voor ' + i + ' punten ,krijg je een ' + assignGrade(i);
  console.log(uitkomst);
}
