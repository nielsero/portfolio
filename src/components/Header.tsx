import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Link from "./Link"
import logo from "../assets/black-cat.png"

function Header() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <header className="w-full p-4">
      <div className="container flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex gap-2">
          <img src={logo} alt="ghost" className="w-10 h-10" />
          <span className="font-bold text-3xl">nielsero</span>
        </div>

        <nav className="hidden md:flex gap-7">
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Contact</Link>
        </nav>

        <div
          className="block md:hidden"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        <div
          className={
            isNavOpen
              ? "fixed left-0 md:left-[-100%] top-0 w-[85%] ease-in-out duration-500 p-4 bg-white"
              : "fixed left-[-100%] top-0 ease-in-out duration-500 p-4"
          }
        >
          <div className="flex gap-2">
            <img src={logo} alt="ghost" className="w-10 h-10" />
            <span className="font-bold text-3xl">nielsero</span>
          </div>

          <nav className="flex flex-col pl-3 mt-4 gap-3">
            <Link href="#">About</Link>
            <Link href="#">Projects</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
