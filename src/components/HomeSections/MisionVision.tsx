export const MisionVision = () => {

    return (
        <section className='w-[70%] relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <div>
                <h3
                    className='text-gray-900 text-center text-3xl font-extrabold'
                    style={{
                        fontFamily: "'Caveat', cursive"
                    }}
                >   
                    Nuestra Misión:
                </h3>
                <p className='text-center font-mono text-gray-800 text-lg tracking-wider'>
                    Ayudar, apoyar e impulsar a nuestros clientes a impulsar su marca con soluciones tecnológicas
                    creadas unicamente para ellos, todas ello en un entorno amigable junto con nustro equipo de trabajo
                </p>
            </div>
            <div>
                <h3
                    className='text-gray-900 text-center text-3xl font-extrabold'
                    style={{
                        fontFamily: "'Caveat', cursive"
                    }}
                >   
                    Nuestra Visión:
                </h3>
                <p className='text-center font-mono text-gray-800 text-lg tracking-wider'>
                    Ser una compañía con presencia global, enfocada en la innovación en el sector del marketing
                    siempre aportar a más, a lo mejor, y a lo posible.
                </p>
            </div>
        </section>
    );
}