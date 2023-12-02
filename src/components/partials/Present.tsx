import { FC } from "react"

interface Props {
    text: string,
    prg?: string
}

export const Present: FC<Props> = ({ text, prg }) => {

    return (
        <p>
            <h3 
                className='w-[600px] mx-auto mt-5 font-extrabold text-center text-5xl text-gray-950'
                style={{
                    textShadow: '0 0 9px #f2f2f289'
                }}
            >
                {text}
            </h3>
            { prg && <h6>{prg}</h6> }
        </p>
    );
}