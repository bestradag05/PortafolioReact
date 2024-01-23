import { Link } from "react-router-dom";

const AbaoutMe = () => {
  return (
    <section id="aboutme" className="abaoutme">
      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-8 lg:flex-row lg:py-12 xl:max-w-screen-2xl xl:px-16">
        <div
          data-aos="fade-right"
          className="mb-10 flex w-full items-center justify-center bg-center bg-no-repeat px-12 lg:mb-0 lg:w-1/2 lg:justify-end lg:bg-[url(../src/assets/about_me.png)]"
        >
          <h2 className="titulo_subrayado text-3xl font-semibold uppercase">
            About Me
          </h2>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="w-full px-12 lg:w-1/2"
        >
          <p className="mb-4 text-justify xl:text-lg ">
            As a Systems Engineer and{" "}
            <span className="text-secondary">Full-Stack Developer</span>, I
            specialize in transforming ideas into functional code, addressing
            challenges with a disciplined approach. Proficient in{" "}
            <span className="text-secondary">React</span> for the frontend and{" "}
            <span className="text-secondary">Node.js with Express</span> for the
            backend, I manage{" "}
            <span className="text-secondary">MongoDB and MySQL</span> databases,
            ensuring the creation of visually attractive and interactive
            websites.
          </p>
          <p className="mb-4 text-justify xl:text-lg ">
            Beyond coding, I enjoy soccer, continuous learning, and hands-on
            projects. As a respectful and responsible team player, I thrive in a
            harmonious work environment, contributing to an efficient and
            organized approach. With a solid foundation in{" "}
            <span className="text-secondary">Java</span>, I'm eager to connect
            and discuss how I can bring valuable contributions to your projects.
            Let's explore exciting possibilities!
          </p>

          <div className="flex justify-center">
            <Link
              to="https://github.com/bestradag05"
              target="_blank"
              className="mx-4 my-5 rounded border-2 border-secondary bg-secondary p-3 text-sm text-white shadow-buttonShadow transition-all duration-500 hover:scale-105 xl:text-xl"
            >
              View Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbaoutMe;
