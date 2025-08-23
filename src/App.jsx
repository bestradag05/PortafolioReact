import Header from "./components/Header";
import AbaoutMe from "./components/AbaoutMe";
import Skills from "./components/Skills";
import SectionProjects from "./components/SectionProjects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    offset: 300,
    duration: 600,
  });
  const [scrolling, setScrolling] = useState(false);

  return (
    <>
      <Navbar scrolling={scrolling} setScrolling={setScrolling} />
      <Header scrolling={scrolling} setScrolling={setScrolling} />
      <AbaoutMe />
      <Skills />
      <SectionProjects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
