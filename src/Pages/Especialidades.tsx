
import EspecialidadeCard from "../Components/Cards/EspecialidadesCard";
import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import { especialidades } from "../Utils/Especialidades";

export default function EspecialidadesPage() {
    return (
        <div className="font-display bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <Header />
            <div className="items-center flex flex-col my-10 p-6">
                <text className="md:text-7xl text-5xl text-white my-10">
                    Especialidades
                </text>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2">
                    {especialidades.map((esp, index) => {
                        return (
                            <EspecialidadeCard esp={esp} key={index}/>
                        )
                    })}

                </div>
                <text className="text-xl text-white my-16 text-center">
                    Serviços especializados como clinico geral e também serviços terceirados como radiologia, ortopedia e ultrassonografia.
                </text>

            </div>

            <Footer />
        </div>
    )
}