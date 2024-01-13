import Header from "./components/Header"
import AbaoutMe from "./components/AbaoutMe"
import Skills from "./components/Skills"
import SectionProjects from "./components/SectionProjects"

function App() {

  return (
    <>
      <Header />
      <AbaoutMe />
      <section className="bg-skills-projects px-8 py-8 lg:py-12 xl:px-16">
        <Skills />
        <SectionProjects />
      </section>

    </>
  )
}

export default App
