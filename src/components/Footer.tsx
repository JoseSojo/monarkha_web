// import { FormContact } from "./Contact";
import WS from '../assets/whatsapp.png';
//import IN from '../assets/linkedin.png';
//import GH from '../assets/github.png';
import TG from '../assets/telegram.png';

export const Footer = () => {

    return (
        <footer 
            className={`w-full bg-slate-50 lg:flex-row px-10 pb-3 min-h-[50vh] mt-10 z-10`}
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundImage:'url("https://www.10wallpaper.com/wallpaper/1366x768/1304/laptop_room_on_the_desk-Digital_products_HD_widescreen_Wallpaper_1366x768.jpg")'
            }}
        >
            <div className='w-full h-full z-20 grid grid-cols-1 lg:grid-cols-2 p-10 gap-10'>
                {/*"<FormContact /> */}
                <div>
                    <h3 
                        className='text-white text-center text-5xl'
                        style={{ fontFamily: "'Caveat', cursive", textShadow:'0 0 6px #00000089' }}
                    >
                        MONARKHA
                    </h3>
                    <p 
                        className='text-lg text-gray-200 font-bold mt-5'
                        style={{ textShadow:'0 0 6px #000000de' }}
                    >
                        <ul>
                            <li className='list-none'>
                                Diseño y desarrollo de paginas webs informativas
                            </li>
                            <li className='list-none'>
                                +1 año de experiencia
                            </li>
                            <li className='list-none'>
                                Confianza, disciplina y lealtad
                            </li>
                            <li className='list-none'>
                                Enfocados en crecer
                            </li>
                        </ul>
                    </p>
                    <div className='p-4 grid grid-cols-2'>
                        <a href='https//t.me/josesojo18' className=''>
                            <img src={TG} className='w-11 h-11 mx-auto' />
                            <p style={{textShadow:'0 0 5px #0f0f0f98'}} className='text-center font-bold text-white'>Telegram</p>
                        </a>
                        <a href='https//wa.me/+584128606734' className=''>
                            <img src={WS} className='w-11 h-11 mx-auto' />
                            <p style={{textShadow:'0 0 5px #0f0f0f98'}} className='text-center font-bold text-white'>Whatsapp</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}