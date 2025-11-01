import { Link } from "react-router-dom";

const AbaoutMe = () => {
  return (
    <section id="aboutme" className="abaoutme">
      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-8 lg:flex-row lg:py-12 xl:max-w-screen-2xl xl:px-16">
        <div
          data-aos="fade-right"
          className="mb-10 flex w-full items-center justify-center bg-center bg-no-repeat px-12 lg:mb-0 lg:w-1/2 lg:justify-end lg:bg-aboutMe"
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
          <p className="mb-4 text-justify xl:text-xl ">
            I am a Systems Engineer with a deep passion for programming and web
            development. With more than 5 years of experience creating scalable
            and efficient solutions, I specialize in technologies such as
            JavaScript, PHP, Laravel, React and NodeJS. I consider myself a
            self-taught professional, always constantly learning and seeking new
            challenges that allow me to improve my skills.
          </p>
          <p className="mb-4 text-justify xl:text-xl ">
            My focus is on offering innovative and high-performance solutions,
            optimizing processes and developing applications that make a
            difference. I am committed to the development of quality software,
            and I am passionate about collaborating on projects that challenge
            my abilities and allow me to grow as a programmer. If you are
            looking for a committed, creative and results-oriented developer,
            let's connect!
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
