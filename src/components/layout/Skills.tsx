import Skill from "../common/Skill"
import image1 from "../../assets/github.png"
import image2 from "../../assets/typescript.png"
import image3 from "../../assets/javascript.png"

function Skills() {
  return (
    <section className="w-full p-4">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10">
          Technologies used in projects
        </h1>
        <div className="slider">
          <div className="slide-track flex">
            <Skill src={image1} alt="github" />
            <Skill src={image2} alt="typescript" />
            <Skill src={image3} alt="javascript" />
            <Skill src={image1} alt="javascript" />
            <Skill src={image2} alt="javascript" />
            <Skill src={image3} alt="javascript" />
            <Skill src={image1} alt="javascript" />
            <Skill src={image2} alt="javascript" />
            <Skill src={image3} alt="javascript" />
            <Skill src={image1} alt="javascript" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
