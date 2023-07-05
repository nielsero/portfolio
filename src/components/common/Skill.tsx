type Props = { src: string; alt: string }

function Skill({ src, alt }: Props) {
  return (
    <div className="w-[250px] flex justify-center items-center">
      <img src={src} alt={alt} width="100" />
    </div>
  )
}

export default Skill
