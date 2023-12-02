import WS from '../assets/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp';


export const Structure = () => {

    return (
        <aside className='z-50 fixed right-10 bottom-10 flex justify-center items-center flex-col gap-3'>
            <a href='https://wa.me/+584128606734' target='LAN' className='z-60 w-32 h-32 bg-green-100 hover:bg-green-200 shadow ho text-4xl flex justify-center items-center rounded-full'>
                <img src={WS} />
            </a>
        </aside>
    );
}