import { Description } from "../components/HomeSections/Description";
import FINEX from "../assets/mundo.png";
import AESTHTIC from '../assets/Aestetic.jpg';
import MODERN from '../assets/Modern.jpg';
import MINIMAL from '../assets/Minimalista.jpg';
import PERIODICO from '../assets/Periodico.jpg';
import { MisionVision } from "../components/HomeSections/MisionVision";
import { Valores } from "../components/HomeSections/Valores";


export const Home = () => {

    return (
        <>
            <div className='mt-5 lg:mt-10 grid gap-y-3'>
                <Description />
                <section className='w-[95%] relative mx-auto grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-14 gap-10'>
                    <div className='p-10 bg-gray-600 rounded-xl flex justify-center items-center'>
                        <img src={FINEX} className='w-auto' />
                    </div>
                    <div className='p-10 text-lg text-gray-800 tracking-widest text-center flex justify-center items-center'>
                        Una página web le brinda a una empresa un alcance global, permitiéndole llegar a un público más
                        amplio sin importar la ubicación geográfica. Además, proporciona una plataforma para comunicarse
                        directamente con los clientes, aumentar la credibilidad, generar leads y obtener datos sobre el 
                        comportamiento de los visitantes. También puede ayudar a diferenciarse de la competencia y mejorar 
                        el posicionamiento en los resultados de búsqueda. Una página web puede proporcionar una 
                        mayor visibilidad, credibilidad y oportunidades de crecimiento para una empresa.
                    </div>
                </section>
                <section className='w-[95%] relative mx-auto grid grid-cols-1 lg:grid-cols-2 p-5 lg:p-14 gap-10'>
                    <div className='flex justify-center items-center'>
                        <div 
                            className='
                                h-[250px] w-[500px] bg-gray-300 after:absolute flex justify-center items-center flex-col
                                after:w-[500px] after:h-[250px] after:border-4 after:border-gray-950 after:translate-x-3 after:translate-y-3
                                '
                        >   
                            <span 
                                className='text-3xl' 
                                style={{
                                    fontFamily: "'Caveat', cursive"
                                }}
                            >
                                ¡Tu web puede tener el diseño que desees!
                            </span>
                            <span 
                                className='text-6xl' 
                                style={{
                                    fontFamily: "'Caveat', cursive"
                                }}
                            >
                                ¡Contactame!
                            </span>
                        </div>
                    </div>
                    <div className='p-5 bg-gray-600 rounded-xl flex justify-center items-center gap-x-2'>
                        <img src={AESTHTIC} className='flex-1 hover:flex-[12] w-[120px] h-[350px] transition-all ease-out' />
                        <img src={MODERN} className='flex-1 hover:flex-[12] w-[120px] h-[350px] transition-all ease-out' />
                        <img src={MINIMAL} className='flex-1 hover:flex-[12] w-[120px] h-[350px] transition-all ease-out' />
                        <img src={PERIODICO} className='flex-1 hover:flex-[12] w-[120px] h-[350px] transition-all ease-out' />
                    </div>
                </section>
                <MisionVision />
                <Valores />
            </div>
        </>
    )
}