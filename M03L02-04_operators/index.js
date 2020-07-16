const age = 20;
const isFemale = true;
const driverStatus = 'bob';
const name = 'Sara';
const totalAmount = 55;

//Is deze persoon oud genoeg?
if (age > 17) {
  console.log('Deze persoon is 18 jaar of ouder');
} else {
  console.log('Deze persoon is nog geen 18 jaar');
}

//Is deze persoon een vrouw?
if (isFemale) {
  console.log('Ze mag naar binnen op ladiesnight');
} else {
  console.log('Hij is niet welkom deze avond.');
}

//Mag deze persoon rijden?
if (driverStatus == 'bob') {
  console.log('Deze persoon mag rijden');
} else {
  console.log('Deze persoon heeft gedronken en mag niet rijden');
}

//Krijgt de persoon korting?
if (age >= 18 && age <= 25) {
  console.log('Je krijgt 50% korting!');
} else {
  console.log('Je bent helaas te oud voor de korting of te jong voor de kroeg');
}

//Krijgt de persoon een gratis biertje?
if (name == 'Bram' || name == 'Sarah' || name == 'Sara') {
  console.log('Geluksvogel, je krijgt van ons een gratis biertje!');
} else {
  console.log(
    'Je krijgt geen gratis biertje, maar we vinde het wel leuk dat je er bent!'
  );
}

//Je krijgt gratis bij bepaalde besteding
if (totalAmount >= 25 && totalAmount < 50) {
  console.log('Je krijgt gratis bitterballen!');
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log('Je krijgt een gratis portie nachos!');
} else if (totalAmount >= 100) {
  console.log('Je krijgt een gratis fles champagne!');
} else {
  console.log('Het is de moeite waard om nog iets te bestellen :)');
}
