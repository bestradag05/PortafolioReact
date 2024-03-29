const ContactMe = () => {
  return (
    <section
      id="contact"
      className="contatme flex flex-col  items-center justify-center p-12"
    >
      <div className="mb-10 flex items-center justify-center">
        <h2 className="titulo_subrayado text-3xl font-semibold uppercase ">
          Contact Me
        </h2>
      </div>
      <div className="flex w-1/2 flex-col items-start justify-center gap-20 lg:w-full lg:flex-row lg:items-center ">
        <div className="flex items-center justify-center">
          <div className=" mr-5 flex h-auto items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary shadow-buttonShadow xl:text-3xl">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400 xl:text-lg">Mail us</span>
            <p className="xl:text-xl">bestradag05@gmail.com</p>
            <p className="xl:text-xl">bestradag0511@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mr-5 flex h-auto items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary shadow-buttonShadow xl:text-3xl">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400 xl:text-xl">Contact us</span>
            <p className="xl:text-xl">+51 977834697</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="mr-5 flex h-auto items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary shadow-buttonShadow xl:text-3xl">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400 xl:text-xl">Linkendin</span>
            <p className="xl:text-xl">Bryan David Estrada Gomez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
