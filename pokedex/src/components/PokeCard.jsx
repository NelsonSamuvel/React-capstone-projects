import React from "react";

function PokeCard({ poke,onClick }) {
  return (
    <div className="w-1/3 mx-auto mt-4 shadow-lg border font-mono cursor-pointer" onClick={onClick}>
      <div className="bg-gray-300">
        <img src={poke.sprite} alt="" className="w-52 mx-auto" />
      </div>
      <div className="px-2 mb-4 py-2 ml-2">
        <p className="text-2xl mb-2">{poke.name}</p>
        {poke.types.map((type) => (
          <p key={type} className="bg-green-800 text-white px-2 py-1 rounded-full w-24 text-center">{type}</p>
        ))}
      </div>
    </div>
  );
}

export default PokeCard;
