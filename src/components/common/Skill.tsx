type Props = { src: string; alt: string }

function Skill({ src, alt }: Props) {
  return (
    <div className="w-[250px] flex justify-center items-center">
      <img src={src} alt={alt} title={alt} className="w-[90px] md:w-[100px]" />
    </div>
  )
}

export default Skill
