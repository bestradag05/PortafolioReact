import { useState } from "react";

const Project = ({ name, text, image, tecnology }) => {

    const [hovered, setHovered] = useState(false);

    const imagen ={
        backgroundImage : `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex p-4">
            <div className={`relative h-72 max-h-72 lg:w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden`} onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)} style={imagen} >

                

                <div className={`absolute  ${hovered ? 'w-8/12 p-4 ' : 'w-0 delay-300'}  transition-all duration-700 right-0 h-72 max-h-72  bg-[#f3f3f3] rounded-b lg:rounded-b-none lg:rounded-r  flex flex-col justify-between leading-normal`}>
                    <div className={`${hovered ? 'opacity-100 delay-300' : 'opacity-0 '} transition-all duration-700`}>

                        <div className="text-primaryLight text-center font-bold text-xl mb-2 border-b-2 pb-2 border-primary">{name}</div>
                        <p className="text-gray-700 text-sm">{text}</p>

                        <div className='flex justify-around items-center my-3 px-5'>
                            {
                                tecnology.map((tec, index) => {
                                    let tecEditado = tec.slice(1);
                                    return (
                                        <div key={index} className='rounded-full bg-primary w-9 p-2 '>
                                            <img src={tecEditado} alt={tecEditado}/>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div className="flex items-center justify-between pr-8">
                        <p className="text-gray-900 leading-none">@begcode</p>
                        <div className='flex gap-5'>
                            <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                            <a href="#"><i className="fa-brands fa-github"></i></a>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
}

export default Project;