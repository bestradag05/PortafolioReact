import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col items-center justify-center gap-10 px-10 py-5 lg:flex-row ">
        <div className="flex w-1/3 items-center justify-center text-center">
          <Link
            className="flex items-center justify-center gap-1 text-xl xl:text-2xl"
            to="/"
          >
            <i className="fa-solid fa-code"></i>
            <p>
              Beg<span className="text-secondary">Code</span>
            </p>
          </Link>
        </div>
        <div className="flex w-1/3 items-center justify-center text-center text-sm xl:text-xl">
          <p>&copy; 2025 Bryan Estrada. All rights reserved.</p>
        </div>
        <div className="flex w-1/3 items-center  justify-evenly text-center xl:text-2xl">
          <Link
            to="https://github.com/bestradag05"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/bryan-david-estrada-gomez-68a3a7192"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100009390402326&sk=about"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link
            to="https://www.tiktok.com/@begcode"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-tiktok"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
