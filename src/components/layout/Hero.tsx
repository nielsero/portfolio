type Props = {
  heroImage: string
}

function Hero({ heroImage }: Props) {
  return (
    <section className="w-full px-4 py-4">
      <div className="container md:flex max-w-5xl mx-auto">
        <div className="md:w-[50%]">
          <h1 className="text-center md:text-left font-bold mt-5 md:mt-20 text-5xl sm:text-6xl lg:text-7xl">
            Hi, I'm Niels
          </h1>
          <p className="mt-3 text-center md:text-left w-[80%] mx-auto md:mx-0">
            An aspiring software developer based in Mozambique
          </p>
          <p className="text-center md:text-left mt-2 w-[80%] mx-auto md:mx-0">
            And I love transforming <span className="underline">ideas</span>{" "}
            into impactful <span className="underline">solutions</span>
          </p>
          <p className="text-center md:text-left mt-2 w-[80%] mx-auto md:mx-0">
            Interested in working together?
          </p>
          <div className="flex justify-center md:justify-start mt-3">
            <a
              href="#contact"
              className="border py-2 px-3 mt-3 mx-auto md:mx-0 rounded bg-sky-700 hover:bg-sky-600 text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="text-center md:w-[50%]">
          <img src={heroImage} alt="hero image" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
