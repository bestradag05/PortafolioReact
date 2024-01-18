const ContactMe = () => {
  return (
    <section className="contatme p-12">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="titulo_subrayado text-3xl font-semibold uppercase ">
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-20 lg:flex-row ">
        <div className="flex flex-shrink-0 items-center justify-center">
          <div className=" shadow-buttonShadow mr-5 flex h-auto flex-shrink-0 items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400">Mail us</span>
            <p>bestradag05@gmail.com</p>
            <p>bestradag0511@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center justify-center">
          <div className="shadow-buttonShadow mr-5 flex h-auto items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400">Contact us</span>
            <p>+51 977834697</p>
          </div>
        </div>

        <div className="flex flex-shrink-0 items-center justify-center">
          <div className="shadow-buttonShadow mr-5 flex h-auto items-center justify-center rounded-xl bg-white p-3 text-xl text-secondary">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="">
            <span className="text-sm text-gray-400">Linkendin</span>
            <p>Bryan David Estrada Gomez</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
