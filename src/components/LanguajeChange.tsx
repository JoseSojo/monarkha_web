import { useState } from "react";
import { FiGlobe } from "react-icons/fi"
import { LanguajeSupported, useLanguaje } from "../context/LanguajeContext";
import { Translate } from "../languaje/index.languaje";

export const LanguajeChange = () => {
    const [isOpen, setIsOpen] = useState(false);
    const languaje = useLanguaje();

    const ChangeLanguaje = () => {
        const pay:LanguajeSupported = languaje.code == 'es' ? 'en' : 'es';
        window.localStorage.setItem('payload', pay);
        languaje.updateCode(pay);
        if(pay == 'es') languaje.updateTranslate(Translate.ES)
        else if(pay == 'en') languaje.updateTranslate(Translate.EN)
        else languaje.updateTranslate(Translate.ES)
        setIsOpen(false);
    }

    return (
        <>
            <button onClick={()=>{ setIsOpen(!isOpen) }} className="hidden md:flex items-center text-gray-950 focus:outline-none font-medium text-2xl hover:scale-110" type="button">
                <FiGlobe /> <span>Idioma</span>
            </button>
            {
                isOpen &&
                <ul className='z-50 h-auto absolute top-11 -translate-x-16 bg-gray-300 p-1 gap-1 grid rounded-md'>
                    {
                        languaje.listCode.map((item, i) => (
                            <li onClick={ChangeLanguaje} className='px-14 py-2 bg-white hover:bg-gray-100' key={i}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            }
        </>
    )
}