import Link from "./Link"

function Header() {
  return (
    <header className="w-full p-4">
      <div className="container flex justify-between max-w-5xl mx-auto">
        <span className="font-bold">Niels</span>
        <nav className="flex gap-3">
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
