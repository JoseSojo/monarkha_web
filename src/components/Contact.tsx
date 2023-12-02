export const FormContact = () => {

    return (
        <div className='bg-gray-100 bg-opacity-50 rounded-xl py-5'>
            <h3 
                className='text-black text-center text-5xl'
                style={{ fontFamily: "'Caveat', cursive", textShadow:'0 0 6px #f2f2f289' }}
            >
                Contactame
            </h3>
            <form className='grid grid-cols-1 p-5 gap-y-3'>
                <div className='grid w-[60%] mx-auto'>
                    <label className='text-lg flex justify-center items-center text-gray-800'>Nombre y Apellido</label>
                    <input type='text' name='name_lastname' className='p-3 border rounded-md' placeholder='Nombre Apellido' />
                </div>
                <div className='grid w-[60%] mx-auto'>
                    <label className='text-lg flex justify-center items-center text-gray-800'>Correo Electrónico</label>
                    <input type='email' name='name_lastname' className='p-3 border rounded-md' placeholder='youremail@gmail.com' />
                </div>
                <div className='grid w-[60%] mx-auto'>
                    <label className='text-lg flex justify-center items-center text-gray-800'>Mensaje</label>
                    <input type='email' name='name_lastname' className='p-3 border rounded-md' placeholder='Escribe un mensaje' />
                </div>
                <div className='grid w-[60%] mx-auto'>
                    <input type='submit' className='py-3 px-10 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-bold cursor-pointer' value='Enviar' />
                </div>
            </form>
        </div>
    );
} 