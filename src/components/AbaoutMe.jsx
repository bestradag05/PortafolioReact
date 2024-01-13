const AbaoutMe = () => {
    return (
        <section className="bg-primaryLight">
            <div className="max-w-screen-xl px-8 py-8 lg:py-12 xl:px-16 mx-auto flex">

                <div className="bg-aboutMe bg-no-repeat bg-center w-1/2 flex justify-end items-center px-12">
                    <h2 className="text-3xl text-white uppercase font-semibold titulo_subrayado">About Me</h2>
                </div>
                <div className="w-1/2 px-12">
                    <p className="text-white text-justify mb-4 text-sm">
                        Bachelor in Systems Engineering with experience in technical support for more than 2 years. Passionate about programming and web development, always looking for new challenges and opportunities to grow in this exciting field.
                    </p>
                    <p className="text-white text-justify mb-4 text-sm">
                        My primary focus is on JavaScript, Java, and PHP, and I have gained a solid knowledge of each of them. I consider myself a self-taught person, constantly learning and improving my skills to offer innovative and efficient solutions. Let's connect and explore the possibilities of working together!
                    </p>

                    <div className="flex justify-center">
                        <button className="bg-secondary text-sm text-white p-3 my-5 mx-4 border-2 border-secondary rounded ">View Works</button>
                        <button className="bg-transparent text-sm text-secondary p-3 my-5 mx-4 border-2 border-secondary rounded ">Download CV</button>
                    </div>
                </div>

            </div>


        </section>
    );
}

export default AbaoutMe;