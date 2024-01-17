import { useState } from "react";

const Project = ({ name, text, image, tecnology }) => {
  const [hovered, setHovered] = useState(false);

  const imagen = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full max-w-sm p-4 lg:flex lg:max-w-full ">
      <div
        className={`relative h-72 max-h-72 flex-none overflow-hidden rounded-t bg-cover text-center lg:w-full lg:rounded-l lg:rounded-t-none`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={imagen}
      >
        <div
          className={`absolute  ${hovered ? "w-8/12 p-4 " : "w-0 delay-300"}  right-0 flex h-72 max-h-72 flex-col  justify-between rounded-b bg-[#f3f3f3] leading-normal  transition-all duration-700 lg:rounded-b-none lg:rounded-r`}
        >
          <div
            className={`${hovered ? "opacity-100 delay-300" : "opacity-0 "} transition-all duration-700`}
          >
            <div className="mb-2 border-b-2 border-gray-600 pb-2 text-center text-xl font-bold text-primaryLight">
              {name}
            </div>
            <p className="text-sm text-gray-700">{text}</p>

            <div className="my-3 flex items-center justify-around px-5">
              {tecnology.map((tec, index) => {
                let tecEditado = tec.slice(1);
                return (
                  <div key={index} className="w-9 rounded-full bg-primary p-2 ">
                    <img src={tecEditado} alt={tecEditado} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between pr-8">
            <p className="leading-none text-gray-900">@begcode</p>
            <div className="flex gap-5">
              <a href="#">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
