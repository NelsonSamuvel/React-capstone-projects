import { useState } from "react";

function SearchBox({ getPokemon, isLoading }) {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleClick() {
    if (!search) return;
    getPokemon(search);
    setSearch("");
  }

  return (
    <div className="bg-stone-700 py-8 flex items-center justify-center">
      <div className="w-1/2 flex items-center justify-center px-2">
        <input
          type="text"
          name="searchInput"
          className="border border-stone-500 py-3 px-2 text-xl self-center text-gray-700 w-1/2 rounded-md"
          placeholder=""
          value={search}
          onChange={handleSearch}
          disabled={isLoading}
        />
        <button
          className="ml-6 bg-orange-500 px-4 py-4 rounded-md text-white"
          disabled={isLoading}
          onClick={handleClick}
        >
          {isLoading ? (
            <p className="text-md">Loading</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"white"}
              fill={"none"}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="bg-green-600  text-white text-xl w-1/3 rounded-md px-4 py-2 ml-16">
        <p className="">
          Search For a Pokemon by name or using its National Pokedex Number
        </p>
      </div>
    </div>
  );
}

export default SearchBox;
