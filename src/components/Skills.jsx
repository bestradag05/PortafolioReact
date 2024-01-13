import react from '../assets/skills/react.png';
import node from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import bs from '../assets/skills/bootstrap.png';
import mongo from '../assets/skills/mongo.png';
import mysql from '../assets/skills/mysql.png';

const Skills = () => {
    return (
        <section className='bg-skills px-8 py-8 lg:py-12 xl:px-16'>
            <div className="flex justify-center ">
                <h2 className="text-3xl text-white uppercase font-semibold titulo_subrayado">My Skills</h2>
            </div>
            <div className="container py-8 lg:py-12 flex justify-center items-center gap-28">
            
                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={react} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>React</p>
                </div>

                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={node} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>Node.js</p>
                </div>

                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={express} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>Express</p>
                </div>

                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={bs} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>Bootstrap</p>
                </div>

                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={mongo} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>MongoDB</p>
                </div>

                <div className="w-16 h-auto flex flex-col justify-center items-center gap-3">
                    <img src={mysql} alt="JavaScript en BegCode" />
                    <p className='text-white uppercase'>MySql</p>
                </div>
            </div>

        </section>
    );
}

export default Skills;