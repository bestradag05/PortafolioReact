import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ scrolling, setScrolling }) => {
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
      setMenu(false);
    }
  };

  const handleThemeChange = (e) => {
    e.preventDefault(); // Evitar comportamiento predeterminado del enlace
    setTheme(!theme);
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
  }, []);

  return (
    <nav
      className={` ${scrolling ? " z-50 bg-none " : "bg-transparent text-white"} fixed top-0 h-20 w-full transition-all duration-500`}
    >
      <div className="mx-auto flex  h-full max-w-xl items-center justify-between px-10 md:max-w-3xl lg:max-w-6xl xl:max-w-screen-xl ">
        <Link
          className="flex items-center justify-center gap-1 text-lg xl:text-2xl "
          to="/"
        >
          <i className="fa-solid fa-code"></i>
          <p>
            Beg<span className="text-secondary">Code</span>
          </p>
        </Link>

        <div className="flex w-full items-center justify-end">
          <ul
            className={` ${menu ? " z-100 opacity-100 transition-opacity duration-300" : "pointer-events-none  opacity-0 transition-opacity duration-300"}  lg:text-md fixed right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center gap-5 bg-primaryLight p-4 text-center text-sm lg:pointer-events-auto lg:sticky  lg:h-auto lg:flex-row lg:gap-10 lg:bg-transparent lg:opacity-100 lg:transition-none`}
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
          <div className="flex  gap-10 xl:text-lg">
            <div className={!theme ? "hidden" : "block"}>
              <Link to="/" onClick={handleThemeChange}>
                <label htmlFor="theme-switch" className="text-lg">
                  <FontAwesomeIcon icon={faSun} />
                </label>
              </Link>
            </div>
            <div className={theme ? "hidden" : "block"}>
              <Link to="/" onClick={handleThemeChange}>
                <label htmlFor="theme-switch" className="text-lg">
                  <FontAwesomeIcon icon={faMoon} />
                </label>
              </Link>
            </div>
            <div className="text-xl  lg:hidden" onClick={() => setMenu(!menu)}>
              <i className="fa-sharp fa-solid fa-bars-sort"></i>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
