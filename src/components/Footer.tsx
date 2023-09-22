export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-[#333] text-white h-[150px] mt-8 border-t-[3px] border-[#111] border-solid">
      <p>
        <span className="font-bold">PokeNext</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}