import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import Link from "../common/Link"

type Props = {
  logo: string
  flag: string
}

function Header({ logo, flag }: Props) {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <header className="w-full py-4 px-2">
      <div className="container flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="logo image of a black cat"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <span className="font-bold text-2xl md:text-3xl">nielsero</span>
        </div>

        <div className="p-1 border-2 border-dashed rounded-full border-black">
          <img
            src={flag}
            alt="mozambique flag"
            className="w-5 h-5 md:w-8 md:h-8"
          />
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
              ? "fixed left-0 md:left-[-100%] top-0 w-[90%] ease-in-out duration-500 py-4 px-2 bg-white"
              : "fixed left-[-100%] top-0 ease-in-out duration-500 py-4 px-2"
          }
        >
          <div className="flex gap-2">
            <img
              src={logo}
              alt="logo image of a black cat"
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="font-bold text-2xl md:text-3xl">nielsero</span>
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
