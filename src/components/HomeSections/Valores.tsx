export const Valores = () => {
    return (
        <section className='mt-11 w-full relative mx-auto grid place-items-center px-16 bg-'>
            <div>
                <h3
                    className='text-gray-900 text-center text-6xl font-extrabold mb-5'
                    style={{ fontFamily: "'Caveat', cursive" }}
                >   
                    Nuestros Valores:
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='grid grid-cols-1 place-items-center p-5 bg-white rounded-xl shadow-lg'>
                        <h3
                            className='text-gray-900 text-center text-3xl font-extrabold'
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >   
                            Eficiencia:
                        </h3>
                        <p className='tracking-wider text-center font-mono text-gray-800 text-lg'>
                            Trabajamos siempre con profesionalidad y calidad, optimizando
                            el tiempo y esfuerzos para proporcionar los mejores resultados
                        </p>
                    </div>

                    <div className='grid grid-cols-1 place-items-center p-5 bg-white rounded-xl shadow-lg'>
                        <h3
                            className='text-gray-900 text-center text-3xl font-extrabold'
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >   
                            Enfocado al Cliente:
                        </h3>
                        <p className='tracking-wider text-center font-mono text-gray-800 text-lg'>
                            El cliente es nuestra razón de ser y por ellos siempre
                            estamos junto a ellos, considerando sus necesidades y aportandoles valor
                        </p>
                    </div>

                    <div className='grid grid-cols-1 place-items-center p-5 bg-white rounded-xl shadow-lg'>
                        <h3
                            className='text-gray-900 text-center text-3xl font-extrabold'
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >   
                            Innovación:
                        </h3>
                        <p className='tracking-wider text-center font-mono text-gray-800 text-lg'>
                            Con más de un año de experiencia adaptandonos a cambios, incorporando nuevas 
                            innovaciones tecnológicas para que nuestros clientes tengan un mejor servicio
                        </p>
                    </div>

                    <div className='grid grid-cols-1 place-items-center p-5 bg-white rounded-xl shadow-lg'>
                        <h3
                            className='text-gray-900 text-center text-3xl font-extrabold'
                            style={{ fontFamily: "'Caveat', cursive" }}
                        >   
                            Disciplina y Lealtad:
                        </h3>
                        <p className='tracking-wider text-center font-mono text-gray-800 text-lg'>
                            para el éxito a largo plazo es necesario algo más alla del compromiso, de la
                            fidelidad, se requiere Disciplina y Leadtad
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}