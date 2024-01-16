import apv from '../assets/projects/apvveterinario.png'
import contrecargo from '../assets/projects/contrecargo.png'
import orbeaduanas from '../assets/projects/orbeaduanas.png'
import tienda from '../assets/projects/tienda-virtual.png'
import react from '../assets/skills/react.png';
import node from '../assets/skills/node.png';
import express from '../assets/skills/express.png';
import mongo from '../assets/skills/mongo.png';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import bootstrap from '../assets/skills/bootstrap.png';
import js from '../assets/skills/js.png';
import Project from './Project';



const SectionProjects = () => {


    return (
        <section className='my-5'>
            <div className="flex justify-center mb-10 ">
                <h2 className="text-3xl text-white uppercase font-semibold titulo_subrayado">Projects</h2>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <Project name="APV - Sistema de gestion veterinaria" image={apv} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." tecnology={[react, node, express, mongo]} />

                <Project name="Orbe Aduanas" image={orbeaduanas} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." tecnology={[html, css, bootstrap, js]} />

                <Project name="Contrecargo" image={contrecargo} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." tecnology={[html, css, bootstrap, js]} />

                <Project name="Tienda Virtual" image={tienda} text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil." tecnology={[html, css, bootstrap, js]} />
            </div>
        </section>
    );
}

export default SectionProjects;