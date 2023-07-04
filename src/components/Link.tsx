type Props = {
  href: string
  children: React.ReactNode
}

function Link({ href, children }: Props) {
  return (
    <a className="text-blue-600" href={href}>
      {children}
    </a>
  )
}

export default Link
