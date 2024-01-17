import Navbar from "./Navbar";
import portada from "../assets/portada-lg.png";

const Header = () => {
  return (
    <>
      <header className="bg-header bg-cover bg-no-repeat">
        <Navbar />

        <div className=" mx-auto  flex max-w-screen-lg px-8 xl:px-16">
          <div className="flex w-1/2 flex-col justify-center pl-4 text-white">
            <h2 className="text-3xl">Hello mate</h2>
            <h1 className="text-5xl font-light leading-tight">
              I'm Bryan Estrada a
              <span className="text-secondary"> Junior Developer</span>
            </h1>
            <p>
              I'm a Full Stack programmer from Peru. I invite you to explore my
              projects.
            </p>
            <div className="mt-8 flex gap-10 text-2xl">
              <a href="#" className="social-media">
                <i className="fa-brands fa-github "></i>
              </a>
              <a href="#" className="social-media">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="flex  w-1/2 items-center justify-center px-[60px] pt-[60px]">
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
