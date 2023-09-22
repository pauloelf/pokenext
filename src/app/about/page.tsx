import Image from "next/image"

export default function About() {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Sobre o projeto</h1>
      <p className="mb-6 mx-auto max-w-lg leading-6">
        Projeto desenvolvido através do curso de NextJS do Matheus Battisti. O projeto consiste em uma pokedex simples.
      </p>
      <Image
        className='mx-auto'
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  )
}
