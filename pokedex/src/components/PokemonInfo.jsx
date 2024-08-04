import React, { useState } from "react";

function PokemonInfo({ pokemon }) {
  const [pokemonType, setPokemonType] = useState(pokemon[0].name);

  let [currentPokemon] = pokemon.filter(poke=>poke.name === pokemonType);
  console.log(currentPokemon);

  return (
    <div className=" w-2/5 mt-4 bg-blue-900">
      <select
        value={pokemonType}
        onChange={(e) => setPokemonType(e.target.value)}
        className="bg-slate-900 text-white p-2 w-64"
      >
        {pokemon.map((poke) => (
          <option value={poke.name} key={poke.name} className="">
            {poke.name}
          </option>
        ))}
      </select>

      <h1 className="text-2xl text-white mt-6 ml-4">{currentPokemon.name}</h1>
      <div className="bg-blue-500 w-2/3 mt-4 grid grid-cols-2 gap-y-4 px-4 py-6 rounded-lg ml-4">
      
        <div>
          <h2 className="text-white text-xl">Height</h2>
          <p className="text-lg font-semibold">{currentPokemon.height}</p>
        </div>
        <div>
          <h2 className="text-white text-xl">Weight</h2>
          <p className="text-lg font-semibold">{currentPokemon.weight}</p>
        </div>
        <div>
          <h2 className="text-white text-xl">Gen</h2>
          <p className="text-lg font-semibold">{currentPokemon.gen}</p>
        </div>
        <div>
          <h2 className="text-white text-xl">HP</h2>
          <p className="text-lg font-semibold">{currentPokemon.baseStats.hp}</p>
        </div>
        
        {/* <div className="">
          <h2 className="text-white text-xl">Abilities</h2>
          {
            currentPokemon.abilities.map(ability => <div key={ability.name} className="">
              <h3 className="text-white text-lg">{ability.name}</h3>
              <p>{ability.description}</p>
            </div>)
          }
        </div> */}
      </div>

      
    </div>
  );
}

export default PokemonInfo;
