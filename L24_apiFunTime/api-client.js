//url: https://pokeapi.co/api/v2//

const apiUrl = "https://pokeapi.co/api/v2/berry/1/";

const getPokemonFromApi = async () => {
  try {
    const pokemon = `${apiUrl}`;
    const response = await fetch(pokemon, { method: "GET" });

    console.log("test" + response);
    return await response.json;
  } catch (error) {
    console.log("error");
  }
};

getPokemonFromApi();
