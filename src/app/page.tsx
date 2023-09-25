import Card from "@/components/Card"
import Image from "next/image"

type dataProp = {
  count: number
  next: string
  previous: null
  results: Pokemon[]
}

export type Pokemon = {
  name: string
  url: string
}

export default async function Home() {
  const maxPokemons = 160
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data: dataProp = await res.json()

  return (
    <>
      <div className="flex justify-center items-center mb-8">
        <h1 className='text-5xl text-[#e33d33] text-center'>
          Poke<span className='text-[#333] mr-2'>Next</span>
        </h1>
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt="PokeNext"
        />
      </div>
      <div>
        <ul className="flex flex-wrap justify-between items-center px-5 max-w-5xl mx-auto">
          {data?.results?.map((pokemon) => (
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
        </ul>
      </div>
    </>
  )
}