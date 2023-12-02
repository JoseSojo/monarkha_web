import { FC, useState } from "react";

interface Props {
    img: any,
    title: string,
    h?: string,
    listImg?: any[];
}

export const CardImage: FC<Props> = ({ img, title, listImg, h }) => {

    const [modal, setModal] = useState(false);
    const hei = h ? `h-[${h}]` : 'h-[200px]'

    return (
        <>
            {
                modal && listImg &&
                <div className='top-0 w-screen h-screen fixed bg-black bg-opacity-60 grid place-items-center'>
                    <div className='w-[80%] lg:w-[50%] bg-white rounded-t-md grid'>
                        <div className='flex justify-between px-10'>
                            <h2 className='py-3 text-2xl font-bold tracking-widest text-gray-950'>{title}</h2>
                            <span className='my-auto text-red-500 font-bold cursor-pointer' onClick={()=>{setModal(false)}}>X</span>
                        </div>
                        <div className='flex w-full h-[450px]'>
                            {
                                listImg.map((item, i) => (
                                    <img key={i} src={item} className='flex-1 hover:flex-[5] object-cover w-[10%] transition-all ease-in' />
                                ))
                            }
                        </div>
                    </div>
                </div>
            }
            <div className='w-full bg-white rounded-md h-auto shadow-lg'>
                <img src={img} className={`rounded-t-md w-full ${hei} object-cover`} onClick={()=>{setModal(true)}} />
                <h2 className='w-full text-center py-3 rounded-b-md bg-gray-50 text-gray-900 font-bold text-xl'>{title}</h2>
            </div>
        </>
    )
}
