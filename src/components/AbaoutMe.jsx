const AbaoutMe = () => {
  return (
    <section id="aboutme" className="abaoutme">
      <div className="mx-auto flex max-w-screen-xl flex-col px-8 py-8 lg:flex-row lg:py-12 xl:px-16">
        <div className="mb-10 flex w-full items-center justify-center bg-center bg-no-repeat px-12 lg:mb-0 lg:w-1/2 lg:justify-end lg:bg-aboutMe">
          <h2 className="titulo_subrayado text-3xl font-semibold uppercase">
            About Me
          </h2>
        </div>
        <div className="w-full px-12 lg:w-1/2">
          <p className="mb-4 text-justify ">
            Bachelor in Systems Engineering with experience in technical support
            for more than 2 years. Passionate about programming and web
            development, always looking for new challenges and opportunities to
            grow in this exciting field.
          </p>
          <p className="mb-4 text-justify ">
            My primary focus is on JavaScript, Java, and PHP, and I have gained
            a solid knowledge of each of them. I consider myself a self-taught
            person, constantly learning and improving my skills to offer
            innovative and efficient solutions. Let's connect and explore the
            possibilities of working together!
          </p>

          <div className="flex justify-center">
            <button className="mx-4 my-5 rounded border-2 border-secondary bg-secondary p-3 text-sm text-white shadow-buttonShadow transition-all duration-500 hover:scale-105">
              View Works
            </button>
            <button className="mx-4 my-5 rounded border-2 border-secondary bg-transparent p-3 text-sm text-secondary shadow-buttonShadow transition-all duration-500 hover:scale-105">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbaoutMe;
