import { Footer } from "../components/Footer";
import React, { ReactNode } from "react";
import { Header } from "../components/Header";
import { Structure } from "./Structure";

interface Props {
    children: ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {

    return (
        <div className='w-full min-h-screen bg-slate-200'>
            <Structure />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}