type Props = {
  href: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  children: React.ReactNode
}

function Link({ href, onClick, children }: Props) {
  return (
    <a
      className="py-2 md:px-1 border-b-2 border-transparent md:hover:border-black transition 
      ease-in-out duration-500 text-sky-800"
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export default Link
