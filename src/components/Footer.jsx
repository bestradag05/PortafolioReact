import begcode from "../assets/logo/begcode-logo-white.png";
const Footer = () => {
  return (
    <footer className="">
      <div className="grid grid-cols-3 px-10 py-5">
        <div className="flex items-center justify-center">
          <img src={begcode} alt="Logo de begcode" className="w-1/3" />
        </div>
        <div className=" flex items-center justify-center text-sm text-white">
          <p>&copy; 2023 Bryan Estrada. All rights reserved.</p>
        </div>
        <div className="flex  items-center justify-evenly text-white">
          <a href="https://github.com/bestradag05" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/bryan-david-estrada-gomez-68a3a7192"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009390402326&sk=about"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://www.tiktok.com/@bdeg05?is_from_webapp=1&sender_device=pc"
            target="_blank"
          >
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
