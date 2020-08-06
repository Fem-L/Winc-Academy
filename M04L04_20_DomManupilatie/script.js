//DEEL 1 ELEMENTEN TOEVOEGEN
/*Wanneer ik als gebruiker op een button van één van de Big 5 klik,
wil ik dat die verschijnt in mijn lijstje met "animals spotted".*/

let buttons = document.querySelectorAll('.big-five-button'); //nodelist van buttons
let parent = document.getElementById('spotted-animals-list'); //ul
console.log('2', parent);
let childeren = parent.getElementsByClassName('spotted-animals-list-item'); //html collectie
console.log('5', childeren);

//Functie om naam(innertext) op te slaan van de geklikte button in een nieuw element.

const getValue = (event) => {
  let naamDier = event.target.innerText;
  //console.log('1', naamDier);
  let newLi = document.createElement('li');
  parent.appendChild(newLi);
  //console.log('3', newLi);
  newLi.innerHTML = naamDier;
  return naamDier;
};

buttons.forEach((btn) => btn.addEventListener('click', getValue)); //event-listener aan alle buttons

//DEEL 2 ELEMENTEN VERWIJDEREN

const removeBtn = document.getElementById('remove-first-item-button');

//Functie om element te verwijderen

const remove = () => {
  let child = parent.getElementsByTagName('li')[0];
  parent.removeChild(child);
};

removeBtn.addEventListener('click', remove);

//DEEL 3 MEERDERE ELEMENTEN VERWIJDEREN

const removeAllBtn = document.getElementById('remove-all-button');

//Functie om alle elementen uit de lijst te verwijderen

const removeAll = () => {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
};

removeAllBtn.addEventListener('click', removeAll);
