import { useState } from "react";

const Navbar = () => {

    const [theme, setTheme] = useState(true);

    return (
        <nav className="h-20 shadow-navShadow bg-primary">
            <div className="container flex justify-between items-center h-full mx-auto px-10">
                <a className="flex text-white text-xl text-base items-center justify-center gap-1" href="#">
                    <i className="fa-solid fa-code"></i>
                    <p>Beg<span className="text-secondary">Code</span></p>
                </a>

                <div className="md:hidden text-white text-xl">
                    <i class="fa-sharp fa-solid fa-bars-sort"></i>
                </div>


                <ul className='hidden md:flex justify-center items-center gap-10 text-white text-sm text-center'>
                    <li className='nav-link'><a href="#" className="">Abaout Me</a></li>
                    <li className='nav-link'><a href="#" className="">Skills</a></li>
                    <li className='nav-link'><a href="#" className="">Project</a></li>
                    <li className='nav-link'><a href="#" className="">Contact</a></li>
                    <li className={!theme ? 'hidden': 'block'}>
                        <a href="#" onClick={() => setTheme(!theme)}>
                            <i class="fa-solid fa-sun-bright"></i>
                        </a>
                    </li>
                    <li className={theme ? 'hidden': 'block'}>
                        <a href="#" onClick={() => setTheme(!theme)}>
                            <i class="fa-solid fa-moon-stars"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;