import PokeCard from "./PokeCard";


function Pokemon({pokemon,onClick}) {
  return (

    <div className='w-1/2'>
            {
              pokemon.length ? <PokeCard onClick={onClick}  poke={pokemon[0]}/> : <p className="text-center mt-12 text-xl">Try search some Pokemon</p>
            }
          
    </div>
  )
}

export default Pokemon