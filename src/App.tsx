import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import Projects from "./components/layout/Projects"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import blackCatImage from "./assets/black-cat.png"
import devImage from "./assets/app-dev.jpg"
import Skills from "./components/layout/Skills"

function App() {
  return (
    <>
      <Header logo={blackCatImage} />
      <Hero heroImage={devImage} />
      <Skills skills={["ts", "js"]} />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
