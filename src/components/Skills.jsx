import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import laravel from "../assets/skills/laravel.png";
import docker from "../assets/skills/docker.png";
import bs from "../assets/skills/bootstrap.png";
import mongo from "../assets/skills/mongo.png";
import mysql from "../assets/skills/mysql.png";
import git from "../assets/skills/git.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-skills mb-8 flex flex-col items-center justify-center pt-10 lg:h-[500px]"
    >
      <div className="">
        <h2
          data-aos="fade-right"
          className="titulo_subrayado text-3xl font-semibold uppercase"
        >
          My Skills
        </h2>
      </div>
      <div className="container mt-10 flex flex-wrap items-center justify-center gap-20 px-8 py-8 lg:py-12 xl:justify-around">
        <div
          data-aos="fade-right"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={react}
            alt="React"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">React</p>
        </div>

        <div
          data-aos="fade-right"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={node}
            alt="Node.js"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Node.js</p>
        </div>

        <div
          data-aos="fade-right"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={express}
            alt="Express.js"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Express</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={laravel}
            alt="laravel"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Laravel</p>
        </div>
        <div
          data-aos="fade-right"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={docker}
            alt="Docker"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Docker</p>
        </div>

        <div
          data-aos="fade-up"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={bs}
            alt="Bootstrap"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Bootstrap</p>
        </div>

        <div
          data-aos="fade-left"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={mongo}
            alt="MongoDB"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">MongoDB</p>
        </div>

        <div
          data-aos="fade-left"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={mysql}
            alt="MySQL"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">MySql</p>
        </div>

        <div
          data-aos="fade-left"
          className="flex h-auto w-14 flex-col items-center justify-center gap-3"
        >
          <img
            src={git}
            alt="Git"
            className="transition-all duration-500 hover:scale-125"
          />
          <p className="text-xl font-semibold uppercase">Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
