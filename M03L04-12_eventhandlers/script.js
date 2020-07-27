const btn = document.getElementById('mybutton');
const btnChange = document.getElementById('mybutton2');
const bodyBackground = document.getElementById('body');

// CLick event aan button toevoegen
btn.addEventListener('click', function () {
  alert('Button clicked');
});

//Kleur veranderen achtergrond

/*
const changeColor = (changeColor) => {
  bodyBackground.className += ' red-background';
};

btnChange.addEventListener('click', changeColor);
*/

//Kleur van de achtergrond toggelen

const toggleColor = (toggleColor) => {
  bodyBackground.classList.toggle('red-background');
};

btnChange.addEventListener('click', toggleColor);
