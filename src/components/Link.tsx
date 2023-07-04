type Props = {
  href: string
  children: React.ReactNode
}

function Link({ href, children }: Props) {
  return (
    <a
      className="py-2 md:px-1 border-b-2 border-transparent md:hover:border-black text-blue-600"
      href={href}
    >
      {children}
    </a>
  )
}

export default Link
