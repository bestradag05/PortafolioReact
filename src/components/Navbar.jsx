import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrolling, setScrolling }) => {
  // Si es que es true = dark
  // si es que es false = ligth
  const [theme, setTheme] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenu(false); // Cerrar el menú después de hacer clic en un enlace
    }
  };

  useEffect(() => {
    if (theme === true) {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Agrega un array vacío para que el efecto se ejecute solo una vez al montar/desmontar el componente

  return (
    <nav
      className={` ${scrolling ? " z-50 bg-none " : "bg-transparent text-white"} fixed top-0 h-20 w-full transition-all duration-500`}
    >
      <div className="mx-auto flex  h-full max-w-xl items-center justify-between px-10 md:max-w-3xl lg:max-w-6xl ">
        <a className="flex items-center justify-center gap-1 text-xl " href="#">
          <i className="fa-solid fa-code"></i>
          <p>
            Beg<span className="text-secondary">Code</span>
          </p>
        </a>

        <div className="flex w-full items-center justify-end">
          <div className="flex  gap-10 ">
            <div className={!theme ? "hidden" : "block"}>
              <a href="#" onClick={() => setTheme(!theme)}>
                <i className="fa-solid fa-sun-bright"></i>
              </a>
            </div>
            <div className={theme ? "hidden" : "block"}>
              <a href="#" onClick={() => setTheme(!theme)}>
                <i className="fa-solid fa-moon-stars"></i>
              </a>
            </div>
            <div className="text-xl  lg:hidden" onClick={() => setMenu(!menu)}>
              <i className="fa-sharp fa-solid fa-bars-sort"></i>
            </div>
          </div>

          <ul
            className={` ${menu ? " opacity-100 transition-opacity duration-300" : "pointer-events-none  opacity-0 transition-opacity duration-300"}  fixed right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center gap-5 bg-primaryLight p-4 text-center text-sm  lg:pointer-events-auto lg:sticky  lg:h-auto lg:flex-row lg:gap-10 lg:bg-transparent lg:opacity-100 lg:transition-none`}
          >
            <div
              className={`${menu ? "block" : " hidden"} absolute right-10 top-10 text-2xl lg:hidden`}
              onClick={() => setMenu(!menu)}
            >
              <i className="fa-sharp fa-solid fa-x"></i>
            </div>

            <li className="nav-link" onClick={() => scrollToSection("aboutme")}>
              <Link to="/">Abaout Me</Link>
            </li>
            <li className="nav-link" onClick={() => scrollToSection("skills")}>
              <Link to="/">Skills</Link>
            </li>
            <li
              className="nav-link"
              onClick={() => scrollToSection("projects")}
            >
              <Link to="/">Project</Link>
            </li>
            <li className="nav-link" onClick={() => scrollToSection("contact")}>
              <Link to="/" className="">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
