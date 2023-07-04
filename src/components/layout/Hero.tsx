type Props = {
  heroImage: string
}

function Hero({ heroImage }: Props) {
  return (
    <section className="w-full px-4 py-4">
      <div className="container md:flex max-w-5xl mx-auto">
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="font-bold mt-5 md:mt-20 text-5xl sm:text-6xl lg:text-7xl">
            Hero title
          </h1>
          <p className="mt-3">Hero text</p>
        </div>
        <div className="text-center md:w-[50%]">
          <img src={heroImage} alt="hero image" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero
