import { Navbar } from './Navbar';

export const Header = () => {

    return (
        <header 
            className={`w-full bg-slate-50 lg:flex-row px-10 pb-3 h-[100vh]`}
            style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundImage:'url("https://www.10wallpaper.com/wallpaper/1366x768/1304/laptop_room_on_the_desk-Digital_products_HD_widescreen_Wallpaper_1366x768.jpg")'
            }}
        >
            <div className='flex justify-between z-30 items-center w-full mb-3 py-5'>
                <Navbar />
            </div>
            <div className='w-full h-full absolute z-10 left-0 top-0 flex justify-center items-center flex-col'>
                <h2 className='text-6xl'
                    style={{
                        fontFamily: '"Caveat", "cursive"',
                        textShadow: '0 0 5px #e0e0e089'
                    }}
                >  
                    MONARKHA

                </h2>
                <p 
                    style={{
                        textShadow: '0 0 5px #e0e0e089'
                    }}
                    className='font-bold font-mono text-gray-950 text-lg'
                >
                    Diseño y desarrollo de paginas webs
                </p>
            </div>
        </header>
    )
}