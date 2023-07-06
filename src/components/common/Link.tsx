type Props = {
  href: string
  children: React.ReactNode
}

function Link({ href, children }: Props) {
  return (
    <a
      className="py-2 md:px-1 border-b-2 border-transparent md:hover:border-black text-sky-800"
      href={href}
    >
      {children}
    </a>
  )
}

export default Link
