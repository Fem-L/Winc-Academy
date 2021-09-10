const waitingForPokemon = async () => {
  try {
    const pokemonForDom = document.getElementById("pokemon"); //div element is parent voor img element
    const getPokemon = await getPokemonFromApi(); //object
    console.log("getPokemon =", getPokemon);
    //functie om listItems te plaatsen in de DOM
    const addPokemonToDom = () => {
      const pokemonText = document.createElement("p"); //p element maken
      pokemonForDom
        .appendChild(pokemonText) //p toevoegen aan div element
        .append(` ${getPokemon}`);
    };

    addPokemonToDom(getPokemon);
  } catch (error) {
    console.log(error);
  }
};

waitingForPokemon();
