import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import Projects from "./components/layout/Projects"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import blackCat from "./assets/black-cat.png"

function App() {
  return (
    <>
      <Header logo={blackCat} />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
