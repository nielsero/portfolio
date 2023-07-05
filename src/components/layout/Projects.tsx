function Projects() {
  return (
    <section id="projects" className="w-full p-4 mt-20">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-xl md:text-2xl font-bold text-center">Projects</h1>
        <div className="flex flex-wrap gap-9 items-center justify-center mt-5">
          <div className="w-[30%] h-60 bg-red-400"></div>
          <div className="w-[30%] h-60 bg-green-400"></div>
          <div className="w-[30%] h-60 bg-blue-400"></div>
          <div className="w-[30%] h-60 bg-yellow-400"></div>
          <div className="w-[30%] h-60 bg-purple-400"></div>
        </div>
      </div>
    </section>
  )
}

export default Projects
