import { ModelCard } from "../partials/ModelCard"

export const Description = () => {

    return (
        <section>
            <h1 className='text-center tracking-wider text-3xl font-bold'>¿Que esperas para tener tu pagina web?</h1>

            <div className='mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-[95%] relative mx-auto'>
                <ModelCard 
                    h1='Alcance' 
                    p='página web te permite llegar a un público global, sin importar la ubicación geográfica, lo que puede ayudar a expandir tu negocio o proyecto.'
                />
                <ModelCard 
                    h1='Visibilidad' 
                    p='Una página web informativa te permite llegar a un público más amplio, ya que cualquier persona con acceso a internet puede acceder a tu información.'
                />
                <ModelCard
                    h1='Diferenciación'
                    p='Una página web informativa te permite destacarte frente a la competencia, mostrando tus fortalezas y diferenciándote en el mercado.'
                />
                <ModelCard
                    h1='Credibilidad'
                    p='Tener una página web bien estructurada y con información relevante puede aumentar la credibilidad de tu negocio o proyecto.'
                />
            </div>
        </section>
    )
}