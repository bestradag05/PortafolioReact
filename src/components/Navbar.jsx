import { useState } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(true);

  return (
    <nav className="h-20 bg-primary shadow-navShadow">
      <div className="container mx-auto flex h-full items-center justify-between px-10">
        <a
          className="flex items-center justify-center gap-1 text-xl text-white"
          href="#"
        >
          <i className="fa-solid fa-code"></i>
          <p>
            Beg<span className="text-secondary">Code</span>
          </p>
        </a>

        <div className="text-xl text-white md:hidden">
          <i className="fa-sharp fa-solid fa-bars-sort"></i>
        </div>

        <ul className="hidden items-center justify-center gap-10 text-center text-sm text-white md:flex">
          <li className="nav-link">
            <a href="#" className="">
              Abaout Me
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="">
              Skills
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="">
              Project
            </a>
          </li>
          <li className="nav-link">
            <a href="#" className="">
              Contact
            </a>
          </li>
          <li className={!theme ? "hidden" : "block"}>
            <a href="#" onClick={() => setTheme(!theme)}>
              <i className="fa-solid fa-sun-bright"></i>
            </a>
          </li>
          <li className={theme ? "hidden" : "block"}>
            <a href="#" onClick={() => setTheme(!theme)}>
              <i className="fa-solid fa-moon-stars"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
