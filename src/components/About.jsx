
export const About = () => {
  
    return (
    <div name='home' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className="max-w-[1000px] w-full flex">
                <div className='text-right pb-8 pl-4'>
                    <p className='text-3xl font-bold inline border-b-4 border-red-300'>Acerca de mí</p>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4'>
               <div>
                    <p className='md:text-right text-4xl font-bold'>Hola soy Carlos, un placer tenerte acá, por favor echa un vistazo.</p>
               </div>
               <div>
                    <p>Soy una persona apasionada y proactiva por la programación y el desarrollo de software, he realizado proyectos y APP'S donde he aprendido muchas cosas sobre este hermoso mundo. </p>
               </div>
            </div>
        </div>
    </div>
    )

}
