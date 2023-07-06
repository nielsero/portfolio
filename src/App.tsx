import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import Projects from "./components/layout/Projects"
import Contact from "./components/layout/Contact"
import Footer from "./components/layout/Footer"
import Skills from "./components/layout/Skills"
import letterNImage from "./assets/letter-n.png"
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
import portfolioSiteImage from "./assets/portfolio_site.png"
import weatherAppImage from "./assets/weather_app.png"
import rpsAppImage from "./assets/rock_paper_scissors_app.png"

const skills = [
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

const projects = [
  {
    name: "Portfolio",
    src: portfolioSiteImage,
    alt: "Portfolio site",
    description: "The place to showcase my skills and projects. (this site 😂)",
    previewLink: "#",
    githubLink: "#"
  },
  {
    name: "Weatherly",
    src: weatherAppImage,
    alt: "Weather app",
    description:
      "A weather app that displays the current weather for a given location.",
    previewLink: "#",
    githubLink: "#"
  },
  {
    name: "Rock Paper Scissors",
    src: rpsAppImage,
    alt: "Rock Paper Scissors app",
    description: "A simple rock paper scissors game vs the computer.",
    previewLink: "#",
    githubLink: "#"
  }
]

function App() {
  return (
    <>
      <Header logo={letterNImage} flag={mozFlag} />
      <Hero heroImage={devImage} />
      <Skills images={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  )
}

export default App
