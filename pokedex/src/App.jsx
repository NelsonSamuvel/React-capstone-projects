import axios from "axios";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import PokemonsLayout from "./components/PokemonsLayout";
import SearchBox from "./components/SearchBox";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";

const BASE_URL = "https://ex.traction.one/pokedex/pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function getPokemon(search) {
    try {
      setIsLoading(true);
      setError("");
      const res = await axios.get(`${BASE_URL}/${search}`);
      setPokemon(res.data);
      console.log(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const [isClicked, setIsClicked] = useState(false);

  function checkIsClicked() {
    setIsClicked((isClicked) => !isClicked);
  }

  return (
    <div>
      <Header />
      <SearchBox getPokemon={getPokemon} isLoading={isLoading} />
      <PokemonsLayout pokemon={pokemon}>
        <Pokemon pokemon={pokemon} onClick={checkIsClicked} />
        {isClicked && <PokemonInfo pokemon={pokemon} />}
      </PokemonsLayout>
    </div>
  );
}

export default App;
