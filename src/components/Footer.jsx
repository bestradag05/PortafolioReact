const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col items-center justify-center gap-10 px-10 py-5 lg:flex-row ">
        <div className="flex w-1/3 items-center justify-center text-center">
          <a
            className="flex items-center justify-center gap-1 text-xl"
            href="#"
          >
            <i className="fa-solid fa-code"></i>
            <p>
              Beg<span className="text-secondary">Code</span>
            </p>
          </a>
        </div>
        <div className="flex w-1/3 items-center justify-center text-center text-sm">
          <p>&copy; 2023 Bryan Estrada. All rights reserved.</p>
        </div>
        <div className="flex w-1/3 items-center  justify-evenly text-center">
          <a
            href="https://github.com/bestradag05"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-david-estrada-gomez-68a3a7192"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009390402326&sk=about"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com/@bdeg05?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
