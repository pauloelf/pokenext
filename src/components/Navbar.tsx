import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className='bg-[#333] mb-8'>
      <nav className='flex justify-between items-center py-4 px-5 text-white'>
        <div className='flex justify-center items-center'>
          <Image src='/images/pokeball.png' width='30' height='30' alt='PokeNext' />
          <h1 className='ml-2'>PokeNext</h1>
        </div>
        <ul className='flex'>
          <li className='mr-5'>
            <Link className='button-nav' href='/'>Home</Link>
          </li>
          <li className='mr-5'>
            <Link className='button-nav' href='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}