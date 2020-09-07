const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`ok,ok, ik ga nu mijn ${vak} huiswerk maken`);
    callback();
  }, 1000);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("engels", klaarMetHuiswerk);
