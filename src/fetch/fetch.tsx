import { useEffect, useState } from 'react'

function Fetch() {
var rand = Math.floor(Math.random()*1025)+1;  

const [endpoint, setEndpoint] = useState(rand);

function random(){
  setEndpoint(rand);
}

const [pokemon, setPokemon] = useState(null);
const [loading, setLoad] = useState(true);

  useEffect(()=>{
    const url =`https://pokeapi.co/api/v2/pokemon/${endpoint}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
        setLoad(false);
      })
  },[endpoint])

  if(loading){
    return <>
    <div className='flex justify-center '>
      <p className='font-semibold text-3xl'>Loading dulu.....</p>  
    </div>
    </>
  }
  
  return (
    <>
    <div className='md:inline-flex'>
      <div>
        <p className='text-3xl font-semibold'>{pokemon.name.toUpperCase()}</p>
        <img className='my-10 w-52' src={pokemon.sprites.front_default} alt={pokemon.name} />  
      </div>
      <div className='md:mt-12 md:ml-10'>
        <p>Base Experience: {pokemon.base_experience}</p>
        <p>Hp: {pokemon.stats[0].base_stat}</p>
        <p>Serangan: {pokemon.stats[1].base_stat}</p>
        <p>Bertahan: {pokemon.stats[2].base_stat}</p>
        <p>Kecepatan: {pokemon.stats[5].base_stat}</p>
        <p>Kemampuan: {pokemon.abilities[0].ability.name}</p>
        <p>Berat: {pokemon.weight}</p>
        <button className='bg-gray-700 px-10 py-2 rounded-lg mt-5 hover:bg-gray-800 hover:transition ease-in-out delay-150' onClick={random}>Acak</button>  
      </div>
    </div>
    </>
  )

}

export default Fetch;
