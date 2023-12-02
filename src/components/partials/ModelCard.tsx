import { FC } from "react";

interface Props {
    h1: string,
    p: string
}

export const ModelCard: FC<Props> = ({ h1, p }) => {

    return (
        <div className='w-full p-6 bg-white rounded-md h-auto shadow-lg'>
            <p className='text-gray-700 text-xl text-center flex items-center justify-center'>
                <span className='text-cyan-400 text-3xl'>+</span>
                <h1>{h1}</h1>
            </p>
            <p className='mt-5 text-md text-gray-500 text-center'>{p}</p>
        </div>
    )
}
