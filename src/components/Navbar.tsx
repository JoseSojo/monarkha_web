import { useLanguaje } from '../context/LanguajeContext';
import { BsPersonFill, BsHouseFill, BsKeyFill, BsMoonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LOGO from '../assets/img.png';
import { LanguajeChange } from './LanguajeChange';

export const Navbar = () => {
    const languaje = useLanguaje();
    
    
    return (
        <nav className='z-50 h-full mt-5 lg:mt-0 flex justify-center mx-auto'>
            <ul className='flex justify-center items-center gap-x-10 h-full'>
                <li className='text-2xl hidden lg:flex items-center gap-x-2'>
                    <BsMoonFill /> <span>Modo</span>
                </li>
                <LanguajeChange />
                <li className='block'>
                    <img src={LOGO} className='w-20 h-20' />
                </li>
                <Link to='/'>
                    <li className='text-2xl hidden lg:flex items-center gap-x-2'>
                        <BsHouseFill /> <span>Inicio</span>
                    </li>
                </Link>
                <Link to='/about'>
                    <li className='text-2xl hidden lg:flex items-center gap-x-2'>
                        <BsPersonFill /> <span>Información</span>
                    </li>
                </Link>

            </ul>
        </nav>
    )
}