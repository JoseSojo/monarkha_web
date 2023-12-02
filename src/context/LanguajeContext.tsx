import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Translate } from "../languaje/index.languaje";

export type LanguajeSupported = 'es' | 'en'

const LanguajeList: LanguajeSupported[] = ['es','en'];

interface LanguajeInterface {
    code: LanguajeSupported,
    updateCode: Dispatch<SetStateAction<LanguajeSupported>>
    listCode: LanguajeSupported[],
    translates: typeof Translate.ES,
    updateTranslate: Dispatch<SetStateAction<typeof Translate.ES>>
}

const defaultValues: LanguajeInterface = {
    code: 'es',
    updateCode: () => {},
    listCode: LanguajeList,
    translates: Translate.ES,
    updateTranslate: () => {}
}

export const LanguajeContext = createContext<LanguajeInterface>(defaultValues);

interface Props {
    children: ReactNode
}

export const LanguajeProvider: React.FC<Props> = ({children}) => {
    const payloadStore = window.localStorage.getItem('payload') as LanguajeSupported;
    const payloadDefine: LanguajeSupported = payloadStore ? payloadStore : 'es';

    const translateDefined = 
        payloadDefine == 'es' ? Translate.ES : Translate.EN

    if(!payloadStore) window.localStorage.setItem('payload', 'es');

    const [payload, setPayload] = useState<LanguajeSupported>(payloadDefine);
    const [translate, setTranslate] = useState<typeof Translate.ES>(translateDefined);

    return (
        <LanguajeContext.Provider
            value={{
                code:payload,
                updateCode:setPayload,
                listCode: LanguajeList,
                translates: translate,
                updateTranslate: setTranslate
            }}
        >
            {children}
        </LanguajeContext.Provider>
    )
} 

export const useLanguaje = () => useContext(LanguajeContext);
