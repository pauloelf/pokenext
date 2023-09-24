import { Pokemon } from "@/app/page";
import Image from "next/image";
import Link from "next/link";

export default async function Card({pokemon}: {pokemon: Pokemon}) {
  const response = await fetch(pokemon.url)
  const details = await response.json()

  return (
    <li className='card'>
      <Image
        src={details.sprites.front_default}
        width='120'
        height='120'
        alt={pokemon.name}
      />
      <p className='flex justify-center items-center bg-[#e33d33] text-white p-1 my-4 rounded-md'>#{details.id}</p>
      <h3 className='text-2xl capitalize mb-4'>{pokemon.name}</h3>
      <Link className='card-button' href={`/pokemon/${details.id}`}>Details</Link>
    </li>
  )
}