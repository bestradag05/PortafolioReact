import apv from '../assets/projects/apvveterinario.png'
import styled from 'styled-components';

const ProjectItem = styled.div`

    &:hover::before{
            opacity: 1;
    }

    &:hover div{
            opacity: 1;
    }

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        background-color: rgba(0,0,0,0.5);
        transition: all .5s ease;
    }
`;

const SectionProjects = () => {
    return (
        <section>
            <div className="flex justify-center mb-10 ">
                <h2 className="text-3xl text-white uppercase font-semibold titulo_subrayado">Projects</h2>
            </div>

            <div className="grid grid-cols-2">
                <ProjectItem className='max-w-xl relative'>
                    <img src={apv} alt="Apv Veterinario - Sistema de gestion veterinaria"
                        className='rounded-md' />

                    <div className='absolute top-0 p-10 text-white opacity-0'>
                        <h3 className='text-center my-5'>APV - Sistema de Gestion Veterinaria</h3>
                        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates quia, repellat sequi recusandae, quas alias magnam molestias corporis nostrum, laborum autem et explicabo hic numquam omnis. Necessitatibus, quasi dolorum.</p>
                    </div>
                </ProjectItem>

            </div>
        </section>
    );
}

export default SectionProjects;