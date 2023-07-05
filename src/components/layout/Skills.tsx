import Skill from "../common/Skill"

type Props = { images: { src: string; alt: string }[] }

function Skills({ images }: Props) {
  return (
    <section className="w-full p-4">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-center mb-10">
          Technologies used
        </h1>
        <div className="slider">
          <div className="slide-track flex">
            {images.map((image, index) => (
              <Skill key={index} src={image.src} alt={image.alt} />
            ))}

            {images.map((image, index) => (
              <Skill
                key={index + images.length}
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
