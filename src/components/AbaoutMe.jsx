const AbaoutMe = () => {
  return (
    <section className="bg-primaryLight">
      <div className="mx-auto flex max-w-screen-xl px-8 py-8 lg:py-12 xl:px-16">
        <div className="flex w-1/2 items-center justify-end bg-aboutMe bg-center bg-no-repeat px-12">
          <h2 className="titulo_subrayado text-3xl font-semibold uppercase text-white">
            About Me
          </h2>
        </div>
        <div className="w-1/2 px-12">
          <p className="mb-4 text-justify text-sm text-white">
            Bachelor in Systems Engineering with experience in technical support
            for more than 2 years. Passionate about programming and web
            development, always looking for new challenges and opportunities to
            grow in this exciting field.
          </p>
          <p className="mb-4 text-justify text-sm text-white">
            My primary focus is on JavaScript, Java, and PHP, and I have gained
            a solid knowledge of each of them. I consider myself a self-taught
            person, constantly learning and improving my skills to offer
            innovative and efficient solutions. Let's connect and explore the
            possibilities of working together!
          </p>

          <div className="flex justify-center">
            <button className="mx-4 my-5 rounded border-2 border-secondary bg-secondary p-3 text-sm text-white ">
              View Works
            </button>
            <button className="mx-4 my-5 rounded border-2 border-secondary bg-transparent p-3 text-sm text-secondary ">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbaoutMe;
