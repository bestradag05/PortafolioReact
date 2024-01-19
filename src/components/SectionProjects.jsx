import apv from "../assets/projects/apvveterinario.png";
import contrecargo from "../assets/projects/contrecargo.png";
import orbeaduanas from "../assets/projects/orbeaduanas.png";
import tienda from "../assets/projects/tienda-virtual.png";
import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongo.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import bootstrap from "../assets/skills/bootstrap.png";
import js from "../assets/skills/js.png";
import Project from "./Project";

const SectionProjects = () => {
  return (
    <section
      id="projects"
      className=" flex flex-col items-center justify-center p-8 "
    >
      <div className="mb-10 flex justify-center ">
        <h2 className="titulo_subrayado text-3xl font-semibold uppercase ">
          Projects
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 gap-10  lg:max-w-7xl lg:grid-cols-2">
        <div className="col-span-1 flex items-center justify-center">
          <Project
            name="APV - Sistema de gestion veterinaria"
            image={apv}
            text="Veterinary patient management system with JWT authentication, Express server and MongoDB database, implemented with React.js and styled with Tailwind CSS."
            tecnology={[react, node, express, mongo]}
            link="https://apvveterinario.netlify.app/"
            gitVisible={true}
            github="https://github.com/bestradag05/sistemaVeterinariaFullStack"
          />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Project
            name="Orbe Aduanas S.A.C"
            image={orbeaduanas}
            text="Customized website for a customs agency, with a modern design and sections adapted to the client's needs, as well as a form for direct contact with a commercial advisor."
            tecnology={[html, css, bootstrap, js]}
            link="https://www.orbeaduanas.com/"
            gitVisible={false}
            github=""
          />
        </div>

        <div className="col-span-1 flex items-center justify-center">
          <Project
            name="Contrecargo S.A.C"
            image={contrecargo}
            text="Exclusive website for an agency specialized in customs and cargo, standing out with a modern design and detailing its services effectively."
            tecnology={[html, css, bootstrap, js]}
            link="https://www.contrecargo.com/"
            gitVisible={false}
            github=""
          />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Project
            name="Tienda Virtual"
            image={tienda}
            text="Virtual store template with modern design and animations that enrich the user experience, providing a more satisfactory shopping experience."
            tecnology={[html, css, bootstrap, js]}
            link="https://tiendavirtualbegcode.netlify.app/"
            gitVisible={true}
            github="https://github.com/bestradag05/TiendaOnline"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionProjects;
