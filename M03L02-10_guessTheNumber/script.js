//Guess the Number

/* 
REQUIREMENTS:
1. Als gebruiker wil ik een initieel bericht zien in die de gebruiker begroet en vraagt om zijn of haar naam. 
"Welkom! Wat is je naam?" Hoe vraag je de gebruiker om input? => prompt

Input van de gebruiker in de browser 

2. Als gebruiker wil ik mijn naam kunnen invoeren in de browser en op enter drukken.

3. Als gebruiker wil ik nadat ik mijn naam heb ingevoerd, een bericht terug zien: "Hey [naam]" => alert

4. Als gebruiker wil ik na de begroeting met mijn naam gevraagd worden om een nieuwe input met een cijfer. e.g:
 "Voer een nummer in van 0 tot 25 om te beginnen met raden..." => prompt

5. Als spelmaker wil ik dat de gebruiker wel een reeële kans heeft om te winnen. 
Daarom pak ik een willekeurig getal van 0 tot 25. Hint: gebruikt Math.random()

6. Als gebruiker wil ik een nummer in kunnen voeren, dmv een prompt en vervolgens op enter klikken.

7. Als gebruiker wil ik een negatief bericht zien dmv een alert() als ik het nummer verkeerd heb geraden e.g. 
"Dat is niet correct" . Daarna wil ik gevraagd worden om opnieuw te raden. =>prompt

8. Als gebruiker wil ik een positief bericht ontvangen dmv een alert() als ik het nummer goed heb geraden. e.g: 
"Gefeliciteerd je hebt gewonnen". Het spel is nu af.

9. Als gebruiker wil ik een bericht zien als het spel af is.
 "e.g: Dag [naam]. Tot de volgende keer" => alert
 */

let naam = prompt('Welkom bij het spel Guess the number, wat is je naam?'); //1 en 2

alert('Hey, ' + naam); //3

let number = prompt(
  'Voer een nummer in van 0 tot 25 om te beginnen met raden...' //4
);
console.log(typeof number);

// nummer tussen 1 en 25

let winningNumber = Math.floor(Math.random() * 25 + 1); //5
console.log(winningNumber);

// met vijf pogingen
for (i = 0; i <= 4; i++) {
  console.log(i);
  console.log('poging ' + (i + 1) + ' is ' + number, winningNumber);
  if (number != winningNumber && i < 4) {
    let number2 = prompt(
      'Poging ' +
        (i + 1) +
        ' is helaas niet juist. Je mag nog ' +
        (-i + 4) +
        ' keer kiezen. Kies opnieuw een nummer...'
    ); //6 en 7
    number = number2;
  } else if (number != winningNumber && i >= 4) {
    alert('Helaas, het is niet gelukt. Tot een volgende keer, ' + naam + ' !');
    break;
  } else {
    alert('Gefeliciteerd, je hebt gewonnen!'); //8
    alert('Dag, ' + naam + ' tot de volgende keer!'); //9
    break;
  }
}
