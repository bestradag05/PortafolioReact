import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({
  name,
  text,
  image,
  tecnology,
  link,
  gitVisible,
  github,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-aos="zoom-in"
      className="h-full w-4/5 max-w-full shadow-projectShadow lg:flex lg:w-full"
    >
      <div
        className="relative h-72 flex-none overflow-hidden rounded-t text-center md:h-80 lg:w-full lg:rounded-l lg:rounded-t-none xl:h-96"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Imagen ajustada */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 h-full w-full object-fill bg-[#f3f3f3]" 
        />

        {/* Panel flotante al hacer hover */}
        <div
          className={`absolute ${
            hovered ? "w-8/12 p-4 xl:p-8" : "w-0 delay-300"
          } right-0 flex h-full flex-col justify-around rounded-b bg-[#f3f3f3] leading-normal transition-all duration-700 lg:rounded-b-none lg:rounded-r`}
        >
          <div
            className={`${
              hovered ? "opacity-100 delay-300" : "opacity-0"
            } transition-all duration-700`}
          >
            <div className="mb-2 border-b-2 border-gray-600 pb-2 text-center font-bold text-primaryLight xl:text-xl">
              {name}
            </div>
            <p className="text-justify text-sm text-gray-700 xl:text-base">
              {text}
            </p>

            {/* Tecnologías */}
            <div className="my-3 flex items-center justify-around px-5 flex-wrap gap-2">
              {tecnology.map((tec, index) => {
                const tecEditado = tec.slice(1);
                return (
                  <div
                    key={index}
                    className="w-12 rounded-full bg-primary p-2 flex items-center justify-center"
                  >
                    <img src={tecEditado} alt={tecEditado} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer del panel */}
          <div className="flex items-center justify-between pr-8 text-gray-900 xl:text-xl">
            <p className="leading-none text-gray-900">@begcode</p>
            <div className="flex gap-5">
              <Link to={link} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
              {gitVisible && (
                <Link to={github} target="_blank">
                 <FontAwesomeIcon icon={faGithub} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
