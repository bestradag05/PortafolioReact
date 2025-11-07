import react from "../assets/skills/react.png";
import node from "../assets/skills/node.png";
import php from "../assets/skills/php.png";
import laravel from "../assets/skills/laravel.png";
import express from "../assets/skills/express.png";
import docker from "../assets/skills/docker.png";
import bs from "../assets/skills/bootstrap.png";
import mongo from "../assets/skills/mongo.png";
import mysql from "../assets/skills/mysql.png";
import git from "../assets/skills/git.png";

const Skills = () => {
  const skills = [
    { src: react, alt: "React", name: "React" },
    { src: php, alt: "PHP", name: "PHP" },
    { src: laravel, alt: "Laravel", name: "Laravel" },
    { src: node, alt: "Node.js", name: "Node.js" },
    { src: express, alt: "Express.js", name: "Express" },
    { src: docker, alt: "Docker", name: "Docker" },
    { src: bs, alt: "Bootstrap", name: "Bootstrap" },
    { src: mongo, alt: "MongoDB", name: "MongoDB" },
    { src: mysql, alt: "MySQL", name: "MySQL" },
    { src: git, alt: "Git", name: "Git" },
  ];

  return (
    <section
      id="skills"
      className="bg-skills mb-8 flex flex-col items-center justify-center pt-10 lg:h-[500px]"
    >
      <div>
        <h2
          data-aos="fade-up"
          className="titulo_subrayado text-3xl font-semibold uppercase"
        >
          My Skills
        </h2>
      </div>
      <div className="container mt-10 flex flex-wrap items-center justify-center gap-20 px-8 py-8 lg:py-12 xl:justify-around">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`} // Retraso progresivo para cada skill
            data-aos-duration="700" // Duración de la animación
            className="flex h-auto w-14 flex-col items-center justify-center gap-3"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="transition-all duration-500 hover:scale-125"
            />
            <p className="text-xl font-semibold uppercase">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
