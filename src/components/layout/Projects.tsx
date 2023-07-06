import Project, { ProjectProps } from "../common/Project"

type Props = {
  projects: ProjectProps[]
}

function Projects({ projects }: Props) {
  return (
    <section id="projects" className="w-full p-4 mt-20">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-center">Projects</h1>
        <div className="flex flex-wrap gap-9 items-center justify-center mt-5">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              src={project.src}
              alt={project.alt}
              description={project.description}
              previewLink={project.previewLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
