import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import bs from "../assets/skills/bootstrap.png";
import mongo from "../assets/skills/mongo.png";
import mysql from "../assets/skills/mysql.png";

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="">
        <h2 className="titulo_subrayado text-3xl font-semibold uppercase text-white">
          My Skills
        </h2>
      </div>
      <div className="container flex items-center justify-center gap-28 py-8 lg:py-12">
        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={react} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">React</p>
        </div>

        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={node} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">Node.js</p>
        </div>

        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={express} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">Express</p>
        </div>

        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={bs} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">Bootstrap</p>
        </div>

        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={mongo} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">MongoDB</p>
        </div>

        <div className="flex h-auto w-16 flex-col items-center justify-center gap-3">
          <img src={mysql} alt="JavaScript en BegCode" />
          <p className="uppercase text-white">MySql</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
