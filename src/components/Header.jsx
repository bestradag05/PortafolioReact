import Navbar from "./Navbar";
import portada from "../assets/portada-lg.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-header bg-cover bg-no-repeat">
        <div className=" mx-auto  flex max-w-xl  flex-col px-8 pt-28 text-center lg:max-w-4xl lg:flex-row  lg:text-start  xl:max-w-screen-2xl xl:px-16">
          <div className="flex w-full flex-col justify-center pl-4 text-white lg:w-1/2">
            <h2 className="text-3xl text-white xl:text-5xl">Hello mate</h2>
            <h1 className="text-5xl font-light leading-tight xl:text-7xl">
              I'm Bryan Estrada a
              <span className="text-secondary"> Junior Developer</span>
            </h1>
            <p className="xl:text-xl">
              I'm a Full Stack programmer from Peru. I invite you to explore my
              projects.
            </p>
            <div className="mt-8 flex justify-center gap-10 text-2xl lg:justify-start xl:text-4xl">
              <Link
                to="https://github.com/bestradag05"
                target="_blank"
                className="social-media"
              >
                <i className="fa-brands fa-github "></i>
              </Link>
              <Link
                to="https://www.linkedin.com/in/bryan-david-estrada-gomez-68a3a7192"
                target="_blank"
                className="social-media"
              >
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </div>
          </div>

          <div className="flex w-full items-center justify-center px-[60px] pt-[60px] lg:w-1/2">
            <img
              src={portada}
              alt="Portada BegCode: Desarrollador FullStack"
              className="object-cover "
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
