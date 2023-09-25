'use client'

import {useState, useEffect} from 'react'
import {useParams} from 'next/navigation'
import Image from 'next/image'

export default function Pokemon() {
	const [pokemon, setPokemon] = useState('')
	const {pokemonid} = useParams()

  useEffect(() => {
  	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
  	.then(res => res.json())
  	.then(pokemon => setPokemon(pokemon))
  }, [])

  if (!pokemon) return null
  return (
    <div className='flex flex-col justify-center items-center text-center'>
    	<h1 className='text-4xl capitalize bg-[#333] text-white w-[300px] p-2 my-3'>{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        width='120'
        height='120'
        alt={pokemon.name}
      />
      <div>
      	<h3 className='text-xl mx-auto my-2'>Number: </h3>
	      <p> #{pokemon.id}</p>
      </div>
      <div>
      	<h3 className='text-xl mx-auto my-2'>Type:</h3>
	      <div>
	      	{pokemon.types.map((item, index) => (
	      		<span className={`type type_${item.type.name}`} key={index}>{item.type.name}</span>
	      	))}
	      </div>
      </div>
      <div className='flex items-center justify-center mt-4'>
      	<div className='flex flex-col justify-center item-center my-4 px-4 border-r border-[#ccc] border-solid'>
      		<h4>Height:</h4>
      		<p>{pokemon.height * 10} cm</p>
      	</div>
      	<div className='flex flex-col justify-center item-center my-4 px-4'>
      		<h4>Weight:</h4>
      		<p>{pokemon.weight / 10} kg</p>
      	</div>
      </div>
    </div>
  )
}