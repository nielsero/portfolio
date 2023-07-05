import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import Projects from "./components/layout/Projects"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import Skills from "./components/layout/Skills"
import blackCatImage from "./assets/black-cat.png"
import mozFlag from "./assets/mozambique.png"
import devImage from "./assets/app-dev.jpg"
import githubImage from "./assets/github.png"
import tsImage from "./assets/typescript.png"
import jsImage from "./assets/javascript.png"
import reactImage from "./assets/react.png"
import javaImage from "./assets/java.png"
import androidImage from "./assets/android.png"
import pythonImage from "./assets/python.png"
import nodeExpressImage from "./assets/node_express.jfif"
import mysqlImage from "./assets/mysql.png"
import mongoImage from "./assets/mongo.png"

const images = [
  { src: githubImage, alt: "GitHub" },
  { src: tsImage, alt: "TypeScript" },
  { src: jsImage, alt: "JavaScript" },
  { src: reactImage, alt: "React" },
  { src: javaImage, alt: "Java" },
  { src: androidImage, alt: "Android" },
  { src: pythonImage, alt: "Python" },
  { src: nodeExpressImage, alt: "Node & Express" },
  { src: mysqlImage, alt: "MySQL" },
  { src: mongoImage, alt: "MongoDB" }
]

function App() {
  return (
    <>
      <Header logo={blackCatImage} flag={mozFlag} />
      <Hero heroImage={devImage} />
      <Skills images={images} />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
