import Modern from "../../assets/Modern.jpg";
import Aestethic from '../../assets/Aestetic.jpg';
import Minimalista from '../../assets/Minimalista.jpg';

import Anime from "../../assets/Anime.jpg";
import Anime2 from "../../assets/Anime2.jpg";
import Cyberpunk from "../../assets/Cyberpunk.jpg";
import Dibujo from "../../assets/Dibujo.jpg";
import Disney from "../../assets/Disney.jpg";
import Disney2 from "../../assets/Disney2.jpg";
import Gotic from "../../assets/Gotic.jpg";
import Manga from "../../assets/Manga.jpg";
import Periodico from "../../assets/Periodico.jpg";
import Medieval from "../../assets/Medieval.jpg";
import Medieval2 from "../../assets/Medieval2.jpg";


import { CardImage } from "../partials/CardImage";

export const ShowModels = () => {

    const ListAnime = [Anime, Anime2];
    const ListCyberpunk = [Cyberpunk];
    const ListDibujo = [Dibujo];
    const ListDisney = [Disney, Disney2];
    const ListMedieval = [Medieval, Medieval2];
    const ListGotic = [Gotic];
    const ListManga = [Manga];
    const ListPeriodico = [Periodico];

    return (
        <section>
            <h2 className='mt-14 text-center tracking-wider text-gray-900 text-3xl font-bold'>¿Selecciona entre los mejores diseños?</h2>
            <h6 className='text-center text-gray-600 tracking-wider text-xl font-bold'>¡Diseños 100% personalizables!</h6>

            <div className='mt-5 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[95%] mx-auto relative'>
                <CardImage h='300px' img={Modern}  title='Estilo Moderno.' />
                <CardImage h='300px' img={Minimalista} title='Estilo Minimalista.' />
                <CardImage h='300px' img={Aestethic} title='Estilo Estético.' />
            </div>

            <div className='mt-5 grid place-items-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[95%] mx-auto relative'>
                <CardImage img={Anime} listImg={ListAnime} title='Estilo Anime.' />
                <CardImage img={Cyberpunk} listImg={ListCyberpunk} title='Estilo Cyberpunk.' />
                <CardImage img={Dibujo} listImg={ListDibujo} title='Estilo Dibujo.' />
                <CardImage img={Disney} listImg={ListDisney} title='Diseño Disney.' />
                <CardImage img={Gotic} listImg={ListGotic} title='Estilo Gotico.' />
                <CardImage img={Manga} listImg={ListManga} title='Estilo Manga.' />
                <CardImage img={Periodico} listImg={ListPeriodico} title='Estilo Periodico.' />
                <CardImage img={Medieval} listImg={ListMedieval} title='Estilo Medieval.' />
            </div>
        </section>
    )
}