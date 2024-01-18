import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/express.png";
import bs from "../assets/skills/bootstrap.png";
import mongo from "../assets/skills/mongo.png";
import mysql from "../assets/skills/mysql.png";

const Skills = () => {
  return (
    <section className="bg-skills mb-8 flex flex-col items-center justify-center pt-10 lg:h-[500px]">
      <div className="">
        <h2 className="titulo_subrayado text-3xl font-semibold uppercase">
          My Skills
        </h2>
      </div>
      <div className="container flex flex-wrap items-center justify-center gap-28 py-8 lg:py-12">
        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={react} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">React</p>
        </div>

        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={node} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">Node.js</p>
        </div>

        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={express} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">Express</p>
        </div>

        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={bs} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">Bootstrap</p>
        </div>

        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={mongo} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">MongoDB</p>
        </div>

        <div className="flex h-auto w-14 flex-col items-center justify-center gap-3">
          <img src={mysql} alt="JavaScript en BegCode" />
          <p className="text-xl font-semibold uppercase">MySql</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
