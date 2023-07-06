export type ProjectProps = {
  name: string
  src: string
  alt: string
  description: string
  previewLink: string
  githubLink: string
}

const Project = ({
  name,
  src,
  alt,
  description,
  previewLink,
  githubLink
}: ProjectProps) => {
  return (
    <div className="w-[95%] sm:w-[45%] shadow rounded-b pb-3 bg-white">
      <img src={src} alt={alt} className="hover:opacity-80 cursor-pointer" />

      <div className="mt-2">
        <h1 className="text-center text-xl font-bold">{name}</h1>
        <p className="text-center text-sm text-gray-400 mt-2 px-3">
          {description}
        </p>
        <div className="flex gap-4 justify-center mt-3">
          <a
            className="py-2 px-3 bg-sky-700 text-white rounded"
            href={previewLink}
          >
            Preview
          </a>
          <a className="py-2 px-3 bg-gray-300 rounded" href={githubLink}>
            See code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
